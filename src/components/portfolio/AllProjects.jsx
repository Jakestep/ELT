"use client";
import { useState } from "react";
import { motion } from "motion/react";
import SafeIcon from "../../common/SafeIcon";

const AllProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web-app", name: "Web Applications" },
    // { id: "api", name: "API Development" },
    { id: "custom", name: "Custom Solutions" },
    { id: "consulting", name: "Consulting" },
  ];

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "web-app",
      description:
        "A full-featured e-commerce platform with inventory management, payment processing, and analytics dashboard.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      results: {
        metric1: { label: "Revenue Increase", value: "45%" },
        metric2: { label: "Load Time", value: "2.1s" },
        metric3: { label: "User Retention", value: "78%" },
      },
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Healthcare API System",
      category: "api",
      description:
        "HIPAA-compliant API system for patient data management with real-time synchronization across multiple healthcare providers.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      results: {
        metric1: { label: "API Calls/Day", value: "100K+" },
        metric2: { label: "Response Time", value: "150ms" },
        metric3: { label: "Uptime", value: "99.9%" },
      },
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Project Management Dashboard",
      category: "web-app",
      description:
        "Comprehensive project management tool with team collaboration, time tracking, and advanced reporting features.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Vue.js", "Python", "Django", "PostgreSQL"],
      results: {
        metric1: { label: "Team Productivity", value: "+35%" },
        metric2: { label: "Project Completion", value: "92%" },
        metric3: { label: "User Satisfaction", value: "4.8/5" },
      },
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 4,
      title: "Financial Analytics Platform",
      category: "custom",
      description:
        "Real-time financial data processing and visualization platform for investment firms with advanced charting and reporting.",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "D3.js", "Python", "Redis"],
      results: {
        metric1: { label: "Data Processing", value: "1M+ points/sec" },
        metric2: { label: "Cost Reduction", value: "60%" },
        metric3: { label: "Decision Speed", value: "3x faster" },
      },
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 5,
      title: "IoT Device Management",
      category: "api",
      description:
        "Scalable IoT platform for device monitoring, data collection, and automated control systems across multiple industries.",
      image:
        "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Node.js", "MQTT", "InfluxDB", "Grafana"],
      results: {
        metric1: { label: "Devices Connected", value: "10K+" },
        metric2: { label: "Data Points/Hour", value: "5M+" },
        metric3: { label: "System Reliability", value: "99.95%" },
      },
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 6,
      title: "Learning Management System",
      category: "web-app",
      description:
        "Comprehensive LMS with course creation, progress tracking, interactive assessments, and video streaming capabilities.",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB", "AWS S3"],
      results: {
        metric1: { label: "Student Engagement", value: "+40%" },
        metric2: { label: "Course Completion", value: "85%" },
        metric3: { label: "Platform Adoption", value: "95%" },
      },
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            All Projects
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Browse our complete portfolio of successful software development
            projects.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`rounded-lg px-6 py-3 font-medium transition-colors ${
                selectedCategory === category.id
                  ? "bg-accent-600 text-white"
                  : "bg-background text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-background overflow-hidden rounded-lg shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm text-gray-600">
                  {project.description}
                </p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    <a
                      href={project.liveUrl}
                      className="text-accent-600 hover:text-accent-700 text-sm font-medium"
                    >
                      <SafeIcon name="ExternalLink" className="h-4 w-4" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="text-sm font-medium text-gray-600 hover:text-gray-700"
                    >
                      <SafeIcon name="Github" className="h-4 w-4" />
                    </a>
                  </div>
                  {project.featured && (
                    <span className="rounded bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
                      Featured
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
