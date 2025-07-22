const FaqSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quick answers to common questions about our services and process.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              How long does a typical project take?
            </h3>
            <p className="text-gray-600">
              Project timelines vary based on complexity and scope. Simple
              projects typically take 2-4 weeks, while complex applications can
              take 3-6 months or more.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              What technologies do you specialize in?
            </h3>
            <p className="text-gray-600">
              We specialize in modern web technologies including React, Next.js,
              Node.js, Python, and cloud platforms like AWS and Azure. We choose
              the best tech stack for each project.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Do you provide ongoing support?
            </h3>
            <p className="text-gray-600">
              Yes, we offer comprehensive maintenance and support packages to
              ensure your software continues to perform optimally after launch.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
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
