import Link from "next/link";

const CtaSection = ({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}) => {
  return (
    <section className="py-20 bg-accent-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {title}
        </h2>
        <p className="text-xl text-accent-100 mb-8 max-w-3xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryButtonLink}
            className="bg-background text-accent-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-accent-800 hover:text-white transition-colors duration-250 "
          >
            {primaryButtonText}
          </Link>
          <Link
            href={secondaryButtonLink}
            className="border border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-accent-700 transition-colors"
          >
            {secondaryButtonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
