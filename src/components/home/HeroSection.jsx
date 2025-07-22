"use client";
import Link from "next/link";
import { motion } from "motion/react";
import SafeIcon from "../common/SafeIcon";
import RippleBackground from "./PondRipple";
import CTAButtons from "./CTAButtons";

const HeroSection = () => {
  return (
    <RippleBackground>
      <section className="flex items-center justify-center h-full w-full relative">
        <p className={`absolute right-1 bottom-1 invert text-sm md:text-base`}>
          Photo by{" "}
          <a target='_blank' className={`italic`}  href="https://unsplash.com/@jasonpofahlphotography?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Jason Pofahl
          </a>{" "}
          on{" "}
          <a target='_blank' className={`italic`}  href="https://unsplash.com/photos/brown-rocky-mountain-under-white-cloudy-sky-during-daytime-YU82HZASi6E?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
          </a>
        </p>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Professional Software Development &
              <span className="text-accent-600"> SEO Services</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-text mb-8 max-w-3xl mx-auto text-shadow-[0_0_3px_var(--thistle)]"
            >
              Quality-focused development with long-term client value.
              Specializing in web applications, APIs, SEO, and custom software
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
