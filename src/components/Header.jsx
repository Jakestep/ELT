"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import SafeIcon from "@/components/common/SafeIcon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const [clickedPath, setClickedPath] = useState(null);

  // Close the menu when route changes or on mount
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isLoading) return;
    const timeout = setTimeout(() => {
      setIsLoading(false);
      setClickedPath(null);
    }, 500); // wait 500ms to simulate completion (Next.js doesn't have route loading state out of the box)

    return () => clearTimeout(timeout);
  }, [pathname]);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    // { name: "Portfolio", href: "/portfolio" },
    // { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path) => pathname === path;

  // Enhanced animations for mobile menu
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      padding: '0px',
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.07,
      },
    },
    open: {
      opacity: 1,
      padding: '1rem',
      height: 'fit-content',
      transition: {
        duration: 0.4,
        ease: "easeInOut",
        staggerChildren: 0.07,
        delayChildren: 0.1,
      },
    },
  };
  

  const itemVariants = {
    closed: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 300,
      },
    },
  };

  // Button icon animation
  const buttonVariants = {
    open: { rotate: 180, scale: 1 },
    closed: { rotate: 0, scale: 1 },
  };

  const iconVariants = {
    open: { rotate: 90 },
    closed: { rotate: 0 },
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`fixed top-0 left-0 w-screen h-screen bg-transparent ${!isMenuOpen && 'hidden'}`} />
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="flex items-center space-x-2 text-primary-600 hover:text-accent-600 transition-colors"
          >
            <SafeIcon name="Code" className="h-8 w-8" />
            <div className="flex flex-col">
              <span className="text-xl font-bold ">EverLessTech</span>
              <span className="text-xs text-gray-500 italic">
                Less tech, more life
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-accent-600 border-b-2 border-accent-600"
                    : clickedPath === item.href && isLoading
                      ? "text-gray-300"
                      : "text-gray-700 hover:text-accent-600"
                }`}
                onClick={() => {
                  setClickedPath(item.href);
                  setIsLoading(true);
                }}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-accent-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent-700 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button with enhanced animation */}
          <motion.button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-accent-600 hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
            animate={isMenuOpen ? "open" : "closed"}
            variants={buttonVariants}
            transition={{ duration: 0.3 }}
          >
            <motion.div variants={iconVariants} transition={{ duration: 0.3 }}>
              {isMenuOpen ? (
                <SafeIcon name="X" className="h-6 w-6" />
              ) : (
                <SafeIcon name="Menu" className="h-6 w-6" />
              )}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Navigation with enhanced animations */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="md:hidden  box-border overflow-hidden"
            >
              <motion.div className="flex flex-col space-y-1">
                {navigation.map((item) => (
                  <motion.div key={item.name} variants={itemVariants}>
                    <Link
                      href={item.href}
                      className={`text-base font-medium transition-colors block px-4 py-2 rounded-lg ${
                        isActive(item.href)
                          ? "text-accent-600 bg-accent-50"
                          : "text-gray-700 hover:text-accent-600 hover:bg-gray-50"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div variants={itemVariants}>
                  <Link
                    href="/contact"
                    className="bg-accent-600 text-white px-4 py-2 rounded-lg text-base font-medium hover:bg-accent-700 transition-colors text-center block mx-4 mt-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
