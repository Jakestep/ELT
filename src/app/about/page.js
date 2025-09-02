// app/about/page.jsx
import Header from "@/components/Header";
import FounderCard from "@/components/home/FounderCard";
import Link from "next/link";

export const metadata = {
  title: "About — EverLessTech (ELT)",
  description:
    "ELT builds clean, responsive websites for small teams who want results without the tech headache. Simplicity first. Performance second. Features third.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — EverLessTech (ELT)",
    description:
      "Clean, trustworthy web builds with a client-first process. Less Tech, More Life.",
    url: "/about",
    siteName: "EverLessTech",
    images: ["/og/about.jpg"],
    type: "website",
  },
};

const principles = [
  {
    title: "Simplicity First",
    text:
      "Clear structure, fast paths. We ship what matters and remove what doesn’t.",
  },
  {
    title: "Performance Obsessed",
    text:
      "Lean pages, fast loads, and metrics that improve conversions and SEO.",
  },
  {
    title: "Client-First",
    text:
      "Transparent status, async feedback, and decisions explained in plain English.",
  },
];

const steps = [
  { k: "01", t: "Scope", d: "Define outcomes, audience, and must-have pages." },
  { k: "02", t: "Structure", d: "Site map, content model, and simple wireframes." },
  { k: "03", t: "Build", d: "Next.js + Tailwind, clean components, accessible by default." },
  { k: "04", t: "Iterate", d: "Small updates continuously—no risky big-bangs." },
];

export default function AboutPage() {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "EverLessTech",
    url: "https://www.everlesstech.com",
    slogan: "Less Tech, More Life.",
    sameAs: [],
  };

  return (
    <main className="min-h-[70svh]">
      <Header />
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-accent-100 to-primary-50" />
        <div className="relative mx-auto max-w-5xl px-6 py-20">
          <h1 className="text-balance text-4xl font-semibold text-primary-800 md:text-6xl">
            About EverLessTech
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-lg text-primary-700/80">
            We build websites that feel effortless to use and easy to trust.
            Our rule of three: <span className="font-medium">Simplicity</span> →{" "}
            <span className="font-medium">Performance</span> →{" "}
            <span className="font-medium">Features</span>.
          </p>
        </div>
      </section>

      <FounderCard />

      {/* What we do */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          {principles.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-primary-100 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-primary-800">{p.title}</h3>
              <p className="mt-2 text-primary-700/80">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="rounded-2xl bg-primary-50 p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-primary-900">Our Process</h2>
          <ol className="mt-6 space-y-4">
            {steps.map((s) => (
              <li
                key={s.k}
                className="group flex items-start gap-4 rounded-xl bg-white/70 p-4 ring-1 ring-primary-100 transition hover:bg-white"
              >
                <span className="grid h-9 w-9 place-content-center rounded-lg bg-accent-300/40 text-sm font-semibold text-primary-800">
                  {s.k}
                </span>
                <div>
                  <p className="font-medium text-primary-900">{s.t}</p>
                  <p className="text-primary-700/80">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Who we are */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="grid gap-8 md:grid-cols-[1.2fr,1fr]">
          <div className="rounded-2xl border border-primary-100 bg-white p-6">
            <h2 className="text-2xl font-semibold text-primary-900">Why ELT?</h2>
            <p className="mt-3 text-primary-700/80">
              ELT was created to cut through the noise—the stress, friction, and
              complexity of clunky, half-finished software. We keep the stack
              modern (Next.js, React, Tailwind) and the outcomes grounded:
              faster pages, clearer messaging, and simpler maintenance.
            </p>
            <p className="mt-3 text-primary-700/80">
              You’ll always know what’s happening, what’s shipped, and what’s
              next. No black boxes. No surprise invoices.
            </p>
          </div>

          <aside className="rounded-2xl bg-primary-50 p-6">
            <h3 className="text-lg font-semibold text-primary-900">Built For</h3>
            <ul className="mt-3 space-y-2 text-primary-700/80">
              <li>• Local orgs and small companies that need a trustworthy site</li>
              <li>• Founders who value clarity</li>
              <li>• Teams who want continuous, low-risk improvements</li>
            </ul>

            <div className="mt-6">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-primary-800">
                Tech We Use
              </h4>
              <p className="mt-2 text-sm text-primary-700/80">
                Next.js (App Router), React, TailwindCSS, sensible SEO (Metadata
                API, sitemap, JSON-LD), and clean content structures.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-accent-200 to-accent-300 p-6">
          <div>
            <h2 className="text-xl font-semibold text-primary-900">
              Ready to get something online?
            </h2>
            <p className="text-primary-900/80">
              Let’s have some fun.
            </p>
          </div>
          <Link
            href="/book"
            className="inline-flex items-center justify-center rounded-xl bg-primary-700 px-5 py-3 text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary-300"
          >
            Start a Project
          </Link>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
    </main>
  );
}
