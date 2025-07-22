"use client";
import Link from "next/link";
import * as FiIcons from "react-icons/fi";
import SafeIcon from "../common/SafeIcon";

const { FiCheckCircle, FiArrowRight } = FiIcons;

const ServicesPreview = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive software development and SEO solutions tailored to
            your business needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Web Applications
            </h3>
            <p className="text-gray-600 mb-4">
              Modern, responsive web applications built with the latest
              technologies and best practices.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <SafeIcon
                  name="CheckCircle"
                  className="h-4 w-4 text-green-500 mr-2"
                />
                React & Next.js
              </li>
              <li className="flex items-center">
                <SafeIcon
                  name="CheckCircle"
                  className="h-4 w-4 text-green-500 mr-2"
                />
                Node.js & Express
              </li>
              <li className="flex items-center">
                <SafeIcon
                  name="CheckCircle"
                  className="h-4 w-4 text-green-500 mr-2"
                />
                Database Integration
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              SEO Services
            </h3>
            <p className="text-gray-600 mb-4">
              Comprehensive search engine optimization to improve visibility and
              drive organic traffic.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <SafeIcon
                  name="CheckCircle"
                  className="h-4 w-4 text-green-500 mr-2"
                />
                Technical SEO Audits
              </li>
              <li className="flex items-center">
                <SafeIcon
                  name="CheckCircle"
                  className="h-4 w-4 text-green-500 mr-2"
                />
                Keyword Research
              </li>
              <li className="flex items-center">
                <SafeIcon
                  name="CheckCircle"
                  className="h-4 w-4 text-green-500 mr-2"
                />
                Content Optimization
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Custom Solutions
            </h3>
            <p className="text-gray-600 mb-4">
              Tailored software solutions designed to solve your unique business
              challenges.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <SafeIcon
                  name="CheckCircle"
                  className="h-4 w-4 text-green-500 mr-2"
                />
                Business Analysis
              </li>
              <li className="flex items-center">
                <SafeIcon
                  name="CheckCircle"
                  className="h-4 w-4 text-green-500 mr-2"
                />
                System Architecture
              </li>
              <li className="flex items-center">
                <SafeIcon
                  name="CheckCircle"
                  className="h-4 w-4 text-green-500 mr-2"
                />
                Ongoing Support
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="bg-accent-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-accent-700 transition-colors inline-flex items-center"
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
