// app/venue/audit/page.jsx
"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";

const OFFER_KEY = "elt_audit_offer_started";       // localStorage key
const WINDOW_MS = 36 * 60 * 60 * 1000;             // 36 hours

// Stripe (or checkout) URLs – set these to your real links
const CHECKOUT_197 = "https://buy.stripe.com/test_197"; // TODO:
const CHECKOUT_297 = "https://buy.stripe.com/test_297"; // TODO:

export default function AuditPage() {
  const [now, setNow] = useState(() => Date.now());
  const [offerStart, setOfferStart] = useState(null);

  // Determine eligibility this visit:
  // - From /scorecard (same-origin referrer)
const eligibleThisVisit = React.useMemo(() => {
  try {
    const ref = document.referrer || "";
    const { origin } = window.location;
    return ref.startsWith(origin) && new URL(ref).pathname.replace(/\/+$/, "") === "/scorecard";
  } catch { return false; }
}, []);

  // Load/start the window
  useEffect(() => {
    const cookieExpMs = readOfferCookie();
    if (cookieExpMs) {
      // derive start from cookie’s end to power your countdown
      const start = cookieExpMs - WINDOW_MS;
      setOfferStart(start);
      return;
    }

    // fallback same‑device logic you already had
    const stored = safeGetLs(OFFER_KEY);
    if (stored) {
      setOfferStart(Number(stored));
      return;
    }

    if (eligibleThisVisit) {
      const started = Date.now();
      safeSetLs(OFFER_KEY, String(started));
      setOfferStart(started);
    } else {
      setOfferStart(null);
    }
  }, [eligibleThisVisit]);

  async function goToCheckout() {
    const r = await fetch("/api/audit/checkout", { method: "POST", headers: { "Content-Type": "application/json" }});
    const { url } = await r.json();
    window.location.href = url;
  }


  // Tick countdown each second
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const { active, msLeft } = useMemo(() => {
    if (!offerStart) return { active: false, msLeft: 0 };
    const end = offerStart + WINDOW_MS;
    const left = end - now;
    return { active: left > 0, msLeft: Math.max(0, left) };
  }, [offerStart, now]);

  const { h, m, s } = msToHMS(msLeft);

  const price = active ? 197 : 297;
  const checkoutUrl = active ? CHECKOUT_197 : CHECKOUT_297;

  return (
    <main className="min-h-dvh bg-white text-gray-900">
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="mx-auto max-w-3xl">
          {/* Eyebrow + title */}
          {/* <p className="text-sm font-medium text-[#2F5D62]">Audit Offer</p> */}
          <h1 className="mt-2 text-3xl md:text-4xl font-semibold">
            Current tech not playing nice with your business?
          </h1>
          <p className="mt-3 text-gray-600">
            You just got your website scorecard. Where else is generic, bad technology holding you back?
          </p>

          {/* Price / Timer card */}
          <div className="mt-6 rounded-xl border border-[#2F5D62] p-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-sm text-gray-600">{active ? "Special price" : "Standard price"}</p>
                <div className="flex items-end gap-3">
                  {active ? (
                    <>
                      <span className="text-4xl font-bold">$197</span>
                      <span className="text-gray-500 line-through">$297</span>
                    </>
                  ) : (
                    <span className="text-4xl font-bold">$297</span>
                  )}
                </div>
              </div>

              {active ? (
                <div className="text-center sm:text-right">
                  <p className="text-sm text-gray-600">Offer ends in</p>
                  <p className="font-mono text-lg">
                    {pad(h)}:{pad(m)}:{pad(s)}
                  </p>
                </div>
              ) : (
                <div className="text-center sm:text-right">
                  <p className="text-sm text-gray-600">Missed the discount window?</p>
                  <p className="font-mono text-lg"><Link href="mailto:jake@everlesstech.com?subect=I%20missed%20the%20window..."><i>Email me</i></Link>, I'll see what I can do</p>
                </div>
              )}
            </div>

            <button
              onClick={goToCheckout}
              className="mt-5 inline-flex w-full sm:w-auto items-center justify-center rounded-lg px-6 py-3 bg-[#2F5D62] text-white font-semibold no-underline"
            >
              {active ? "Book the $197 Audit" : "Book the Audit"}
            </button>
            

            <p className="mt-3 text-xs text-gray-500">
              If you’re not happy, we don’t deserve your money. Full money‑back guarantee if you’re still feeling lost after the audit.
            </p>
          </div>

          {/* What you get */}
          <div className="mt-10 grid gap-4">
            <h2 className="text-xl font-semibold text-[#2F5D62]">What You Get</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>One‑page plan with the exact fixes in order</li>
              <li>Light mockups/wireframes for key pages</li>
              <li>Quick wins (this week) and bigger wins (next)</li>
              <li>15‑minute review call to walk it through</li>
            </ul>
          </div>

          {/* Why it works */}
          <div className="mt-8 grid gap-4">
            <h2 className="text-xl font-semibold text-[#2F5D62]">Why This Works</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Focus on the few things that move the needle</li>
              <li>Plain English, no tech fog</li>
              <li>Built for phone first, where most visitors are</li>
            </ul>
          </div>

          {/* FAQ-ish */}
          <div className="mt-8 grid gap-3">
            <h2 className="text-xl font-semibold text-[#2F5D62]">What Happens After I Book?</h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <li>Answer 3 quick questions (takes 2 minutes)</li>
              <li>We audit and build your one‑pager</li>
              <li>We send it + hop on a 15‑minute call</li>
            </ol>
          </div>

          {/* Social proof placeholder */}
          <div className="mt-10">
            <h2 className="text-xl font-semibold text-[#2F5D62]">What People Say</h2>
            <p className="text-gray-600 mt-2">Testimonials coming soon.</p>
          </div>

          {/* Fine print */}
          <p className="mt-10 text-xs text-gray-500">
            P.S. If you reached this page from the scorecard or email, your special price window lasts 36 hours.
          </p>
        </div>
      </section>
    </main>
  );
}

/* ---------- helpers ---------- */
function msToHMS(ms) {
  const total = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  return { h, m, s };
}
function pad(n) {
  return String(n).padStart(2, "0");
}
function safeGetLs(k) {
  try { return window.localStorage.getItem(k); } catch { return null; }
}
function safeSetLs(k, v) {
  try { window.localStorage.setItem(k, v); } catch {}
}

function readOfferCookie() {
  try {
    const m = document.cookie.match(/(?:^|;\s*)elt_audit_offer=([^;]+)/);
    return m ? Number(decodeURIComponent(m[1])) : null; // expiry ms
  } catch { return null; }
}
