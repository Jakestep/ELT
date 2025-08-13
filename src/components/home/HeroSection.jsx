// components/home/HeroSection.jsx
"use client";
import { motion } from "motion/react";
import RippleBackground from "@/common/PondRipple";
import Flip3DButton from "./general/Flip3DButton";

const HeroSection = () => {
  return (
    <RippleBackground>
      <section className="relative h-screen w-full">
        {/* soft overlay for contrast */}
        <div className="pointer-events-none absolute inset-0 bg-black/10 md:bg-black/5" />
        <div className="absolute inset-0 flex">
          <div className="absolute top-[30%] left-[50%] mx-auto w-full max-w-7xl -translate-x-[50%] px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-gray-900 drop-shadow-sm md:text-6xl"
              >
                Tech terrors giving you the cold sweats?
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 }}
                className="mx-auto mt-4 max-w-3xl text-xl text-gray-800 md:text-gray-700"
              >
                It doesn't have to be this way.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16 }}
                className="mt-8 flex h-fit"
              >
                <Flip3DButton
                  href="/scorecard"
                  frontLabel={"What can be done?"}
                  hoverLabel={"Grab my free scorecard"}
                  frontClasses="bg-accent-600 text-white"
                  hoverClasses="bg-accent-400 text-white"
                />
                {/* <a
                  href="/scorecard"
                  className="inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium bg-black text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-black/30"
                >
                  How can I fix it?
                </a> */}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </RippleBackground>
  );
};

export default HeroSection;
