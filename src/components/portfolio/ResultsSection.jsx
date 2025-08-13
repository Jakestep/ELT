"use client";
import SafeIcon from "../../common/SafeIcon";

const ResultsSection = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Project Results
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Measurable outcomes that demonstrate the value of our software
            development services.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="bg-accent-100 mb-4 inline-flex h-16 w-16 items-center justify-center rounded-lg">
              <SafeIcon name="TrendingUp" className="text-accent-600 h-8 w-8" />
            </div>
            <div className="mb-2 text-3xl font-bold text-gray-900">250%</div>
            <p className="text-gray-600">Average ROI Increase</p>
          </div>
          <div className="text-center">
            <div className="bg-accent-100 mb-4 inline-flex h-16 w-16 items-center justify-center rounded-lg">
              <SafeIcon name="Users" className="text-accent-600 h-8 w-8" />
            </div>
            <div className="mb-2 text-3xl font-bold text-gray-900">100+</div>
            <p className="text-gray-600">Satisfied Clients</p>
          </div>
          <div className="text-center">
            <div className="bg-accent-100 mb-4 inline-flex h-16 w-16 items-center justify-center rounded-lg">
              <SafeIcon name="Zap" className="text-accent-600 h-8 w-8" />
            </div>
            <div className="mb-2 text-3xl font-bold text-gray-900">99.9%</div>
            <p className="text-gray-600">Project Success Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
