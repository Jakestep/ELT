import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import SeoHelmet from './components/SeoHelmet';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <SeoHelmet 
          title="Professional Software Development & SEO Services"
          description="EverLessTech provides quality-focused software development and SEO services with long-term client value. Specializing in web apps, APIs, and custom solutions."
          keywords={["software development", "web development", "SEO services", "API development", "custom software"]}
        />
        <Header />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;