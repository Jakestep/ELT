// emails/ScorecardDigestEmail.jsx
import * as React from "react";
import {
  Html, Head, Body, Container, Section, Heading, Text, Hr, Img, Link
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

const COLORS = {
  primary:  "#2F5D62",
  surface:  "#E8F1F2",
  surface2: "#D9E2EC",
  text:     "#1F2937",
  border:   "#E5E7EB",
  muted:    "#475569",
};

export default function ScorecardDigestEmail({
  name = "friend",
  url = "https://example.com",
  goal = "Save time",
  metrics = { mobile:{}, desktop:{} }, // { perfScore:0..1, lcpMs, cls, tbtMs }
  auditUrl = "https://everlesstech.com/audit",
  unsubUrl = "https://everlesstech.com/unsubscribe",
  logo28 = "https://everlesstech.com/email/eltlogo-56.png",
  logo20 = "https://everlesstech.com/email/eltlogo-20.png",
}) {
  const m = metrics?.mobile || {};
  const d = metrics?.desktop || {};
  const pct = (x) => (x == null ? "—" : Math.round(x * 100));
  const ms  = (x) => (x == null ? "—" : `${Math.round(x)} ms`);
  const s   = (x) => (x == null ? "—" : `${(x/1000).toFixed(x>=1000?1:2)} s`);

  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="m-0 bg-[#F8FAFC] text-[#1F2937]">
          <Container className="mx-auto my-6 w-full max-w-[560px] bg-white rounded-xl border border-[#E5E7EB] shadow-sm">
            {/* Header */}
            <Section className="px-6 py-5 border-b border-[#E5E7EB]" style={{ backgroundColor: COLORS.surface }}>
              <div className="flex items-center gap-3">
                <Img src={logo28} alt="EverLessTech" width="28" height="28" />
                <Text className="m-0 text-sm font-semibold tracking-wide" style={{ color: COLORS.primary }}>
                  EverLessTech — Less tech. More life.
                </Text>
              </div>
            </Section>

            {/* Title */}
            <Section className="px-6 py-7">
              <Heading as="h2" className="m-0 text-2xl font-semibold">Your Scorecard</Heading>
              <Text className="mt-2 leading-6">Hey {name}! Here’s a simple view of your site and what to fix first.</Text>
              <Text className="mt-1 text-sm text-black/60">{url} · Goal: {goal}</Text>

              {/* Speed & Stability (rounded header corners fixed) */}
              <Heading as="h3" className="mt-6 mb-2 text-lg font-semibold" style={{ color: COLORS.primary }}>
                Speed &amp; Stability
              </Heading>

              <div className="border border-[color:var(--primary,#2F5D62)] rounded-xl">
                {/* header row in a separate table with rounded th cells */}
                <table className="w-full border-separate border-spacing-0">
                  <thead>
                    <tr>
                      <th className="text-left bg-[#D9E2EC] text-[color:var(--primary,#2F5D62)] p-2 font-semibold rounded-tl-xl border-r border-[color:var(--primary,#2F5D62)]">
                        Thing we check
                      </th>
                      <th className="text-left bg-[#D9E2EC] text-[color:var(--primary,#2F5D62)] p-2 font-semibold border-r border-[color:var(--primary,#2F5D62)]">
                        Mobile
                      </th>
                      <th className="text-left bg-[#D9E2EC] text-[color:var(--primary,#2F5D62)] p-2 font-semibold rounded-tr-xl">
                        Desktop
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 border-t border-[color:var(--primary,#2F5D62)] border-r">Performance score (0–100)</td>
                      <td className="p-2 border-t border-[color:var(--primary,#2F5D62)] border-r">{pct(m.perfScore)}</td>
                      <td className="p-2 border-t border-[color:var(--primary,#2F5D62)]">{pct(d.perfScore)}</td>
                    </tr>
                    <tr>
                      <td className="p-2 border-t border-[color:var(--primary,#2F5D62)] border-r">Largest Contentful Paint (LCP)</td>
                      <td className="p-2 border-t border-[color:var(--primary,#2F5D62)] border-r">{s(m.lcpMs)}</td>
                      <td className="p-2 border-t border-[color:var(--primary,#2F5D62)]">—</td>
                    </tr>
                    <tr>
                      <td className="p-2 border-t border-[color:var(--primary,#2F5D62)] border-r">Cumulative Layout Shift (CLS)</td>
                      <td className="p-2 border-t border-[color:var(--primary,#2F5D62)] border-r">{m.cls ?? "—"}</td>
                      <td className="p-2 border-t border-[color:var(--primary,#2F5D62)]">{d.cls ?? "—"}</td>
                    </tr>
                    <tr>
                      <td className="p-2 border-t border-b border-[color:var(--primary,#2F5D62)] border-r rounded-bl-xl">
                        Total Blocking Time (TBT)
                      </td>
                      <td className="p-2 border-t border-b border-[color:var(--primary,#2F5D62)] border-r">{ms(m.tbtMs)}</td>
                      <td className="p-2 border-t border-b border-[color:var(--primary,#2F5D62)] rounded-br-xl">{ms(d.tbtMs)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Why it matters */}
              <div className="mt-3 rounded-lg px-4 py-3" style={{ backgroundColor: COLORS.surface2 }}>
                <Text className="m-0"><b>LCP:</b> shows how fast the biggest thing shows up. Slow LCP makes people leave.</Text>
                <Text className="m-0 mt-1"><b>CLS:</b> shows how much the page jumps. Jumping pages feel broken.</Text>
                <Text className="m-0 mt-1"><b>TBT:</b> shows when the page is too busy to listen. Big TBT makes clicks feel laggy.</Text>
                <Text className="m-0 mt-2 text-xs text-black/60">Aim for LCP &lt; 2s, CLS &lt; 0.1, TBT &lt; 200ms.</Text>
              </div>

              {/* Top fixes (short and kind) */}
              <Heading as="h3" className="mt-6 mb-2 text-lg font-semibold" style={{ color: COLORS.primary }}>
                Top Fixes
              </Heading>
              <ul className="m-0 pl-5">
                {quickWins(goal, m, d).map((r, i) => (
                  <li key={i} className="mb-3">
                    <Text className="m-0"><b>{r.title}</b></Text>
                    <Text className="m-0">Why it matters: {r.why}</Text>
                    <Text className="m-0">What to do: {r.how}</Text>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-6">
                <Text className="m-0 text-sm text-black/60">
                  Want a clear one‑page plan with exact fixes and mockups?
                </Text>
                <a
                  href={auditUrl}
                  className="inline-block mt-2 rounded-lg px-5 py-3 text-white text-sm font-semibold no-underline"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  Book the $197 Audit
                </a>
              </div>

              <Hr className="my-6" style={{ borderColor: COLORS.border }} />

              <Text className="m-0">P.S. You rock!</Text>
              <Text className="mt-1">
                — Jake, EverLessTech{" "}
                <Img src={logo20} alt="ELT" width="20" height="20" style={{ display: "inline-block", verticalAlign: "text-bottom" }} />
              </Text>

              <Text className="mt-5 text-xs text-[#6B7280]">
                If this wasn’t for you, you can{" "}
                <Link href={unsubUrl} className="underline">unsubscribe</Link>{" "}
                anytime.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

/* tiny helper mirroring the PDF’s logic */
function quickWins(goal, m = {}, d = {}) {
  const recs = [];
  if (m.lcpMs != null && m.lcpMs > 3000) {
    recs.push({
      title: "Make pictures lighter",
      why: "Heavy pictures make people wait. Faster pages keep people around.",
      how: "Use AVIF/WebP, compress to ~80%, set sizes, lazy‑load below the fold.",
    });
  }
  if (m.tbtMs != null && m.tbtMs > 200) {
    recs.push({
      title: "Cut heavy code",
      why: "When code is heavy, the page is too busy to listen.",
      how: "Remove unused scripts, split big bundles, load non‑essentials later.",
    });
  }
  if (m.cls != null && m.cls > 0.1) {
    recs.push({
      title: "Stop page jumpiness",
      why: "Jumping pages feel broken.",
      how: "Give images set width/height, reserve space for embeds and fonts.",
    });
  }
  if ((m.perfScore ?? 1) < 0.7 || (d.perfScore ?? 1) < 0.7) {
    recs.push({
      title: "Cache and serve fast",
      why: "Fast pages feel easy. Easy wins trust.",
      how: "Use a CDN/cache, keep server close, trim redirects.",
    });
  }
  if (goal === "More leads") {
    recs.push({ title: "Make the next step clear", why: "If the button is clear, more people click it.", how: "One main button up top. Simple form. Action words like “Get the plan”." });
  } else if (goal === "Save time") {
    recs.push({ title: "Automate follow‑ups", why: "Less typing, fewer misses.", how: "Send forms to inbox + sheet/CRM. Set auto‑replies." });
  } else if (goal === "Look pro") {
    recs.push({ title: "Clean look, same everywhere", why: "A steady look builds trust.", how: "One font, one button style, even spacing." });
  }
  return recs.slice(0, 4);
}

function pick(r) {
  const audits = r?.lighthouseResult?.audits;
  return {
    perfScore: r?.lighthouseResult?.categories?.performance?.score ?? null, // 0..1
    lcpMs: audits?.["largest-contentful-paint"]?.numericValue ?? null,      // ms
    cls: audits?.["cumulative-layout-shift"]?.numericValue ?? null,         // unitless
    tbtMs: audits?.["total-blocking-time"]?.numericValue ?? null,           // ms
  };
}
