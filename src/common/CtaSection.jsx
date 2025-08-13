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
    <section className="bg-accent-600 py-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
          {title}
        </h2>
        <p className="text-accent-100 mx-auto mb-8 max-w-3xl text-xl">
          {description}
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href={primaryButtonLink}
            className="bg-background text-accent-600 rounded-lg px-8 py-4 text-lg font-medium transition-colors hover:bg-gray-100"
          >
            {primaryButtonText}
          </Link>
          <Link
            href={secondaryButtonLink}
            className="hover:bg-accent-700 rounded-lg border border-white px-8 py-4 text-lg font-medium text-white transition-colors"
          >
            {secondaryButtonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
