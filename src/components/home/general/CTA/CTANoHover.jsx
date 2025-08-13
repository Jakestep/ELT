import Link from "next/link";
import React from "react";

const CTANoHover = () => {
  return (
    <div
      className={`flex w-full flex-col items-center justify-center gap-8 sm:w-fit sm:flex-row`}
    >
      <Link
        href="/contact"
        className="bg-accent-600 flex h-14 w-50 items-center justify-center rounded-md p-2 text-xl text-white"
      >
        Start Your Project
      </Link>
      <Link
        href="/about"
        className="bg-accent-400 flex h-14 w-50 items-center justify-center rounded-md p-2 text-xl text-white"
      >
        Who Are We?
      </Link>
    </div>
  );
};

export default CTANoHover;
