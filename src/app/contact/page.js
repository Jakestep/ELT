import ContactHero from "../../components/contact/ContactHero";
import ContactForm from "../../components/contact/ContactForm";
import FaqSection from "../../components/contact/FaqSection";


// app/contact/page.js

export const metadata = {
  title: "Contact | EverLessTech",
  description: "Start your project with a free consultation. Tell us what you need — we’ll help you figure out the best way forward.",
  keywords: ["Contact EverLessTech", "Free software consultation", "Las Cruces tech support", "Talk to a web developer"],
  openGraph: {
    title: "Contact | EverLessTech",
    description: "Let’s talk about your goals — free, simple, and pressure-free.",
    images: ["/og/contact.jpg"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | EverLessTech",
    description: "Get in touch for a free tech consultation that doesn’t suck.",
    images: ["/og/contact.jpg"]
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
    }
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact EverLessTech",
      "description": "Reach out for help with web development, automation, or design."
    })
  }
};


export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <FaqSection />
    </>
  );
}
