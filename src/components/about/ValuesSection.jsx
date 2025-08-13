"use client";
import { motion } from "motion/react";
import SafeIcon from "../../common/SafeIcon";

const ValuesSection = () => {
  const values = [
    {
      icon: "Target",
      title: "Quality First",
      description:
        "Every line of code is written with precision, tested thoroughly, and optimized for performance.",
    },
    {
      icon: "Heart",
      title: "Client Success",
      description:
        "Your success is our success. We're committed to delivering solutions that drive real business value.",
    },
    {
      icon: "Users",
      title: "Long-term Partnership",
      description:
        "We build lasting relationships, providing ongoing support and evolution of your software solutions.",
    },
    {
      icon: "Award",
      title: "Excellence",
      description:
        "We strive for excellence in every project, from initial concept to final deployment and beyond.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Our Mission & Values
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            We're driven by core values that guide every project and client
            relationship.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-background rounded-lg p-8 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="bg-accent-100 mb-4 inline-flex h-16 w-16 items-center justify-center rounded-lg">
                <SafeIcon
                  name={value.icon}
                  className="text-accent-600 h-8 w-8"
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
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
