"use client";
import { motion } from 'framer-motion';

const ContactHero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Let's Build Something <span className="text-blue-600">Amazing</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Ready to transform your ideas into powerful software solutions or improve your online visibility? 
            Let's discuss your project and create something extraordinary together.
            <br />
            <span className="italic text-blue-600">Less tech, more life.</span>
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;