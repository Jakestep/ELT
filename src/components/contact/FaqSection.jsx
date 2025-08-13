const FaqSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Quick answers to common questions about our services and process.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="bg-background rounded-lg p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              How long does a typical project take?
            </h3>
            <p className="text-gray-600">
              Project timelines vary based on complexity and scope. Simple
              projects typically take 2-4 weeks, while complex applications can
              take 3-6 months or more.
            </p>
          </div>
          <div className="bg-background rounded-lg p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              What technologies do you specialize in?
            </h3>
            <p className="text-gray-600">
              We specialize in modern web technologies including React, Next.js,
              Node.js, tailwindcss, and cloud platforms like AWS and Azure. We
              choose the best tech stack for each project.
            </p>
          </div>
          <div className="bg-background rounded-lg p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              Do you provide ongoing support?
            </h3>
            <p className="text-gray-600">
              Yes, we offer comprehensive maintenance and support packages to
              ensure your software continues to perform optimally after launch.
            </p>
          </div>
          <div className="bg-background rounded-lg p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              What's your development process?
            </h3>
            <p className="text-gray-600">
              We follow an agile methodology with regular check-ins, continuous
              testing, and iterative development to ensure quality and
              transparency throughout the project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
