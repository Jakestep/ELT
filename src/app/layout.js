import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"] });

// app/layout.js
export const metadata = {
  metadataBase: new URL("https://everlesstech.com"),
  title: {
    default: "EverLessTech | Less tech, more life.",
    template: "%s | EverLessTech",
  },
  description:
    "We build simple, fast, high-quality web apps and software. EverLessTech means Less tech, more life.",
  keywords: [
    "web development",
    "custom software",
    "next.js",
    "SEO",
    "EverLessTech",
    "ELT",
    "elt",
    "website",
    "web design",
    "app development",
    "UX",
    "React",
  ],
  openGraph: {
    title: "EverLessTech",
    description:
      "We build fast, high-quality software — so you can focus on what matters.",
    url: "https://everlesstech.com",
    siteName: "EverLessTech",
    images: [
      {
        url: "/og/everlesstech-default.jpg",
        width: 1200,
        height: 630,
        alt: "EverLessTech branding card",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EverLessTech",
    description:
      "Modern web development & digital consulting with clarity and speed.",
    images: ["/og/everlesstech-default.jpg"],
    creator: "@everlesstech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  manifest: "/site.manifest",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen  flex flex-col [--header-height:_calc(var(--spacing)_*_16)]">
          {/* <Header
            className={`h-(--header-height) sticky z-[50]`} 
          /> */}
          <main className="flex-grow ">{children}</main>
          <Footer />
          <Analytics />
        </div>
      </body>
    </html>
  );
}
