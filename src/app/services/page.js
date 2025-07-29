import ServicesHero from "../../components/services/ServicesHero";
import ServicesGrid from "../../components/services/ServicesGrid";
import ProcessSection from "../../components/services/ProcessSection";
import CtaSection from "../../common/CtaSection";

// app/services/page.js

export const metadata = {
  title: "Services | EverLessTech",
  description: "Explore powerful services designed to grow your business — from SEO and web design to custom apps and consulting. Get a free consultation.",
  keywords: ["Web development services", "Custom software", "Las Cruces web design", "SEO Las Cruces"],
  openGraph: {
    title: "Services | EverLessTech",
    description: "Web design, custom apps, SEO, and more. Start with a free consultation.",
    images: ["/og/services.jpg"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | EverLessTech",
    description: "Free consultations for fast, quality-first software services.",
    images: ["/og/services.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      maxImagePreview: "large",
      maxSnippet: -1,
      maxVideoPreview: -1,
    }
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Web Development and SEO",
      "provider": {
        "@type": "Organization",
        "name": "EverLessTech",
        "url": "https://everlesstech.com"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Las Cruces, NM"
      }
    })
  }
};

export default function Services() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ProcessSection />
      {/* <AdditionalServices /> */}
      <CtaSection
        title="Ready to Get Started?"
        description="Let's discuss your project requirements and create a custom solution that fits your needs and budget."
        primaryButtonText="Request a Quote"
        primaryButtonLink="/contact"
        secondaryButtonText="Who Are We"
        secondaryButtonLink="/about"
      />
    </>
  );
}
