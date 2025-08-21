"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import RippleBackground from "@/common/PondRipple";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Flip3DButton from "@/components/home/general/Flip3DButton";
const GOALS = ["Save time", "More leads", "Look pro"];

export default function ScorecardPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      url: "",
      goal: "Save time",
      frustration: "",
      botfield: "", // honeypot
    },
  });

  const [status, setStatus] = useState({ ok: false, msg: "" });

  const onSubmit = async (values) => {
    if (values.botfield) return;

    setStatus({ ok: false, msg: "" });

    const controller = new AbortController();
    const t = setTimeout(() => controller.abort(), 30000);

    try {
      const res = await fetch("/api/scorecard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          url: normalizeUrl(values.url),
          goal: values.goal,
          frustration: values.frustration?.trim() || "",
        }),
      });
      clearTimeout(t);

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.ok) {
        throw new Error(data?.error || `Request failed (${res.status})`);
      }

      // Show quick confirmation
      setStatus({
        ok: true,
        msg: "Done! It will be in your inbox soon! In the meantime.. care for a special offer?",
      });

      // Redirect after a short pause (optional)
      setTimeout(() => {
        router.push("/venue/audit"); // or your audit funnel page
      }, 2000);

      reset();
    } catch (err) {
      const msg =
        err.name === "AbortError"
          ? "This is taking too long (30s). Please try again."
          : err.message || "Something went wrong. Please try again.";
      setStatus({ ok: false, msg });
    }
  };

  return (
    <RippleBackground>
      <main className="min-h-dvh bg-transparent text-[var(--text,#1F2937)] bg-linear-to-b from-white/10 to-white/50">
        {/* Soft, brandy top gradient */}
        <div className="absolute inset-0 -z-10 " />
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            {/* Header */}
            <header className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-[color:var(--surface,#D9E2EC)] px-3 py-1 text-xs font-medium text-[color:var(--primary,#2F5D62)]">
                <span>Free scorecard</span>
                <span aria-hidden>•</span>
                <span>3‑minute setup</span>
              </div>
              <h1 className="mt-4 text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
                Web worries keeping you awake?
              </h1>
              <p className="mt-3 text-lg text-black/70">
                This scorecard will help you identify 3 of the fastest changes you can make to increase the value of your website.
              </p>
              <div className={`h-fit mt-3 hidden md:flex`} >
                <Flip3DButton
                  frontLabel={<i>I don't have a website..</i>}
                  frontClasses={'bg-accent-800 text-accent-100'}
                  hoverLabel={'Not to worry, friend'}
                  hoverClasses={'bg-accent-600 text-white'}
                  href='/venue/book'
                />
              </div>
              <Link href='/venue/book' className={`underline flex items-center justify-center mt-2 italic md:hidden text-lg`} >I don't have a website..</Link>
            </header>
            {/* Card */}
            <div className="mt-5 rounded-2xl border border-black/5 bg-white/70 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.12)]">
              <div className="rounded-t-2xl border-b border-black/5 bg-[color:var(--surface,#D9E2EC)]/60 px-6 py-4">
                <p className="text-sm">
                  Fill this out and we’ll email your Scorecard.{" "}
                  <span className="text-black/60">
                    And invite you to join Jake's newsletter :D
                  </span>
                </p>
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid gap-5 p-6 sm:p-8"
              >
                {/* Honeypot (hidden from AT + tab order) */}
                <input
                  type="text"
                  name="botfield"
                  autoComplete="off"
                  tabIndex={-1}
                  aria-hidden="true"
                  className="absolute left-[-9999px] m-0 h-0 w-0 overflow-hidden border-0 p-0"
                  {...register("botfield")}
                />
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" error={errors.name?.message}>
                    <input
                      className="mt-1 w-full rounded-lg border border-black/10 bg-white px-4 py-3 ring-0 transition outline-none focus:border-[color:var(--primary,#2F5D62)]/50 focus:shadow-[0_0_0_3px_rgba(47,93,98,0.15)]"
                      placeholder="Your name"
                      {...register("name", {
                        required: "Please enter your name",
                        minLength: { value: 2, message: "Too short" },
                      })}
                    />
                  </Field>
                  <Field label="Email" error={errors.email?.message}>
                    <input
                      type="email"
                      className="mt-1 w-full rounded-lg border border-black/10 bg-white px-4 py-3 ring-0 transition outline-none focus:border-[color:var(--primary,#2F5D62)]/50 focus:shadow-[0_0_0_3px_rgba(47,93,98,0.15)]"
                      placeholder="you@business.com"
                      {...register("email", {
                        required: "Email required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Enter a valid email",
                        },
                      })}
                    />
                  </Field>
                </div>
                <Field
                  label="Website URL"
                  error={errors.url?.message}
                  hint=""
                  className={``}
                >
                  <input
                    className="mt-1 w-full rounded-lg border border-black/10 bg-white px-4 py-3 ring-0 transition outline-none focus:border-[color:var(--primary,#2F5D62)]/50 focus:shadow-[0_0_0_3px_rgba(47,93,98,0.15)]"
                    placeholder="https://example.com"
                    {...register("url", {
                      required: "Website required",
                      validate: (v) =>
                        isLikelyUrl(v) ||
                        "Enter a valid URL (with or without https://)",
                    })}
                  />
                </Field>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Primary goal">
                    <select
                      className="mt-1 w-full rounded-lg border border-black/10 bg-white px-4 py-3 ring-0 transition outline-none focus:border-[color:var(--primary,#2F5D62)]/50 focus:shadow-[0_0_0_3px_rgba(47,93,98,0.15)]"
                      {...register("goal")}
                    >
                      {GOALS.map((g) => (
                        <option key={g} value={g}>
                          {g}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Biggest frustration (optional)">
                    <input
                      className="mt-1 w-full rounded-lg border border-black/10 bg-white px-4 py-3 ring-0 transition outline-none focus:border-[color:var(--primary,#2F5D62)]/50 focus:shadow-[0_0_0_3px_rgba(47,93,98,0.15)]"
                      placeholder="e.g., slow pages, no leads, messy tools…"
                      {...register("frustration")}
                    />
                  </Field>
                </div>
                <div className="mt-2 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative inline-flex items-center justify-center rounded-lg bg-[color:var(--primary,#2F5D62)] px-6 py-3 font-medium text-white transition hover:opacity-95 disabled:opacity-60"
                  >
                    <span className="relative z-10">
                      {isSubmitting ? "Sending…" : "Send My Scorecard"}
                    </span>
                    {/* subtle shimmer while submitting */}
                    {isSubmitting && (
                      <span className="absolute inset-0 animate-pulse rounded-lg bg-white/10" />
                    )}
                  </button>
                  <ul className="space-y-1 text-xs text-black/60">
                    <li>• No spam, ever.</li>
                    <li>• One‑click unsubscribe.</li>
                    <li>• Less tech, more life insights</li>
                  </ul>
                </div>
                {/* status message with aria-live for screen readers */}
                <p
                  aria-live="polite"
                  className={`text-sm ${status.msg ? "mt-1" : ""} ${
                    status.ok ? "text-emerald-700" : "text-red-600"
                  }`}
                >
                  {status.msg}
                </p>
              </form>
            </div>
            {/* Tiny reassurance footer */}
            <p className="mt-6 text-center text-sm text-black/60">
              By submitting, you agree to our{" "}
              <a className="underline underline-offset-4" href="/privacy">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </section>
      </main>
    </RippleBackground>
  );
}

/* ---------- little helpers ---------- */

function Field({ label, hint, error, children, className }) {
  return (
    <div className={className}>
      <label className="block text-sm font-medium">{label}</label>
      {hint && <p className="mt-1 text-xs text-black/50">{hint}</p>}
      {children}
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}

function isLikelyUrl(v) {
  try {
    const u = new URL(v.startsWith("http") ? v : `https://${v}`);
    return !!u.hostname && u.hostname.includes(".");
  } catch {
    return false;
  }
}

function normalizeUrl(v) {
  if (!v) return v;
  return v.startsWith("http") ? v : `https://${v}`;
}
