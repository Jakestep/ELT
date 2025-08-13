"use client";
import { motion } from "motion/react";
import { format } from "date-fns";
import * as FiIcons from "react-icons/fi";
import SafeIcon from "../../common/SafeIcon";

const FeaturedArticles = () => {
  const featuredPosts = [
    {
      id: 1,
      title: "Building Scalable APIs with Node.js and Express",
      excerpt:
        "Learn best practices for creating robust, scalable APIs that can handle high traffic and complex business logic.",
      content: "Full article content here...",
      category: "development",
      author: "John Developer",
      publishDate: new Date("2024-01-15"),
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Node.js", "API", "Express", "Backend"],
      featured: true,
    },
    {
      id: 3,
      title: "The Future of Web Development: What to Expect in 2024",
      excerpt:
        "Exploring emerging trends and technologies that will shape the web development landscape in the coming year.",
      content: "Full article content here...",
      category: "trends",
      author: "Mike Analyst",
      publishDate: new Date("2024-01-10"),
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Web Development", "Trends", "2024", "Future"],
      featured: true,
    },
    {
      id: 5,
      title: "Understanding Microservices Architecture",
      excerpt:
        "A comprehensive guide to microservices architecture, its benefits, challenges, and implementation strategies.",
      content: "Full article content here...",
      category: "insights",
      author: "David Architect",
      publishDate: new Date("2024-01-05"),
      readTime: "15 min read",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Microservices", "Architecture", "Distributed", "Systems"],
      featured: true,
    },
  ];

  const categories = [
    { id: "all", name: "All Posts", color: "bg-gray-100 text-gray-700" },
    {
      id: "development",
      name: "Development",
      color: "bg-accent-100 text-accent-700",
    },
    {
      id: "tutorials",
      name: "Tutorials",
      color: "bg-green-100 text-green-700",
    },
    {
      id: "insights",
      name: "Insights",
      color: "bg-purple-100 text-purple-700",
    },
    {
      id: "trends",
      name: "Industry Trends",
      color: "bg-orange-100 text-orange-700",
    },
  ];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Featured Articles
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Our most popular and insightful articles on software development.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {featuredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-background overflow-hidden rounded-lg shadow-lg transition-shadow hover:shadow-xl"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-48 w-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium ${categories.find((cat) => cat.id === post.category)?.color}`}
                  >
                    {categories.find((cat) => cat.id === post.category)?.name}
                  </span>
                  <span className="rounded bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
                    Featured
                  </span>
                </div>
                <h3 className="hover:text-accent-600 mb-3 cursor-pointer text-xl font-bold text-gray-900">
                  {post.title}
                </h3>
                <p className="mb-4 text-gray-600">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <SafeIcon name="User" className="mr-1 h-4 w-4" />
                      {post.author}
                    </span>
                    <span className="flex items-center">
                      <SafeIcon name="Calendar" className="mr-1 h-4 w-4" />
                      {format(post.publishDate, "MMM dd, yyyy")}
                    </span>
                  </div>
                  <span>{post.readTime}</span>
                </div>
                <div className="mt-4">
                  <button className="text-accent-600 hover:text-accent-700 inline-flex items-center font-medium">
                    Read More
                    <SafeIcon name="ArrowRight" className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
