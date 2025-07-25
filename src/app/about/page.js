import AboutHero from "../../components/about/AboutHero";
import StorySection from "../../components/about/StorySection";
import ValuesSection from "../../components/about/ValuesSection";
import ExpertiseSection from "../../components/about/ExpertiseSection";
import CtaSection from "../../common/CtaSection";

// app/about/page.js
export const metadata = {
  title: "About | EverLessTech",
  description: "Meet EverLessTech — a small, smart web agency focused on simplicity, speed, and human-centered software. Get to know our philosophy and who we work with.",
  keywords: ["About EverLessTech", "Web agency mission", "Simple fast websites", "Las Cruces web dev"],
  openGraph: {
    title: "About | EverLessTech",
    description: "Meet EverLessTech — a smart, simple web agency based in Las Cruces. Learn who we are and how we help.",
    images: ["/og/about.jpg"]
  },
  twitter: {
    card: "summary_large_image",
    title: "About | EverLessTech",
    description: "Get to know the people and principles behind EverLessTech.",
    images: ["/og/about.jpg"]
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
      "@type": "AboutPage",
      "name": "About EverLessTech",
      "description": "Smart, fast websites for people who hate dealing with tech.",
      "publisher": {
        "@type": "Organization",
        "name": "EverLessTech",
        "url": "https://everlesstech.com"
      }
    })
  }
};

export default function About() {
  return (
    <>
      <AboutHero />
      <StorySection />
      <ValuesSection />
      <ExpertiseSection />
      <CtaSection
        title="Ready to Work Together?"
        description="Let's discuss how our expertise can help bring your software vision to life."
        primaryButtonText="Start a Conversation"
        primaryButtonLink="/contact"
        secondaryButtonText="View Our Work"
        secondaryButtonLink="/portfolio"
      />
    </>
  );
}
