import React from "react";
import { motion } from "motion/react";
import * as FiIcons from "react-icons/fi";
import SafeIcon from "../components/common/SafeIcon";

// This component is created but not currently used in the site
// It can be easily added back when you have real testimonials to display

const TestimonialsSection = ({ testimonials }) => {
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            What Clients Say
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Trusted by businesses worldwide for quality software development and
            SEO services.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-lg bg-gray-50 p-8"
            >
              <div className="mb-4 flex items-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <SafeIcon
                    key={i}
                    name="Star"
                    className="h-5 w-5 fill-current text-yellow-400"
                  />
                ))}
              </div>
              <p className="mb-4 text-gray-700 italic">
                "{testimonial.content}"
              </p>
              <div>
                <p className="font-semibold text-gray-900">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
