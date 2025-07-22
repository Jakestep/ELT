"use client";
import { motion } from "motion/react";
import * as FiIcons from "react-icons/fi";
import SafeIcon from "../common/SafeIcon";

const { FiCode, FiTrendingUp } = FiIcons;

const ExpertiseSection = () => {
  const expertise = [
    { name: "Frontend Development", level: 95 },
    { name: "Backend Development", level: 90 },
    { name: "API Design", level: 88 },
    { name: "Database Architecture", level: 85 },
    { name: "Cloud Solutions", level: 82 },
    { name: "DevOps & CI/CD", level: 80 },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Technical Expertise
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our deep technical knowledge spans the full stack of modern
              software development, from frontend frameworks to cloud
              infrastructure.
            </p>
            <div className="space-y-6">
              {expertise.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-500">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: index * 0.1, duration: 0.8 }}
                      className="bg-accent-600 h-2 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-accent-50 to-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Technologies We Use
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Frontend</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>React & Next.js</li>
                  <li>Vue.js & Nuxt.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Backend</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Node.js & Express</li>
                  <li>Python & Django</li>
                  <li>PostgreSQL & MongoDB</li>
                  <li>GraphQL & REST APIs</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Cloud</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>AWS & Azure</li>
                  <li>Docker & Kubernetes</li>
                  <li>CI/CD Pipelines</li>
                  <li>Serverless Functions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Tools</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Git & GitHub</li>
                  <li>Jest & Cypress</li>
                  <li>Figma & Adobe XD</li>
                  <li>Jira & Slack</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
