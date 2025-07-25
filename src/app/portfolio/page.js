import PortfolioHero from "../../components/portfolio/PortfolioHero";
import FeaturedProjects from "../../components/portfolio/FeaturedProjects";
import AllProjects from "../../components/portfolio/AllProjects";
import ResultsSection from "../../components/portfolio/ResultsSection";
import CtaSection from "../../common/CtaSection";

// app/portfolio/page.js

export const metadata = {
  title: "Portfolio | EverLessTech",
  description: "See real projects we've built and read what our clients say. Custom websites, apps, and branding for people who hate tech headaches.",
  keywords: ["Web dev portfolio", "Las Cruces websites", "Client reviews EverLessTech", "Modern web design"],
  openGraph: {
    title: "Portfolio | EverLessTech",
    description: "Explore our work — fast, human, and built to last.",
    images: ["/og/portfolio.jpg"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | EverLessTech",
    description: "Smart, beautiful websites made for real people.",
    images: ["/og/portfolio.jpg"]
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
      "@type": "CollectionPage",
      "name": "EverLessTech Portfolio",
      "description": "Showcasing past projects in web design, branding, and software."
    })
  }
};

export default function Portfolio() {
  return (
    <>
      <PortfolioHero />
      <FeaturedProjects />
      <AllProjects />
      <ResultsSection />
      <CtaSection
        title="Ready to Create Your Success Story?"
        description="Let's discuss how we can help you achieve similar results with a custom software solution."
        primaryButtonText="Start Your Project"
        primaryButtonLink="/contact"
        secondaryButtonText="View Services"
        secondaryButtonLink="/services"
      />
    </>
  );
}
