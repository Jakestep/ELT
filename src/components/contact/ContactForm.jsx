"use client";

import { useActionState, useState } from "react";
import { motion } from "motion/react";
import SafeIcon from "../../common/SafeIcon";
import { submitContactForm } from "./submitContactForm";
import Modal from "@/common/Modal";

const initialState = { success: null, error: null };

const ContactForm = () => {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const contactInfo = [
    {
      icon: 'Mail',
      title: "Email",
      content: "jake@everlesstech.com",
      description: "Send us an email anytime",
      link: "mailto:jake@everlesstech.com",
    },
    {
      icon: 'Phone',
      title: "Phone",
      content: "+1 (575) 520-4956",
      description: "Mon-Fri from 7am to 4pm MDT",
      link: "tel:+15755204956",
    },
    {
      icon: 'MapPin',
      title: "Location",
      content: "Remote & On-site",
      description: "Serving clients worldwide",
      link: null,
    },
  ];

  const projectTypes = [
    "Web Application",
    "SEO Services",
    "Custom Software",
    "Mobile App",
    "E-commerce Platform",
    "Other",
  ];

  const budgetRanges = [
    "Under $5,000",
    "$5,000 - $10,000",
    "$10,000 - $20,000",
    "$20,000+",
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-background p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Start Your Project
            </h2>

            <form action={formAction} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  placeholder="Your Company (or self)"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range, index) => (
                      <option key={index} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                  Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                >
                  <option value="">Select timeline</option>
                  {timelines.map((timeline, index) => (
                    <option key={index} value={timeline}>{timeline}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Description *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accent-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-accent-700 transition-colors inline-flex items-center justify-center"
              >
                Send Message
                <SafeIcon name="Send" className="ml-2 h-5 w-5" />
              </button>

              
              <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Submission Received">
                <pre className="text-sm whitespace-pre-wrap">
                  {state.success ? 
                      <p className="text-green-600 font-medium mt-4">Thanks! We'll be in touch soon.</p>
                    : state.error ?
                      <p className="text-red-600 font-medium mt-4">{state.error}</p>
                    : <p>Thank you!</p>
                  }
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
