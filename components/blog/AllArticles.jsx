"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCalendar, FiUser, FiArrowRight, FiSearch, FiTag } = FiIcons;

const AllArticles = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const categories = [
    { id: 'all', name: 'All Posts', color: 'bg-gray-100 text-gray-700' },
    { id: 'development', name: 'Development', color: 'bg-blue-100 text-blue-700' },
    { id: 'tutorials', name: 'Tutorials', color: 'bg-green-100 text-green-700' },
    { id: 'insights', name: 'Insights', color: 'bg-purple-100 text-purple-700' },
    { id: 'trends', name: 'Industry Trends', color: 'bg-orange-100 text-orange-700' }
  ];
  
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable APIs with Node.js and Express",
      excerpt: "Learn best practices for creating robust, scalable APIs that can handle high traffic and complex business logic.",
      content: "Full article content here...",
      category: "development",
      author: "John Developer",
      publishDate: new Date('2024-01-15'),
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Node.js", "API", "Express", "Backend"],
      featured: true
    },
    {
      id: 2,
      title: "React Performance Optimization Techniques",
      excerpt: "Discover advanced techniques to optimize React applications for better performance and user experience.",
      content: "Full article content here...",
      category: "tutorials",
      author: "Sarah Frontend",
      publishDate: new Date('2024-01-12'),
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Performance", "Optimization", "Frontend"],
      featured: false
    },
    {
      id: 3,
      title: "The Future of Web Development: What to Expect in 2024",
      excerpt: "Exploring emerging trends and technologies that will shape the web development landscape in the coming year.",
      content: "Full article content here...",
      category: "trends",
      author: "Mike Analyst",
      publishDate: new Date('2024-01-10'),
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Web Development", "Trends", "2024", "Future"],
      featured: true
    },
    {
      id: 4,
      title: "Database Design Best Practices for Modern Applications",
      excerpt: "Essential principles for designing efficient, scalable databases that support your application's growth.",
      content: "Full article content here...",
      category: "development",
      author: "Lisa Database",
      publishDate: new Date('2024-01-08'),
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Database", "Design", "SQL", "Architecture"],
      featured: false
    },
    {
      id: 5,
      title: "Understanding Microservices Architecture",
      excerpt: "A comprehensive guide to microservices architecture, its benefits, challenges, and implementation strategies.",
      content: "Full article content here...",
      category: "insights",
      author: "David Architect",
      publishDate: new Date('2024-01-05'),
      readTime: "15 min read",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Microservices", "Architecture", "Distributed", "Systems"],
      featured: true
    },
    {
      id: 6,
      title: "Getting Started with TypeScript in React Projects",
      excerpt: "Step-by-step guide to integrating TypeScript into your React projects for better type safety and development experience.",
      content: "Full article content here...",
      category: "tutorials",
      author: "Emma TypeScript",
      publishDate: new Date('2024-01-03'),
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["TypeScript", "React", "Tutorial", "Type Safety"],
      featured: false
    }
  ];
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            All Articles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse our complete collection of development articles and tutorials.
          </p>
        </div>
        
        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <SafeIcon icon={FiSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${categories.find(cat => cat.id === post.category)?.color}`}>
                    {categories.find(cat => cat.id === post.category)?.name}
                  </span>
                  {post.featured && (
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">
                      Featured
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-blue-600 cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span key={tagIndex} className="inline-flex items-center bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      <SafeIcon icon={FiTag} className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center">
                      <SafeIcon icon={FiUser} className="h-4 w-4 mr-1" />
                      {post.author}
                    </span>
                    <span className="flex items-center">
                      <SafeIcon icon={FiCalendar} className="h-4 w-4 mr-1" />
                      {format(post.publishDate, 'MMM dd')}
                    </span>
                  </div>
                  <span>{post.readTime}</span>
                </div>
                <div className="mt-4">
                  <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm">
                    Read More
                    <SafeIcon icon={FiArrowRight} className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllArticles;