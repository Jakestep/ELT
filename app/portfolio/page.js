import PortfolioHero from '@/components/portfolio/PortfolioHero';
import FeaturedProjects from '@/components/portfolio/FeaturedProjects';
import AllProjects from '@/components/portfolio/AllProjects';
import ResultsSection from '@/components/portfolio/ResultsSection';
import CtaSection from '@/components/common/CtaSection';

export const metadata = {
  title: 'Portfolio | EverLessTech',
  description: 'Explore our successful projects and the measurable impact we have created for our clients. Less tech, more life.',
}

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
  )
}