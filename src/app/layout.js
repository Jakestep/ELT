import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EverLessTech | Professional Software Development & SEO Services",
  description:
    "Quality-focused software development and SEO services with long-term client value. Less tech, more life.",
  keywords:
    "software development, web development, API development, SEO services, custom software, software consulting",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-white flex flex-col">
          <Header />
          <main className="flex-grow mt-6 md:mt-0">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
