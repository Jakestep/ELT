"use client";
import { motion } from "motion/react";
import * as FiIcons from "react-icons/fi";
import SafeIcon from "../common/SafeIcon";

const { FiTarget, FiHeart, FiUsers, FiAward } = FiIcons;

const ValuesSection = () => {
  const values = [
    {
      icon: FiTarget,
      title: "Quality First",
      description:
        "Every line of code is written with precision, tested thoroughly, and optimized for performance.",
    },
    {
      icon: FiHeart,
      title: "Client Success",
      description:
        "Your success is our success. We're committed to delivering solutions that drive real business value.",
    },
    {
      icon: FiUsers,
      title: "Long-term Partnership",
      description:
        "We build lasting relationships, providing ongoing support and evolution of your software solutions.",
    },
    {
      icon: FiAward,
      title: "Excellence",
      description:
        "We strive for excellence in every project, from initial concept to final deployment and beyond.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Mission & Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're driven by core values that guide every project and client
            relationship.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 rounded-lg mb-4">
                <SafeIcon
                  name={
                    value.icon.name.substring(
                      2,
                    ) /* TODO: check me, might not work, check what value.icon.name is */
                  }
                  className="h-8 w-8 text-accent-600"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
