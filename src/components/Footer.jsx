import Link from "next/link";
import SafeIcon from "../common/SafeIcon";
import ELTLogo from "@/common/ELTLogo";
import Socials from "@/common/Socials";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <ELTLogo
                className={`h-16 fill-white stroke-white`} 
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold">EverLessTech</span>
                <span className="text-xs text-gray-400">
                  Less tech, more life
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Professional software development and SEO services focused on
              quality, long-term value, and client success.
            </p>

            <Socials />
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Web Applications
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  API Development
                </Link>
              </li> */}
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  SEO Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Custom Software
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/portfolio"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li> */}
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm">
              <a className="flex items-center space-x-2" href="mailto:jake@everlesstech.com">
                <SafeIcon name="Mail" className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400">jake@everlesstech.com</span>
              </a>
              <div className="flex items-center space-x-2">
                <SafeIcon name="Phone" className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400">+1 (575) 520-4956</span>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon name="MapPin" className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400">Remote & On-site</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} EverLessTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
