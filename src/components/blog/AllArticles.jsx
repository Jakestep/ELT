"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { format } from "date-fns";
import SafeIcon from "../../common/SafeIcon";

const AllArticles = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

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

  const blogPosts = [
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
      id: 2,
      title: "React Performance Optimization Techniques",
      excerpt:
        "Discover advanced techniques to optimize React applications for better performance and user experience.",
      content: "Full article content here...",
      category: "tutorials",
      author: "Sarah Frontend",
      publishDate: new Date("2024-01-12"),
      readTime: "12 min read",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Performance", "Optimization", "Frontend"],
      featured: false,
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
      id: 4,
      title: "Database Design Best Practices for Modern Applications",
      excerpt:
        "Essential principles for designing efficient, scalable databases that support your application's growth.",
      content: "Full article content here...",
      category: "development",
      author: "Lisa Database",
      publishDate: new Date("2024-01-08"),
      readTime: "10 min read",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Database", "Design", "SQL", "Architecture"],
      featured: false,
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
    {
      id: 6,
      title: "Getting Started with TypeScript in React Projects",
      excerpt:
        "Step-by-step guide to integrating TypeScript into your React projects for better type safety and development experience.",
      content: "Full article content here...",
      category: "tutorials",
      author: "Emma TypeScript",
      publishDate: new Date("2024-01-03"),
      readTime: "9 min read",
      image:
        "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["TypeScript", "React", "Tutorial", "Type Safety"],
      featured: false,
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            All Articles
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Browse our complete collection of development articles and
            tutorials.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mx-auto mb-8 max-w-md">
          <div className="relative">
            <SafeIcon
              name={"Search"}
              className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-gray-400"
            />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="focus:ring-accent-500 w-full rounded-lg border border-gray-300 py-3 pr-4 pl-10 focus:border-transparent focus:ring-2"
            />
          </div>
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

        {/* Articles Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-background overflow-hidden rounded-lg shadow-sm transition-shadow hover:shadow-md"
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
                  {post.featured && (
                    <span className="rounded bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
                      Featured
                    </span>
                  )}
                </div>
                <h3 className="hover:text-accent-600 mb-3 cursor-pointer text-lg font-bold text-gray-900">
                  {post.title}
                </h3>
                <p className="mb-4 text-sm text-gray-600">{post.excerpt}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-flex items-center rounded bg-gray-100 px-2 py-1 text-xs text-gray-700"
                    >
                      <SafeIcon name={"Tag"} className="mr-1 h-3 w-3" />
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center">
                      <SafeIcon name={"User"} className="mr-1 h-4 w-4" />
                      {post.author}
                    </span>
                    <span className="flex items-center">
                      <SafeIcon name={"Calendar"} className="mr-1 h-4 w-4" />
                      {format(post.publishDate, "MMM dd")}
                    </span>
                  </div>
                  <span>{post.readTime}</span>
                </div>
                <div className="mt-4">
                  <button className="text-accent-600 hover:text-accent-700 inline-flex items-center text-sm font-medium">
                    Read More
                    <SafeIcon name={"ArrowRight"} className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-lg text-gray-500">
              No articles found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllArticles;
