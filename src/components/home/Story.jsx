// app/components/Story.jsx
export default function Story({
  eyebrow = "Our story",
  title = "Less tech, more life.",
  intro = "EverLessTech exists to remove digital friction for real businesses. We ship fast, simple sites that are easy to own and easier to love.",
  items = [
    {
      icon: "spark",
      heading: "It started local",
      text:
        "We saw founders and nonprofits stuck with clunky sites and no support. So we built a studio that speaks human first, tech second.",
    },
    {
      icon: "leaf",
      heading: "Simplicity over noise",
      text:
        "Every decision favors clarity, speed, and maintainability. No vendor lock‑in, no mystery meat navigation, no bloat.",
    },
    {
      icon: "bolt",
      heading: "Results you can feel",
      text:
        "Cleaner UX, faster pages, and clearer messaging—from first click to contact. Launch quickly, iterate responsibly.",
    },
  ],
  cta = { label: "See how we work", href: "/services" },
}) {
  return (
    <section
      aria-labelledby="story-heading"
      className="relative"
    >
      {/* Background flair (optional, lightweight) */}
      <div
        className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(50%_40%_at_50%_20%,#000_20%,transparent_70%)]"
        aria-hidden="true"
      >
        <div className="absolute inset-x-0 top-0 h-48 bg-accent-50/60" />
      </div>

      <div className="container mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-2 text-sm font-semibold tracking-wide text-accent-700">
            {eyebrow}
          </p>
          <h2
            id="story-heading"
            className="text-balance text-3xl font-semibold text-primary-800 sm:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-4 text-pretty text-primary-600">
            {intro}
          </p>
        </div>

        {/* Timeline grid */}
        <div className="mt-12 grid grid-cols-1 gap-y-10 sm:mt-16 sm:grid-cols-[1fr]">
          <ol className="relative mx-auto grid w-full max-w-4xl grid-cols-1 gap-8 sm:gap-10">
            {/* vertical line */}
            <div
              className="pointer-events-none absolute left-[1.125rem] top-4 h-[calc(100%-1rem)] w-px bg-primary-200 sm:left-6"
              aria-hidden="true"
            />

            {items.map((item, i) => (
              <li
                key={i}
                className="grid grid-cols-[2.25rem_1fr] items-start gap-x-4 sm:grid-cols-[2.5rem_1fr]"
              >
                {/* Icon + index */}
                <div className="relative">
                  <span className="absolute -left-[0.35rem] top-3 hidden h-2 w-2 rounded-full bg-primary-200 sm:block" />
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent-100 ring-1 ring-inset ring-accent-200 sm:h-10 sm:w-10">
                    <SVG icon={item.icon} className="h-5 w-5 text-accent-700" />
                  </span>
                </div>

                {/* Content (subgrid for tight vertical rhythm) */}
                <div className="grid grid-cols-1 content-start subgrid">
                  <h3 className="text-base font-semibold text-primary-800">
                    {item.heading}
                  </h3>
                  <p className="mt-2 text-primary-600">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>

          {cta?.href && (
            <div className="mx-auto mt-2 flex w-full max-w-4xl justify-end">
              <a
                href={cta.href}
                className="inline-flex items-center gap-2 rounded-xl bg-primary-700 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-primary-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
              >
                {cta.label}
                <SVG icon="arrow" className="h-4 w-4 opacity-90" />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function SVG({ icon, className = "" }) {
  // Minimal inline icons to avoid extra deps
  if (icon === "spark") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
        <path d="M12 2l1.7 5.2L19 9l-5.3 1.8L12 16l-1.7-5.2L5 9l5.3-1.8L12 2z" />
      </svg>
    );
  }
  if (icon === "leaf") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
        <path d="M20 4c-7 0-12 5-12 12 0 2.2 1.8 4 4 4 7 0 12-5 12-12 0-2.2-1.8-4-4-4zm-6.5 9.5C12 16 10 17 8 17c0-2 1-4 3.5-5.5C13 10 15 9 17 9c0 2-1 4-3.5 4.5z" />
      </svg>
    );
  }
  if (icon === "bolt") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
        <path d="M11 21l1-7H8l6-11-1 7h4l-6 11z" />
      </svg>
    );
  }
  if (icon === "arrow") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
        <path d="M13 5l7 7-7 7v-4H4v-6h9V5z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <circle cx="12" cy="12" r="8" />
    </svg>
  );
}
