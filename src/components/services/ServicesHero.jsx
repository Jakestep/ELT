"use client";
import RippleBackground from "@/common/PondRipple";
import { motion } from "motion/react";

const ServicesHero = () => {
  return (
    <section className="bg-gradient-to-br from-accent-50 to-white">
      <RippleBackground
        className={`py-20 bg-top bg-no-repeat bg-cover w-full h-full`}
        background={{backgroundImage: 'url("/blur-jason-pofahl-YU82HZASi6E-unsplash-0.5x.webp")'}}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Our <span className="text-accent-600">Services</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Comprehensive software development and SEO services designed to
              accelerate your business growth and digital transformation.{" "}
              <span className="italic">Less tech, more life.</span>
            </motion.p>
          </div>
        </div>
      </RippleBackground>
    </section>
  );
};

export default ServicesHero;
