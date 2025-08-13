"use client";
import { motion } from "motion/react";
import SafeIcon from "../../common/SafeIcon";

const FeaturedProjects = () => {
  const featuredProjects = [
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
  ];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Highlighting our most impactful work with measurable results and
            client success stories.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-background overflow-hidden rounded-lg shadow-lg transition-shadow hover:shadow-xl"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-64 w-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="mb-3 text-2xl font-bold text-gray-900">
                  {project.title}
                </h3>
                <p className="mb-6 text-gray-600">{project.description}</p>
                <div className="mb-6 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-accent-600 text-2xl font-bold">
                      {project.results.metric1.value}
                    </div>
                    <div className="text-sm text-gray-600">
                      {project.results.metric1.label}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-accent-600 text-2xl font-bold">
                      {project.results.metric2.value}
                    </div>
                    <div className="text-sm text-gray-600">
                      {project.results.metric2.label}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-accent-600 text-2xl font-bold">
                      {project.results.metric3.value}
                    </div>
                    <div className="text-sm text-gray-600">
                      {project.results.metric3.label}
                    </div>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-accent-100 text-accent-800 rounded-full px-3 py-1 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    className="text-accent-600 hover:text-accent-700 inline-flex items-center font-medium"
                  >
                    <SafeIcon name="ExternalLink" className="mr-1 h-4 w-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center font-medium text-gray-600 hover:text-gray-700"
                  >
                    <SafeIcon name="Github" className="mr-1 h-4 w-4" />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
