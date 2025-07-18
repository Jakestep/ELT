import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiGlobe, FiServer, FiSettings, FiHeadphones, FiCheckCircle, FiArrowRight, FiSearch } = FiIcons;

const Services = () => {
  const services = [
    {
      icon: FiGlobe,
      title: "Web Application Development",
      description: "Modern, responsive web applications built with cutting-edge technologies",
      features: [
        "React, Vue.js, and Angular applications",
        "Progressive Web Apps (PWAs)",
        "Single Page Applications (SPAs)",
        "E-commerce platforms",
        "Content Management Systems",
        "Real-time applications with WebSockets"
      ],
      technologies: ["React", "Next.js", "Vue.js", "TypeScript", "Node.js"],
      startingPrice: "$5,000"
    },
    {
      icon: FiServer,
      title: "API Development & Integration",
      description: "Robust, scalable APIs that power your applications and connect your systems",
      features: [
        "RESTful API design and development",
        "GraphQL APIs",
        "Third-party API integrations",
        "Microservices architecture",
        "API documentation and testing",
        "Authentication and authorization"
      ],
      technologies: ["Node.js", "Express", "GraphQL", "PostgreSQL", "MongoDB"],
      startingPrice: "$3,000"
    },
    {
      icon: FiSearch,
      title: "SEO Services",
      description: "Comprehensive search engine optimization to improve visibility and drive organic traffic",
      features: [
        "Technical SEO audits",
        "On-page optimization",
        "Content strategy",
        "Keyword research and analysis",
        "Local SEO",
        "Performance optimization",
        "Backlink strategy"
      ],
      technologies: ["Google Analytics", "SEO Tools", "Content Optimization", "Technical Auditing"],
      startingPrice: "$1,500"
    },
    {
      icon: FiSettings,
      title: "Custom Software Solutions",
      description: "Tailored software applications designed to solve your unique business challenges",
      features: [
        "Business process automation",
        "Custom CRM and ERP systems",
        "Data analytics dashboards",
        "Workflow management tools",
        "Integration platforms",
        "Legacy system modernization"
      ],
      technologies: ["Python", "Django", "React", "PostgreSQL", "AWS"],
      startingPrice: "$10,000"
    },
    {
      icon: FiHeadphones,
      title: "Technical Consulting",
      description: "Expert guidance to help you make informed technology decisions",
      features: [
        "Technology stack selection",
        "Architecture design and review",
        "Code audits and optimization",
        "Performance optimization",
        "Security assessments",
        "Team training and mentoring"
      ],
      technologies: ["Various", "Based on", "Project", "Requirements"],
      startingPrice: "$150/hour"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Discovery & Planning",
      description: "We start by understanding your business goals, requirements, and constraints to create a comprehensive project plan."
    },
    {
      step: "2",
      title: "Design & Architecture",
      description: "Our team designs the system architecture and user experience, ensuring scalability and maintainability."
    },
    {
      step: "3",
      title: "Development & Testing",
      description: "We build your solution using agile methodologies, with continuous testing and regular progress updates."
    },
    {
      step: "4",
      title: "Deployment & Support",
      description: "We handle deployment and provide ongoing support to ensure your solution continues to perform optimally."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Our <span className="text-blue-600">Services</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Comprehensive software development and SEO services designed to accelerate your business growth 
              and digital transformation.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
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
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mr-4">
                    <SafeIcon icon={service.icon} className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-blue-600 font-medium">Starting at {service.startingPrice}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <SafeIcon icon={FiCheckCircle} className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Get Started
                  <SafeIcon icon={FiArrowRight} className="ml-1 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures quality delivery and client satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full text-2xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support services to ensure your success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Maintenance & Support</h3>
              <p className="text-gray-600 mb-4">
                Ongoing maintenance, updates, and technical support to keep your applications running smoothly.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><SafeIcon icon={FiCheckCircle} className="h-4 w-4 text-green-500 mr-2" />Bug fixes and updates</li>
                <li className="flex items-center"><SafeIcon icon={FiCheckCircle} className="h-4 w-4 text-green-500 mr-2" />Performance monitoring</li>
                <li className="flex items-center"><SafeIcon icon={FiCheckCircle} className="h-4 w-4 text-green-500 mr-2" />Security patches</li>
                <li className="flex items-center"><SafeIcon icon={FiCheckCircle} className="h-4 w-4 text-green-500 mr-2" />24/7 support available</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud Migration</h3>
              <p className="text-gray-600 mb-4">
                Seamless migration of your applications to cloud platforms for improved scalability and performance.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><SafeIcon icon={FiCheckCircle} className="h-4 w-4 text-green-500 mr-2" />AWS, Azure, GCP</li>
                <li className="flex items-center"><SafeIcon icon={FiCheckCircle} className="h-4 w-4 text-green-500 mr-2" />Zero-downtime migration</li>
                <li className="flex items-center"><SafeIcon icon={FiCheckCircle} className="h-4 w-4 text-green-500 mr-2" />Cost optimization</li>
                <li className="flex items-center"><SafeIcon icon={FiCheckCircle} className="h-4 w-4 text-green-500 mr-2" />Security compliance</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Team Augmentation</h3>
              <p className="text-gray-600 mb-4">
                Skilled developers to extend your team capacity and accelerate project delivery.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><SafeIcon icon={FiCheckCircle} className="h-4 w-4 text-green-500 mr-2" />Vetted developers</li>
                <li className="flex items-center"><SafeIcon icon={FiCheckCircle} className="h-4 w-4 text-green-500 mr-2" />Flexible engagement</li>
                <li className="flex items-center"><SafeIcon icon={FiCheckCircle} className="h-4 w-4 text-green-500 mr-2" />Quick onboarding</li>
                <li className="flex items-center"><SafeIcon icon={FiCheckCircle} className="h-4 w-4 text-green-500 mr-2" />Cultural fit guarantee</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss your project requirements and create a custom solution that fits your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Request a Quote
            </Link>
            <Link
              to="/portfolio"
              className="border border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;