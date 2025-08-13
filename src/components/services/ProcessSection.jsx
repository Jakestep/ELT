"use client";
import { motion } from "motion/react";

const ProcessSection = () => {
  const process = [
    {
      step: "1",
      title: "Discovery & Planning",
      description:
        "We start by understanding your business goals, requirements, and constraints to create a comprehensive project plan.",
    },
    {
      step: "2",
      title: "Design & Architecture",
      description:
        "Our team designs the system architecture and user experience, ensuring scalability and maintainability.",
    },
    {
      step: "3",
      title: "Development & Testing",
      description:
        "We build your solution using agile methodologies, with continuous testing and regular progress updates.",
    },
    {
      step: "4",
      title: "Deployment & Support",
      description:
        "We handle deployment and provide ongoing support to ensure your solution continues to perform optimally.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Our Development Process
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            A proven methodology that ensures quality delivery and client
            satisfaction.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {process.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-accent-600 mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold text-white">
                {step.step}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
