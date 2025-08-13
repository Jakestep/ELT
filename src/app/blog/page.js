import BlogHero from "../../components/blog/BlogHero";
import FeaturedArticles from "../../components/blog/FeaturedArticles";
import AllArticles from "../../components/blog/AllArticles";
import NewsletterSignup from "../../components/blog/NewsletterSignup";

// app/blog/page.js

export const metadata = {
  title: "Blog | EverLessTech",
  description:
    "Tech tips without the headache. Read about digital minimalism, smart automation, and healthy ways to use tech in life and business.",
  keywords: [
    "Healthy tech blog",
    "Digital wellness",
    "Tech tips for founders",
    "Software advice",
  ],
  openGraph: {
    title: "Blog | EverLessTech",
    description: "Simple tech insights for a better life.",
    images: ["/og/blog.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | EverLessTech",
    description: "Quietly powerful software ideas — for humans, not robots.",
    images: ["/og/blog.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      maxImagePreview: "large",
      maxSnippet: -1,
      maxVideoPreview: -1,
    },
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "EverLessTech Blog",
      description: "Software and tech lifestyle insights from EverLessTech.",
    }),
  },
};

export default function Blog() {
  return (
    <>
      <BlogHero />
      <FeaturedArticles />
      <AllArticles />
      <NewsletterSignup />
    </>
  );
}
