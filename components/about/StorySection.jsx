"use client";
import { motion } from 'framer-motion';

const StorySection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded with a mission to bridge the gap between innovative technology and practical business solutions, 
              EverLessTech has been helping companies transform their ideas into powerful software applications.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              With over a decade of experience in software development, we've worked with startups, 
              growing businesses, and established enterprises to deliver solutions that not only meet today's 
              needs but are built to scale for tomorrow's challenges.
            </p>
            <p className="text-lg text-gray-600">
              Our approach is simple: understand your business, deliver quality code, and build lasting 
              partnerships that grow with your success. We believe in our motto - "Less tech, more life" - 
              meaning we handle the complex technology so you can focus on what matters most.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg p-8">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;