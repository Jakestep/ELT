"use client";
import { motion } from "motion/react";
import Link from "next/link";

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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              Technical Expertise
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              Our deep technical knowledge spans the full stack of modern
              software development, from frontend frameworks to cloud
              infrastructure.
            </p>
            <div className="space-y-6">
              {expertise.map((skill, index) => (
                <div key={index}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-500">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-200">
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
          <div className="from-accent-50 rounded-lg bg-gradient-to-br to-white p-8">
            <h3 className="mb-6 text-2xl font-bold text-gray-900">
              Technologies We Use
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="mb-2 font-semibold text-gray-900">Frontend</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>
                    <a href="https://nextjs.org" target="_blank">
                      Next.js
                    </a>
                  </li>
                  <li>
                    <a href="https://react.dev" target="_blank">
                      React
                    </a>
                  </li>
                  <li>
                    <a href="https://vite.dev" target="_blank">
                      Vite
                    </a>
                  </li>
                  <li>
                    <a href="https://tailwindcss.com/" target="_blank">
                      Tailwindcss
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mb-2 font-semibold text-gray-900">Backend</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>
                    <a href="https://nodejs.org/" target="_blank">
                      Node.js
                    </a>
                  </li>
                  <li>
                    <a href="https://nextjs.org" target="_blank">
                      Next.js
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://aws.amazon.com/what-is/sql/"
                      target="_blank"
                    >
                      SQL / SQLite
                    </a>
                  </li>
                  <li>
                    <a href="https://supabase.com" target="_blank">
                      Supabase
                    </a>
                  </li>
                  <li>
                    <a href="https://firebase.google.com" target="_blank">
                      Firebase
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mb-2 font-semibold text-gray-900">Cloud</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>
                    <a href="https://vercel.com/" target="_blank">
                      Vercel
                    </a>
                  </li>
                  <li>
                    <a href="https://aws.amazon.com/about-aws/" target="_blank">
                      AWS
                    </a>
                  </li>
                  <li>
                    <a href="https://azure.microsoft.com/en-us" target="_blank">
                      Azure
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.ibm.com/think/topics/ci-cd-pipeline"
                      target="_blank"
                    >
                      CI/DC Pipelines
                    </a>
                  </li>
                </ul>
              </div>
              <div className={`mt-auto`}>
                <h4 className="mb-2 font-semibold text-gray-900"></h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>
                    Don't see something you want? <br />
                    <Link href="/contact" className={`text-accent-600 italic`}>
                      Let us know
                    </Link>
                    , we love learning.
                  </li>
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
