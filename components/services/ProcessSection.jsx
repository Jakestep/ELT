"use client";
import { motion } from 'framer-motion';

const ProcessSection = () => {
  const process = [
    {
      step: "1",
      title: "Discovery & Planning",
      description: "We start by understanding your business goals, requirements, and constraints to create a comprehensive project plan."
    },
    {
      step: "2",
      title: "Design & Architecture",
      description: "Our team designs the system architecture and user experience, ensuring scalability and maintainability."
    },
    {
      step: "3",
      title: "Development & Testing",
      description: "We build your solution using agile methodologies, with continuous testing and regular progress updates."
    },
    {
      step: "4",
      title: "Deployment & Support",
      description: "We handle deployment and provide ongoing support to ensure your solution continues to perform optimally."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Development Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven methodology that ensures quality delivery and client satisfaction.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full text-2xl font-bold mb-4">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;