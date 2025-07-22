"use client";
import { motion } from "motion/react";
import * as FiIcons from "react-icons/fi";
import SafeIcon from "../common/SafeIcon";

const { FiCode, FiZap, FiShield, FiTrendingUp } = FiIcons;

const FeaturesSection = () => {
  const features = [
    {
      icon: FiCode,
      title: "Custom Development",
      description:
        "Tailored software solutions built to your exact specifications and business needs.",
    },
    {
      icon: FiZap,
      title: "Performance Focused",
      description:
        "Optimized applications and websites that deliver exceptional speed and user experience.",
    },
    {
      icon: FiShield,
      title: "Security First",
      description:
        "Enterprise-grade security practices built into every line of code.",
    },
    {
      icon: FiTrendingUp,
      title: "Scalable Solutions",
      description:
        "Architecture designed to grow with your business and adapt to changing needs.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose EverLessTech
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver exceptional software solutions and SEO services with a
            focus on quality, performance, and long-term value.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 rounded-lg mb-4">
                <SafeIcon
                  name={feature.icon.name.substring(2) /**TODO: check me too */}
                  className="h-8 w-8 text-accent-600"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
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
