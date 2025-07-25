"use client";
import { motion } from "motion/react";
import RippleBackground from "@/common/PondRipple";
import CTAButtons from "./general/CTA/CTAButtons";

const HeroSection = () => {
  return (
    <RippleBackground>
      <section className="flex items-center justify-center h-[calc(100vh-var(--header-height))] w-full relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} // easeOutCubic
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Professional Software Development &
              <span className="text-accent-600"> SEO Services</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-text mb-8 max-w-3xl mx-auto text-shadow-thistle"
            >
              Quality-focused development with long-term client value.
              Specializing in web applications, SEO, and custom software
              solutions that drive business growth.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <CTAButtons />
            </motion.div>
          </div>
        </div>
      </section>
    </RippleBackground>
  );
};

export default HeroSection;
