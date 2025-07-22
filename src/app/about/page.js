import AboutHero from "../../components/about/AboutHero";
import StorySection from "../../components/about/StorySection";
import ValuesSection from "../../components/about/ValuesSection";
import ExpertiseSection from "../../components/about/ExpertiseSection";
import CtaSection from "../../components/common/CtaSection";

export const metadata = {
  title: "About | EverLessTech",
  description:
    'Learn about EverLessTech - dedicated to delivering exceptional software solutions with our "Less tech, more life" philosophy.',
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
