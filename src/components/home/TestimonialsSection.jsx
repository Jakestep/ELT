// components/home/TestimonialsSection.jsx
"use client";
import { testimonials } from "@/data/testimonials";
import { motion } from "motion/react";

export default function TestimonialsSection() {
  return (
    <section
      aria-labelledby="testimonials-title"
      className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8"
    >
      {/* JSON-LD for reviews/aggregate rating */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "EverLessTech Website/Software Game Plan",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              reviewCount: testimonials.length.toString(),
            },
            review: testimonials.map((t) => ({
              "@type": "Review",
              reviewBody: t.quote,
              reviewRating: { "@type": "Rating", ratingValue: "5" },
              author: { "@type": "Person", name: t.name },
            })),
          }),
        }}
      />
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 id="testimonials-title" className="text-2xl font-semibold">
            What clients say
          </h2>
          <p className="mt-2 text-gray-600">
            Real businesses. Real results. Less tech. <i>More life</i>.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl border border-gray-200 bg-white p-6"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-content-center rounded-full bg-gray-100 text-sm font-medium text-gray-700">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <figcaption>
                  <div className="font-medium">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.role}</div>
                </figcaption>
              </div>

              <blockquote className="mt-4 text-gray-800">
                “{t.quote}”
              </blockquote>

              {/* simple ★★★★★ visual without extra options */}
              <div className="mt-4 flex" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <svg
                    key={idx}
                    viewBox="0 0 20 20"
                    className="h-5 w-5 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M10 15.27l-5.18 3.04 1.58-5.81-4.4-3.73 5.87-.5L10 2l2.13 6.27 5.87.5-4.4 3.73 1.58 5.81z" />
                  </svg>
                ))}
              </div>
            </motion.figure>
          ))}
        </div>

        {/* Single, consistent CTA */}
        <div className="mt-10 text-center">
          <a
            href="/scorecard"
            className="inline-flex items-center justify-center rounded-md bg-[linear-gradient(to_right,var(--color-accent-800)_0,_var(--color-accent-400)_8.5ch,_var(--color-accent-400)_11ch,_var(--color-accent-800))] px-6 py-3 text-base font-medium text-white hover:scale-105 relative bottom-0 scale-100 hover:bottom-1 hover:shadow-xl transition-all focus:ring-2 focus:ring-black/30 focus:outline-none"
          >
            Get My Free Scorecard
          </a>
          <p className="mt-2 text-sm text-gray-500">
            No spam. One‑click unsubscribe.
          </p>
        </div>
      </div>
    </section>
  );
}
