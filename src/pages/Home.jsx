import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCode, FiZap, FiShield, FiTrendingUp, FiArrowRight, FiCheckCircle } = FiIcons;

const Home = () => {
  const features = [
    {
      icon: FiCode,
      title: "Custom Development",
      description: "Tailored software solutions built to your exact specifications and business needs."
    },
    {
      icon: FiZap,
      title: "Performance Focused",
      description: "Optimized applications and websites that deliver exceptional speed and user experience."
    },
    {
      icon: FiShield,
      title: "Security First",
      description: "Enterprise-grade security practices built into every line of code."
    },
    {
      icon: FiTrendingUp,
      title: "Scalable Solutions",
      description: "Architecture designed to grow with your business and adapt to changing needs."
    }
  ];

  // Testimonials section is commented out for now, but can be easily reactivated later
  /* 
  const testimonials = [
    {
      name: "Client Name",
      company: "Company Name",
      content: "Testimonial content here...",
      rating: 5
    },
    {
      name: "Client Name",
      company: "Company Name",
      content: "Testimonial content here...",
      rating: 5
    },
    {
      name: "Client Name",
      company: "Company Name",
      content: "Testimonial content here...",
      rating: 5
    }
  ];
  */

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Professional Software Development & 
              <span className="text-blue-600"> SEO Services</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Quality-focused development with long-term client value. Specializing in web applications, 
              APIs, SEO, and custom software solutions that drive business growth.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
              >
                Start Your Project
                <SafeIcon icon={FiArrowRight} className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/portfolio"
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-50 transition-colors"
              >
                View Portfolio
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose EverLessTech
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver exceptional software solutions and SEO services with a focus on quality, performance, and long-term value.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-4">
                  <SafeIcon icon={feature.icon} className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive software development and SEO solutions tailored to your business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Web Applications</h3>
              <p className="text-gray-600 mb-4">
                Modern, responsive web applications built with the latest technologies and best practices.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><SafeIcon icon={FiCheckCircle} className="h-4 w-4 text-green-500 mr-2" />React & Next.js</li>
                <li className="flex items-center"><SafeIcon icon={FiCheckCircle} className="h-4 w-4 text-green-500 mr-2" />Node.js & Express</li>
                <li className="flex items-center"><SafeIcon icon={FiCheckCircle} className="h-4 w-4 text-green-500 mr-2" />Database Integration</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">SEO Services</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive search engine optimization to improve visibility and drive organic traffic.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><SafeIcon icon={FiCheckCircle} className="h-4 w-4 text-green-500 mr-2" />Technical SEO Audits</li>
                <li className="flex items-center"><SafeIcon icon={FiCheckCircle} className="h-4 w-4 text-green-500 mr-2" />Keyword Research</li>
                <li className="flex items-center"><SafeIcon icon={FiCheckCircle} className="h-4 w-4 text-green-500 mr-2" />Content Optimization</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Custom Solutions</h3>
              <p className="text-gray-600 mb-4">
                Tailored software solutions designed to solve your unique business challenges.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><SafeIcon icon={FiCheckCircle} className="h-4 w-4 text-green-500 mr-2" />Business Analysis</li>
                <li className="flex items-center"><SafeIcon icon={FiCheckCircle} className="h-4 w-4 text-green-500 mr-2" />System Architecture</li>
                <li className="flex items-center"><SafeIcon icon={FiCheckCircle} className="h-4 w-4 text-green-500 mr-2" />Ongoing Support</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              View All Services
              <SafeIcon icon={FiArrowRight} className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Commented out for now, can be easily reactivated later */}
      {/*
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by businesses worldwide for quality software development services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <SafeIcon key={i} icon={FiStar} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how we can help you build exceptional software solutions that drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Get Started Today
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

export default Home;