"use client";
import { useState } from "react";
import { motion } from "motion/react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail("");

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1000);
  };

  return (
    <section className="bg-accent-600 py-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
          Stay Updated
        </h2>
        <p className="text-accent-100 mx-auto mb-8 max-w-3xl text-xl">
          Subscribe to our newsletter for the latest insights, tutorials, and
          industry trends.
        </p>
        <div className="mx-auto max-w-md">
          {!isSubmitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-accent-500 flex-1 rounded-lg border px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-background text-accent-600 disabled:text-accent-400 rounded-lg px-6 py-3 font-medium transition-colors hover:bg-gray-100 disabled:bg-gray-200"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="text-accent-600 mr-2 -ml-1 h-4 w-4 animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Subscribing...
                  </span>
                ) : (
                  "Subscribe"
                )}
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-background text-accent-600 rounded-lg px-6 py-4 font-medium"
            >
              Thanks for subscribing! Check your inbox soon.
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
