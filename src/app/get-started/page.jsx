// app/page.jsx
export const metadata = {
  title: "EverLessTech — Custom websites & software that actually convert",
  description:
    "Free scorecard → $197 Game Plan → $8k+ custom builds. Less tech, more life.",
  openGraph: { images: ["/og/home.jpg"] },
};

export default function HomePage() {
  return (
    <main className="min-h-dvh bg-white text-gray-900">
      {/* 1) HERO */}
      <section className="relative isolate px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-4xl/tight font-semibold sm:text-5xl">
              Your tech should run your business — not the other way around.
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Get a free scorecard showing the 3 fastest fixes for your site or
              workflow — in plain English.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#scorecard"
                className="inline-flex items-center rounded-md bg-black px-5 py-3 text-base font-medium text-white hover:opacity-90"
              >
                Get My Free Scorecard
              </a>
              <a
                href="#case-studies"
                className="text-base font-medium underline"
              >
                See Real Before/After
              </a>
            </div>

            <div className="mt-6 text-sm text-gray-500">
              ★★★★★ “So much simpler. We finally know what to fix.” — Will,
              Contractor
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
            {/* Visual placeholder for scorecard mockup */}
            <div className="grid aspect-video w-full place-content-center rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 text-gray-500">
              Scorecard Preview
            </div>
          </div>
        </div>

        <div className="mt-10 text-sm text-gray-500">
          Trusted by local businesses in Las Cruces & beyond
        </div>
      </section>

      {/* 2) PERSONAS: Will & Alyss */}
      <section className="bg-gray-50 px-4 py-14 sm:px-6 lg:px-8" id="personas">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h2 className="text-xl font-semibold">For Will — Ops‑driven</h2>
            <p className="mt-2 text-gray-600">
              Confusing site, no data, constant back‑and‑forth.
            </p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>• Simple UX customers actually use</li>
              <li>• Easy updates (no tech headaches)</li>
              <li>• Plain‑English performance metrics</li>
              <li>• We lead, you approve</li>
            </ul>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h2 className="text-xl font-semibold">For Alyss — Creative</h2>
            <p className="mt-2 text-gray-600">
              Template vibe doesn’t match your brand.
            </p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>• Unique design that feels like you</li>
              <li>• Easy blog + auto email alerts</li>
              <li>• Human creativity {">"} cookie‑cutters</li>
              <li>• Your story, clearly told</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3) VALUE PROPS */}
      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold">What you’ll get</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Simple for customers", "Clean UX, fast load times."],
              ["Easy for you", "Update anything without help."],
              ["Clarity", "Metrics you’ll actually read."],
              ["We lead", "We drive, you approve — simple."],
            ].map(([title, body]) => (
              <div
                key={title}
                className="rounded-xl border border-gray-200 p-5"
              >
                <div className="text-lg font-medium">{title}</div>
                <p className="mt-2 text-gray-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4) SCORECARD (SQUEEZE) */}
      <section className="bg-gray-50 px-4 py-14 sm:px-6 lg:px-8" id="scorecard">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold">
            Free: Business Efficiency Scorecard
          </h2>
          <p className="mt-3 text-gray-600">
            In 3 minutes, see the 3 biggest fixes for your site or internal
            workflow.
          </p>

          {/* Replace `action` with your handler or ESP endpoint */}
          <form
            action="/api/scorecard"
            method="post"
            className="mt-8 grid gap-3 sm:grid-cols-[1fr,1fr,auto]"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="rounded-md border border-gray-300 px-4 py-3"
            />
            <input
              type="email"
              name="email"
              placeholder="you@business.com"
              required
              className="rounded-md border border-gray-300 px-4 py-3"
            />
            <button
              type="submit"
              className="rounded-md bg-black px-6 py-3 font-medium text-white hover:opacity-90"
            >
              Send My Scorecard
            </button>
          </form>

          <p className="mt-3 text-sm text-gray-500">
            No spam. One‑click unsubscribe.
          </p>
        </div>
      </section>

      {/* 5) CASE STUDY */}
      <section className="px-4 py-14 sm:px-6 lg:px-8" id="case-studies">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-semibold">
              Parts database management system
            </h2>
            <p className="mt-3 text-gray-600">
              We streamlined parts tracking and lookup with a lightweight
              internal tool, cutting search time and errors while making updates
              painless.
            </p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>• Faster lookups, fewer mistakes</li>
              <li>• Simple, searchable UI anyone can use</li>
              <li>• Data stays organized and exportable</li>
            </ul>

            <a
              href="#scorecard"
              className="mt-6 inline-flex items-center rounded-md bg-black px-5 py-3 font-medium text-white hover:opacity-90"
            >
              I want results like this
            </a>
          </div>

          <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
            <div className="grid aspect-video w-full place-content-center rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 text-gray-500">
              {/* Replace with your screenshot */}
              Placeholder: App Screenshot
            </div>
          </div>
        </div>
      </section>

      {/* 6) AUDIT TEASER ($197) */}
      <section className="bg-gray-50 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-[2fr,1fr]">
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h2 className="text-2xl font-semibold">
              Website/Software Game Plan — $197
            </h2>
            <p className="mt-3 text-gray-600">
              Before a big build, we map your fastest ROI. In ~60 minutes you’ll
              know what to fix, what to ignore, and what it should cost.
            </p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>• Deep dive into your systems and goals</li>
              <li>• 3–5 prioritized recommendations</li>
              <li>• Quick mockups or prototype concept</li>
              <li>• Plain‑English handoff you can act on</li>
            </ul>
            <p className="mt-4 text-sm text-gray-500">
              If we’re a fit and you hire us, your audit fee applies to the
              build.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="text-lg font-medium">Ready?</div>
            <p className="mt-2 text-gray-600">
              Lock your spot and choose a time.
            </p>
            <div className="mt-5 grid gap-3">
              <a
                href="/checkout/audit"
                className="rounded-md bg-black px-5 py-3 text-center font-medium text-white hover:opacity-90"
              >
                Book My $197 Audit
              </a>
              <a
                href="#apply"
                className="rounded-md border border-gray-300 px-5 py-3 text-center font-medium"
              >
                See If I Qualify
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7) PROCESS + PRICE ANCHOR */}
      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold">How it works</h2>
          <ol className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              ["Scorecard", "Quick wins in minutes."],
              ["Game Plan Audit", "Your prioritized roadmap."],
              ["Custom Build (from $8,000)", "We lead. You approve. Simple."],
            ].map(([title, body], i) => (
              <li key={title} className="rounded-xl border border-gray-200 p-5">
                <div className="text-sm text-gray-500">Step {i + 1}</div>
                <div className="text-lg font-medium">{title}</div>
                <p className="mt-2 text-gray-600">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 8) LIGHT APPLICATION */}
      <section className="bg-gray-50 px-4 py-14 sm:px-6 lg:px-8" id="apply">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold">See if you qualify</h2>
          <p className="mt-2 text-gray-600">
            Light filter — so we can prep something useful before the call.
          </p>

          {/* Replace `action` with your handler */}
          <form action="/api/apply" method="post" className="mt-6 grid gap-3">
            <input
              className="rounded-md border border-gray-300 px-4 py-3"
              name="name"
              placeholder="Your name"
              required
            />
            <input
              className="rounded-md border border-gray-300 px-4 py-3"
              name="business"
              placeholder="Business name"
            />
            <input
              className="rounded-md border border-gray-300 px-4 py-3"
              name="url"
              placeholder="Website URL (if any)"
            />
            <textarea
              className="rounded-md border border-gray-300 px-4 py-3"
              name="frustration"
              rows={4}
              placeholder="Biggest frustration with your current site or workflow"
            ></textarea>

            <div className="grid gap-3 sm:grid-cols-2">
              <select
                name="revenue"
                className="rounded-md border border-gray-300 px-4 py-3"
              >
                <option value="">Monthly revenue (approx)</option>
                <option>{"< $10k"}</option>
                <option>$10k–$50k</option>
                <option>$50k–$200k</option>
                <option>{">$200k"}</option>
              </select>
              <select
                name="timeline"
                className="rounded-md border border-gray-300 px-4 py-3"
              >
                <option value="">Rough timeline</option>
                <option>ASAP (0–4 weeks)</option>
                <option>1–3 months</option>
                <option>3–6 months</option>
                <option>Exploring</option>
              </select>
            </div>

            <button className="mt-2 rounded-md bg-black px-6 py-3 font-medium text-white hover:opacity-90">
              Submit & Book Call
            </button>
          </form>

          <p className="mt-4 text-sm text-gray-500">
            Guarantee: “If you're not happy, we don't deserve your money. Full
            money-back guarantee if you're still feeling lost after the audit.”
          </p>
        </div>
      </section>

      {/* 9) FOUNDER + FAQ */}
      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div className="rounded-xl border border-gray-200 p-6">
            <h3 className="text-xl font-semibold">
              Hi, I’m Jake — EverLessTech
            </h3>
            <p className="mt-2 text-gray-600">
              Less tech, more life. I build clean, fast websites and lightweight
              internal tools that help real businesses work better. I take the
              lead; you only jump in when it matters.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 p-6">
            <h3 className="text-xl font-semibold">FAQ</h3>
            <ul className="mt-3 space-y-3 text-gray-700">
              <li>
                <strong>How long does a build take?</strong>
                <br />
                Most projects launch in 3–6 weeks, depending on scope.
              </li>
              <li>
                <strong>Do I have to write copy?</strong>
                <br />
                We can draft and you approve, or collaborate — your choice.
              </li>
              <li>
                <strong>What about SEO & email?</strong>
                <br />
                We ship clean metadata, fast pages, and easy list capture + blog
                alerts.
              </li>
              <li>
                <strong>Revisions?</strong>
                <br />
                We handle reasonable tweaks without nickel‑and‑diming.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 10) FOOTER */}
      <footer className="border-t border-gray-200 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="text-sm text-gray-600">
            © {new Date().getFullYear()} EverLessTech
          </div>
          <nav className="flex gap-4 text-sm">
            <a href="#scorecard" className="underline">
              Scorecard
            </a>
            <a href="/checkout/audit" className="underline">
              Book Audit
            </a>
            <a href="#apply" className="underline">
              Apply
            </a>
            <a href="/contact" className="underline">
              Contact
            </a>
            <a href="/privacy" className="underline">
              Privacy
            </a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
