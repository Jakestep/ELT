"use client";
import { motion } from "motion/react";
import * as FiIcons from "react-icons/fi";
import SafeIcon from "../../common/SafeIcon";

const FeaturesSection = () => {
  const features = [
    {
      icon: "Code",
      title: "Custom Development",
      description:
        "Tailored software solutions built to your exact specifications and business needs.",
    },
    {
      icon: "Zap",
      title: "Performance Focused",
      description:
        "Optimized applications and websites that deliver exceptional speed and user experience.",
    },
    {
      icon: "Shield",
      title: "Security First",
      description:
        "Enterprise-grade security practices built into every line of code.",
    },
    {
      icon: "TrendingUp",
      title: "Scalable Solutions",
      description:
        "Architecture designed to grow with your business and adapt to changing needs.",
    },
  ];

  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Why Choose EverLessTech
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            We deliver exceptional software solutions and SEO services with a
            focus on quality, performance, and long-term value.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-lg p-6 text-center transition-shadow hover:shadow-lg"
            >
              <div className="bg-accent-100 mb-4 inline-flex h-16 w-16 items-center justify-center rounded-lg">
                <SafeIcon
                  name={feature.icon}
                  className="text-accent-600 h-8 w-8"
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
