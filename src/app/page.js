import HeroSection from "../components/home/HeroSection";
import FeaturesSection from "../components/home/FeaturesSection";
import ServicesPreview from "../components/home/ServicesPreview";
import CtaSection from "../common/CtaSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ServicesPreview />
      <CtaSection
        title="Ready to Start Your Project?"
        description="Let's discuss how we can help you build exceptional software solutions that drive your business forward."
        primaryButtonText="Get Started Today"
        primaryButtonLink="/contact"
        secondaryButtonText="View Our Work"
        secondaryButtonLink="/portfolio"
      />
    </>
  );
}
