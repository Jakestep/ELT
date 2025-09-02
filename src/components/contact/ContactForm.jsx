"use client";

import { useActionState, useEffect, useState } from "react";
import { motion } from "motion/react";
import SafeIcon from "../../common/SafeIcon";
import { submitContactForm } from "./submitContactForm";
import Modal from "@/common/Modal";

const initialState = { success: null, error: null };

const ContactForm = () => {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (state.success != null) {
      setIsModalOpen(true);
    }

    return () => {};
  }, [state]);

  const contactInfo = [
    {
      icon: "Mail",
      title: "Email",
      content: "jake@everlesstech.com",
      description: "Send us an email anytime",
      link: "mailto:jake@everlesstech.com",
    },
    {
      icon: "Phone",
      title: "Phone",
      content: "+1 (575) 520-4956",
      description: "Mon-Fri from 7am to 4pm MDT",
      link: "tel:+15755204956",
    },
    {
      icon: "MapPin",
      title: "Location",
      content: "Remote & On-site",
      description: "Serving clients worldwide",
      link: null,
    },
  ];

  const projectTypes = [
    "Website",
    "Consulting",
    "SEO Services",
    "Custom Software",
    "Mobile App",
    "E-commerce Platform",
    "Other",
  ];

  const timelines = [
    "ASAP",
    "Within 1 month",
    "1-3 months",
    "3-6 months",
    "6+ months",
  ];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-background rounded-lg p-8 shadow-lg"
          >
            <h2 className="mb-6 text-3xl font-bold text-gray-900">
              Start Your Project
            </h2>

            <form action={formAction} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="focus:ring-accent-500 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="focus:ring-accent-500 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="focus:ring-accent-500 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2"
                  placeholder="Your Company (or self)"
                />
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="projectType"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    className="focus:ring-accent-500 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2"
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type, index) => (
                      <option key={index} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="timeline"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  className="focus:ring-accent-500 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2"
                >
                  <option value="">Select timeline</option>
                  {timelines.map((timeline, index) => (
                    <option key={index} value={timeline}>
                      {timeline}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Pain Points *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="focus:ring-accent-500 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2"
                  placeholder="Tell us what's holding you back..."
                />
              </div>

              <button
                type="submit"
                className="bg-accent-600 hover:bg-accent-700 inline-flex w-full items-center justify-center rounded-lg px-8 py-4 font-medium text-white transition-colors"
              >
                Send Message
                <SafeIcon name="Send" className="ml-2 h-5 w-5" />
              </button>

              <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Submission Received"
              >
                <pre className="text-sm whitespace-pre-wrap">
                  {state.success ? (
                    <p className="mt-4 font-medium text-green-600">
                      Thanks! We'll be in touch soon.
                    </p>
                  ) : state.error ? (
                    <p className="mt-4 font-medium text-red-600">
                      {state.error}
                    </p>
                  ) : (
                    <p>Thank you!</p>
                  )}
                </pre>
              </Modal>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
