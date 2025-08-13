import dns from "node:dns";
try {
  dns.setDefaultResultOrder("ipv4first");
} catch {}

const KEY = process.env.NEXT_PSI_API_KEY;
const UA = "ELT-Scorecard/1.0";

export async function fetchFullMetrics(targetUrl) {
  const url = normalizeUrl(targetUrl);
  const [mobile, desktop] = await Promise.all([
    runPSI(url, "mobile", { timeoutMs: 240000 }),
    runPSI(url, "desktop", { timeoutMs: 240000 }),
  ]);
  return { mobile: pick(mobile), desktop: pick(desktop) };
}

async function runPSI(url, strategy, opts = {}) {
  const { timeoutMs = 240000 } = opts;
  const api = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=${strategy}${
    KEY ? `&key=${KEY}` : ""
  }`;

  const ac = new AbortController();
  const t = setTimeout(() => ac.abort(), timeoutMs);

  let r;
  try {
    r = await fetch(api, {
      signal: ac.signal,
      headers: { "User-Agent": UA },
      cache: "no-store",
    });
  } finally {
    clearTimeout(t);
  }

  const text = await r.text();
  if (!r.ok) {
    let msg = text;
    console.log(msg);
    try {
      msg = JSON.parse(text)?.error?.message || msg;
    } catch {}
    // Common misconfig surfaced clearly:
    if (/referer/i.test(msg) || /API_KEY_HTTP_REFERRER_BLOCKED/i.test(msg)) {
      throw new Error(
        "PSI key is restricted by HTTP referrers — create a server key with NO referrer restriction (API restriction = PageSpeed Insights).",
      );
    }
    if (/api key not valid|keyInvalid/i.test(msg)) {
      throw new Error(
        "PSI API key not valid or missing PageSpeed Insights API restriction.",
      );
    }
    if (/billing/i.test(msg) || /quota|rate/i.test(msg)) {
      throw new Error(
        "PSI quota/billing issue. Enable billing or wait and try again.",
      );
    }
    if (/aborted|timeout/i.test(msg)) {
      throw new Error("PSI request timed out. Try again.");
    }
    throw new Error(`PSI ${strategy} failed: ${msg}`);
  }
  return JSON.parse(text);
}

export async function quickHead(urlString) {
  // Quick reachability check of the user's URL (3s timeout). Not required, but catches obvious typos.
  const url = normalizeUrl(urlString);
  const ac = new AbortController();
  const t = setTimeout(() => ac.abort(), 3000);
  try {
    const r = await fetch(url, { method: "HEAD", signal: ac.signal });
    if (!r.ok && r.status >= 400) throw new Error(`Site responded ${r.status}`);
    return true;
  } finally {
    clearTimeout(t);
  }
}

function pick(r) {
  const audits = r?.lighthouseResult?.audits;
  return {
    perfScore: r?.lighthouseResult?.categories?.performance?.score ?? null, // 0..1
    lcpMs: audits?.["largest-contentful-paint"]?.numericValue ?? null, // ms
    cls: audits?.["cumulative-layout-shift"]?.numericValue ?? null, // unitless
    tbtMs: audits?.["total-blocking-time"]?.numericValue ?? null, // ms
  };
}

function normalizeUrl(input) {
  const s = input.trim();
  const withProto = /^https?:\/\//i.test(s) ? s : `https://${s}`;
  return new URL(withProto).href;
}
