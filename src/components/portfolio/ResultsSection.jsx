"use client";
import { motion } from "motion/react";
import * as FiIcons from "react-icons/fi";
import SafeIcon from "../common/SafeIcon";

const { FiTrendingUp, FiUsers, FiZap } = FiIcons;

const ResultsSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Project Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Measurable outcomes that demonstrate the value of our software
            development services.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 rounded-lg mb-4">
              <SafeIcon name="TrendingUp" className="h-8 w-8 text-accent-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">250%</div>
            <p className="text-gray-600">Average ROI Increase</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 rounded-lg mb-4">
              <SafeIcon name="Users" className="h-8 w-8 text-accent-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">100+</div>
            <p className="text-gray-600">Satisfied Clients</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 rounded-lg mb-4">
              <SafeIcon name="Zap" className="h-8 w-8 text-accent-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">99.9%</div>
            <p className="text-gray-600">Project Success Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
