// emails/send.js
"use server";


import { Resend } from "resend";
import ConsultPrepEmail from "@/emails/ConsultPrep.jsx";

/**
 * Expected form fields (names must match your form inputs):
 * - name* (string)
 * - email* (string)
 * - business (string)
 * - website (string)
 * - experiences_owner (string)
 * - experiences_user (string)
 * - believes_need (string)
 * - goals_text (string)
 * - goals_checks[] (multi-checkbox)
 * - resources[] (multi-checkbox)
 * - wishlist (string)
 * - consent* ("on")
 * - honey (hidden; must be empty)
 *
 * Returns: { ok: boolean, error?: string, fieldErrors?: Record<string,string> }
 */
export async function sendConsultPrep(formData) {
  // --- Honeypot: silently accept to avoid tipping bots they were caught ---
  if ((formData.get("honey") || "").toString().trim().length > 0) {
    return { ok: true };
  }

  // --- Extract ---
  const name = (formData.get("name") || "").toString().trim();
  const email = (formData.get("email") || "").toString().trim();
  const business = (formData.get("business") || "").toString().trim();
  const website = (formData.get("website") || "").toString().trim();

  const experiences_owner = (formData.get("experiences_owner") || "").toString();
  const experiences_user = (formData.get("experiences_user") || "").toString();
  const believes_need = (formData.get("believes_need") || "").toString();
  const goals_text = (formData.get("goals_text") || "").toString();

  const goals_checks = formData.getAll("goals_checks").map(String);
  const resources = formData.getAll("resources").map(String);

  const wishlist = (formData.get("wishlist") || "").toString();
  const consent = (formData.get("consent") || "").toString() === "on";

  // --- Validate ---
  const fieldErrors = {};
  if (!name) fieldErrors.name = "Please enter your name.";
  if (!email || !isValidEmail(email)) fieldErrors.email = "Please enter a valid email.";
  if (!consent) fieldErrors.consent = "Please confirm we can email a copy to you and Jake from EverLessTech.";

  if (Object.keys(fieldErrors).length) {
    return { ok: false, error: "Validation failed.", fieldErrors };
  }

  // --- Env / config ---
  const RESEND_API_KEY = process.env.NEXT_RESEND_API_KEY;
  const FROM = process.env.NEXT_RESEND_FROM || "consult@everlesstech.com";
  const REPLY_TO = process.env.NEXT_RESEND_REPLY_TO || "jake@everlesstech.com";
  const OWNER_EMAIL = "jake@everlesstech.com";
  const SITE_URL =
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_SITE_URL_PROD
      : process.env.NEXT_SITE_URL_DEV;
  const BOOKING_URL = process.env.NEXT_BOOKING_URL || safeJoinUrl(SITE_URL, "/book");

  if (!RESEND_API_KEY) {
    return { ok: false, error: "Email service not configured." };
  }

  // --- Compose props for the email template ---
  const emailProps = {
    name,
    email,
    business,
    website,
    experiences_owner,
    experiences_user,
    believes_need,
    goals_text,
    goals_checks,
    resources,
    wishlist,
    siteUrl: SITE_URL,
    bookingUrl: BOOKING_URL,
  };

  // --- Send via Resend (React template) ---
  try {
    const resend = new Resend(RESEND_API_KEY);
    const toList = dedupeEmails([email, OWNER_EMAIL]);

    await resend.emails.send({
      from: FROM,
      to: toList,
      reply_to: REPLY_TO,
      subject: "Your Consultation Prep – EverLessTech",
      react: ConsultPrepEmail(emailProps),
    });

    return { ok: true };
  } catch (err) {
    console.error("[sendConsultPrep] Resend error:", err);
    return { ok: false, error: "Failed to send email. Please try again." };
  }
}

/* ---------------- helpers ---------------- */

function isValidEmail(v) {
  // Basic (but solid) RFC5322-ish email check
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function dedupeEmails(arr = []) {
  const seen = new Set();
  const out = [];
  for (const e of arr) {
    const s = String(e || "").trim().toLowerCase();
    if (!s) continue;
    if (!seen.has(s)) {
      seen.add(s);
      out.push(s);
    }
  }
  return out;
}

function safeJoinUrl(base = "", path = "") {
  if (!base) return path || "/";
  return `${base.replace(/\/+$/, "")}/${String(path || "").replace(/^\/+/, "")}`;
}

// In email/send.js (same file as sendConsultPrep)
export async function sendReferral(formData, referrerName = "", referrerEmail = "") {
  // Honeypot
  if ((formData.get("honey") || "").toString().trim()) return { ok: true };

  const friendName = (formData.get("friend_name") || "").toString().trim();
  const friendEmail = (formData.get("friend_email") || "").toString().trim();

  if (!friendEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(friendEmail)) {
    return { ok: false, error: "Valid friend email required." };
  }

  const RESEND_API_KEY = process.env.NEXT_RESEND_API_KEY;
  const FROM = process.env.NEXT_RESEND_FROM || "consult@everlesstech.com";
  const REPLY_TO = process.env.NEXT_RESEND_REPLY_TO || "jake@everlesstech.com";
  const OWNER_EMAIL = "jake@everlesstech.com";

  if (!RESEND_API_KEY) return { ok: false, error: "Email service not configured." };

  const { Resend } = await import("resend");
  const resend = new Resend(RESEND_API_KEY);

  const subject = `New referral from ${referrerName || "a visitor"}`;
  const html = `
    <h3>Referral details</h3>
    <p><b>Friend name:</b> ${friendName || "—"}</p>
    <p><b>Friend email:</b> ${friendEmail}</p>
    <hr/>
    <p><b>Referrer name:</b> ${referrerName || "—"}</p>
    <p><b>Referrer email:</b> ${referrerEmail || "—"}</p>
    <p style="color:#6b7280;font-size:12px;margin-top:12px">
      Note: Reminder—only reach out once personally. No automated marketing.
    </p>
  `;

  try {
    await resend.emails.send({
      from: FROM,
      to: [OWNER_EMAIL],
      reply_to: REPLY_TO,
      subject,
      html,
    });
    return { ok: true };
  } catch (e) {
    console.error("[sendReferral] Resend error:", e);
    return { ok: false, error: "Failed to send referral." };
  }
}
