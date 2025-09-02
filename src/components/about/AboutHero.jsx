"use client";
import RippleBackground from "@/common/PondRipple";
import { motion } from "motion/react";
const AboutHero = () => {
  return (
    <section className="from-accent-50 bg-gradient-to-br to-white">
      <RippleBackground
        className={`h-full w-full bg-cover bg-top bg-no-repeat py-20`}
        background={{
          backgroundImage:
            'url("/organs-0.5x.webp")',
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl"
            >
              About <span className="text-accent-600">EverLessTech</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mx-auto max-w-3xl text-xl text-gray-600"
            >
              Dedicated to you. More leads, with less stress, in less time.
              <br />
              <span className="text-accent-600 italic">
                Less tech, more life.
              </span>
            </motion.p>
          </div>
        </div>
      </RippleBackground>
    </section>
  );
};

export default AboutHero;
