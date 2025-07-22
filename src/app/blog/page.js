import BlogHero from "../../components/blog/BlogHero";
import FeaturedArticles from "../../components/blog/FeaturedArticles";
import AllArticles from "../../components/blog/AllArticles";
import NewsletterSignup from "../../components/blog/NewsletterSignup";

export const metadata = {
  title: "Blog | EverLessTech",
  description:
    "Insights, tutorials, and industry trends from our software development and SEO experts. Less tech, more life.",
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
