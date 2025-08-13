"use client";
import Link from "next/link";
import * as FiIcons from "react-icons/fi";
import SafeIcon from "../../common/SafeIcon";

const ServicesPreview = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Our Services
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Comprehensive software development and SEO solutions tailored to
            your business needs.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="bg-background rounded-lg p-8 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="mb-4 text-xl font-semibold text-gray-900">
              Web Applications
            </h3>
            <p className="mb-4 text-gray-600">
              Modern, responsive web applications built with the latest
              technologies and best practices.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <SafeIcon
                  name="CheckCircle"
                  className="mr-2 h-4 w-4 text-green-500"
                />
                React & Next.js
              </li>
              <li className="flex items-center">
                <SafeIcon
                  name="CheckCircle"
                  className="mr-2 h-4 w-4 text-green-500"
                />
                Node.js & Express
              </li>
              <li className="flex items-center">
                <SafeIcon
                  name="CheckCircle"
                  className="mr-2 h-4 w-4 text-green-500"
                />
                Database Integration
              </li>
            </ul>
          </div>
          <div className="bg-background rounded-lg p-8 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="mb-4 text-xl font-semibold text-gray-900">
              SEO Services
            </h3>
            <p className="mb-4 text-gray-600">
              Comprehensive search engine optimization to improve visibility and
              drive organic traffic.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <SafeIcon
                  name="CheckCircle"
                  className="mr-2 h-4 w-4 text-green-500"
                />
                Technical SEO Audits
              </li>
              <li className="flex items-center">
                <SafeIcon
                  name="CheckCircle"
                  className="mr-2 h-4 w-4 text-green-500"
                />
                Keyword Research
              </li>
              <li className="flex items-center">
                <SafeIcon
                  name="CheckCircle"
                  className="mr-2 h-4 w-4 text-green-500"
                />
                Content Optimization
              </li>
            </ul>
          </div>
          <div className="bg-background rounded-lg p-8 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="mb-4 text-xl font-semibold text-gray-900">
              Custom Solutions
            </h3>
            <p className="mb-4 text-gray-600">
              Tailored software solutions designed to solve your unique business
              challenges.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <SafeIcon
                  name="CheckCircle"
                  className="mr-2 h-4 w-4 text-green-500"
                />
                Business Analysis
              </li>
              <li className="flex items-center">
                <SafeIcon
                  name="CheckCircle"
                  className="mr-2 h-4 w-4 text-green-500"
                />
                System Architecture
              </li>
              <li className="flex items-center">
                <SafeIcon
                  name="CheckCircle"
                  className="mr-2 h-4 w-4 text-green-500"
                />
                Ongoing Support
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="bg-accent-600 hover:bg-accent-700 inline-flex items-center rounded-lg px-8 py-4 text-lg font-medium text-white transition-colors"
          >
            View All Services
            <SafeIcon name="ArrowRight" className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
