"use client";
import Link from "next/link";
import { motion } from "motion/react";
import * as FiIcons from "react-icons/fi";
import SafeIcon from "../common/SafeIcon";

const {
  FiGlobe,
  FiServer,
  FiSettings,
  FiHeadphones,
  FiCheckCircle,
  FiArrowRight,
  FiSearch,
} = FiIcons;

const ServicesGrid = () => {
  const services = [
    {
      icon: FiGlobe,
      title: "Web Application Development",
      description:
        "Modern, responsive web applications built with cutting-edge technologies",
      features: [
        "React, Vue.js, and Angular applications",
        "Progressive Web Apps (PWAs)",
        "Single Page Applications (SPAs)",
        "E-commerce platforms",
        "Content Management Systems",
        "Real-time applications with WebSockets",
      ],
      technologies: ["React", "Next.js", "Vue.js", "TypeScript", "Node.js"],
      startingPrice: "$5,000",
    },
    {
      icon: FiServer,
      title: "API Development & Integration",
      description:
        "Robust, scalable APIs that power your applications and connect your systems",
      features: [
        "RESTful API design and development",
        "GraphQL APIs",
        "Third-party API integrations",
        "Microservices architecture",
        "API documentation and testing",
        "Authentication and authorization",
      ],
      technologies: ["Node.js", "Express", "GraphQL", "PostgreSQL", "MongoDB"],
      startingPrice: "$3,000",
    },
    {
      icon: FiSearch,
      title: "SEO Services",
      description:
        "Comprehensive search engine optimization to improve visibility and drive organic traffic",
      features: [
        "Technical SEO audits",
        "On-page optimization",
        "Content strategy",
        "Keyword research and analysis",
        "Local SEO",
        "Performance optimization",
        "Backlink strategy",
      ],
      technologies: [
        "Google Analytics",
        "SEO Tools",
        "Content Optimization",
        "Technical Auditing",
      ],
      startingPrice: "$1,500",
    },
    {
      icon: FiSettings,
      title: "Custom Software Solutions",
      description:
        "Tailored software applications designed to solve your unique business challenges",
      features: [
        "Business process automation",
        "Custom CRM and ERP systems",
        "Data analytics dashboards",
        "Workflow management tools",
        "Integration platforms",
        "Legacy system modernization",
      ],
      technologies: ["Python", "Django", "React", "PostgreSQL", "AWS"],
      startingPrice: "$10,000",
    },
    {
      icon: FiHeadphones,
      title: "Technical Consulting",
      description:
        "Expert guidance to help you make informed technology decisions",
      features: [
        "Technology stack selection",
        "Architecture design and review",
        "Code audits and optimization",
        "Performance optimization",
        "Security assessments",
        "Team training and mentoring",
      ],
      technologies: ["Various", "Based on", "Project", "Requirements"],
      startingPrice: "$150/hour",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent-100 rounded-lg mr-4">
                  <SafeIcon
                    name={
                      service.icon.name.substring(2) /**TODO: check me too */
                    }
                    className="h-6 w-6 text-accent-600"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-accent-600 font-medium">
                    Starting at {service.startingPrice}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">{service.description}</p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">
                  What's Included:
                </h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <SafeIcon
                        name="CheckCircle"
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                      />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Technologies:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center text-accent-600 hover:text-accent-700 font-medium"
              >
                Get Started
                <SafeIcon name="ArrowRight" className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
