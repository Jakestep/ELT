"use client";
import { motion } from "motion/react";

const PortfolioHero = () => {
  return (
    <section className="from-accent-50 bg-gradient-to-br to-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl"
          >
            Our <span className="text-accent-600">Portfolio</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-3xl text-xl text-gray-600"
          >
            Explore our successful projects and the measurable impact we've
            created for our clients.
            <br />
            <span className="italic">Less tech, more life.</span>
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;
