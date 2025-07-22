import ContactHero from "../../components/contact/ContactHero";
import ContactForm from "../../components/contact/ContactForm";
import FaqSection from "../../components/contact/FaqSection";

export const metadata = {
  title: "Contact | EverLessTech",
  description:
    "Get in touch with EverLessTech for professional software development and SEO services. Less tech, more life.",
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
