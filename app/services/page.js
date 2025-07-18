import ServicesHero from '@/components/services/ServicesHero';
import ServicesGrid from '@/components/services/ServicesGrid';
import ProcessSection from '@/components/services/ProcessSection';
import AdditionalServices from '@/components/services/AdditionalServices';
import CtaSection from '@/components/common/CtaSection';

export const metadata = {
  title: 'Services | EverLessTech',
  description: 'Our services include software development, SEO, API development, and custom solutions. Less tech, more life.',
}

export default function Services() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ProcessSection />
      <AdditionalServices />
      <CtaSection 
        title="Ready to Get Started?"
        description="Let's discuss your project requirements and create a custom solution that fits your needs and budget."
        primaryButtonText="Request a Quote"
        primaryButtonLink="/contact"
        secondaryButtonText="View Our Work"
        secondaryButtonLink="/portfolio"
      />
    </>
  )
}