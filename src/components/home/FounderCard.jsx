// components/about/FounderCard.jsx
import Image from "next/image";
import Link from "next/link";

export default function FounderCard() {
  const founder = {
    name: "Jake Estep",
    role: "Founder and nature enthusiast",
    photo: "/jake.webp",
    photoAlt: "Photo of Jake Estep",
    oneLiner: "Building simple, dependable websites that respect your time.",
    bio: `The web moves fast—but too often, people get left behind. I started ELT to build sites that work for real people, with clarity, care, and craft. I'm Jake, a Christian, husband, and builder from Las Cruces, NM.`,
    highlights: [
      "2+ years building real-world tools for lab and field use",
      "People first, nobody left behind",
      "Romans 12:18",
    ],
    location: "Las Cruces, NM",
    personal:
      "Faith, marriage, and time outside keep me grounded, and shape how I work",
    cta: { label: "Email Jake", href: "mailto:jake@everlesstech.com" },
  };

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: founder.name,
    jobTitle: founder.role,
    worksFor: { "@type": "Organization", name: "EverLessTech" },
    url: "https://www.everlesstech.com/about",
    email: founder.cta.href,
    sameAs: [],
  };

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="grid gap-12 md:grid-cols-[1fr,1.4fr]">
        {/* Left column */}
        <div className="rounded-2xl border border-primary-100 bg-white p-10 shadow-sm">
          {/* Header */}
          <div className="flex items-center gap-6">
            <div className="relative min-h-28 min-w-28 overflow-hidden rounded-2xl ring-2 ring-primary-100">
              <Image
                src={founder.photo}
                alt={founder.photoAlt}
                fill
                sizes="112px"
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary-900">
                {founder.name}
              </h2>
              <p className="mt-1 text-lg text-primary-700/80">
                {founder.role}
              </p>
            </div>
          </div>

          {/* Bio */}
          <p className="mt-8 text-lg leading-relaxed text-primary-900">
            {founder.oneLiner}
          </p>
          <p className="mt-6 text-primary-700/80 whitespace-pre-line leading-relaxed">
            {founder.bio}
          </p>

          {/* Highlights */}
          <ul className="mt-8 space-y-3 text-primary-700/90">
            {founder.highlights.map((h) => (
              <li
                key={h}
                className="rounded-lg bg-primary-50 px-4 py-3 text-base ring-1 ring-primary-100"
              >
                • {h}
              </li>
            ))}
          </ul>

          {/* Details */}
          <div className="mt-8 space-y-3 text-base">
            <p className="text-primary-700/80">
              <span className="font-medium text-primary-900">Location:</span>{" "}
              {founder.location}
            </p>
            {founder.personal && (
              <p className="text-primary-700/80">
                <span className="font-medium text-primary-900">About me:</span>{" "}
                {founder.personal}
              </p>
            )}
          </div>

          {/* CTA */}
          <div className="mt-10">
            <Link
              href={founder.cta.href}
              className="inline-flex items-center justify-center rounded-xl bg-primary-700 px-6 py-3 text-lg font-medium text-white shadow-sm transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary-300"
            >
              {founder.cta.label}
            </Link>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
    </section>
  );
}
