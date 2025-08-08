import Link from "next/link";
import SafeIcon from "../common/SafeIcon";
import ELTLogo from "@/common/ELTLogo";
import Socials from "@/common/Socials";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-around flex-wrap">
          {/* Company Info */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <ELTLogo
                className={`h-12 fill-white stroke-white`} 
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold">EverLessTech</span>
                <span className="text-xs text-gray-400">
                  Less tech, more life
                </span>
              </div>
            </Link>
          </div>
          <div className="text-center text-sm text-gray-400">
            <p>&copy; {currentYear} EverLessTech. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
