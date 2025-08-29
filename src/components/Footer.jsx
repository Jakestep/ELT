import Link from "next/link";
import SafeIcon from "../common/SafeIcon";
import ELTLogo from "@/common/ELTLogo";
import Socials from "@/common/Socials";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white h-(--footer-height) overflow-clip p-2">
      <div className="flex items-center w-full h-full justify-around flex-col sm:flex-row">
          {/* Company Info */}
        <div className="col-span-1 scale-75 sm:scale-100">
          <Link href="/" className="flex items-center space-x-2">
            <ELTLogo className={`h-12 fill-white stroke-white`} />
            <div className="flex flex-col">
              <span className="text-lg font-bold">EverLessTech</span>
              <span className="text-xs text-gray-400">
                Less tech, more life
              </span>
            </div>
          </Link>
        </div>
        <div className="text-center text-xs sm:text-sm text-gray-400">
          <p>&copy; {currentYear} EverLessTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
