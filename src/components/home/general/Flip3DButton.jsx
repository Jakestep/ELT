"use client";

import React from "react";
import Link from "next/link";

// // Wrap Next.js Link via motion.create
// const MotionLink = motion.create(Link);

export default function Flip3DButton({
  href,
  frontLabel,
  hoverLabel,
  frontClasses,
  hoverClasses,
  reverse = false,
  ...props
}) {
  if (reverse) {
    return (
      <Link
        href={href}
        className="group relative mx-auto h-(--btn-height) w-(--btn-width) rounded-lg gap-2 overflow-clip px-8 py-4 text-nowrap [--btn-height:_calc(var(--spacing)_*_14)] [--btn-width:_calc(var(--spacing)_*_50)]"
        {...props}
      >
        {/* First face */}
        <div
          className={`absolute top-0 left-0 flex h-(--btn-height) w-(--btn-width) items-center justify-center rounded-lg opacity-0 transition-all duration-250 group-hover:opacity-100 ${frontClasses} `}
        >
          {hoverLabel}
        </div>

        {/* Hover faces */}
        <div
          className={`absolute top-[calc(100%-(var(--btn-height)/2))] left-0 flex h-[calc(var(--btn-height)_/_2)] w-(--btn-width) items-center justify-center overflow-clip rounded-b-lg opacity-100 transition-all duration-250 group-hover:top-[100%] group-hover:opacity-0 ${hoverClasses}`}
        >
          <p
            className={`relative -top-1/2 flex h-(--btn-height) items-center justify-center`}
          >
            {frontLabel}
          </p>
        </div>

        <div
          className={`absolute bottom-[calc(100%-(var(--btn-height)/2))] left-0 flex h-[calc(var(--btn-height)_/_2)] w-(--btn-width) items-center justify-center overflow-clip rounded-t-lg opacity-100 transition-all duration-250 group-hover:bottom-[100%] group-hover:opacity-0 ${hoverClasses}`}
        >
          <p
            className={`relative top-1/2 flex h-(--btn-height) items-center justify-center`}
          >
            {frontLabel}
          </p>
        </div>
      </Link>
    );
  }
  return (
    <Link
      href={href}
      className="group relative mx-auto h-(--btn-height) rounded-lg  w-(--btn-width) gap-2 overflow-clip px-8 py-4 text-nowrap [--btn-height:_calc(var(--spacing)_*_14)] [--btn-width:_calc(var(--spacing)_*_50)]"
    >
      {/* First face */}
      <div
        className={`absolute top-0 left-0 flex h-(--btn-height) w-(--btn-width) items-center justify-center rounded-t-lg rounded-b-lg opacity-100 transition-all duration-250 group-hover:opacity-0 ${frontClasses} `}
      >
        {frontLabel}
      </div>

      {/* Hover faces */}
      <div
        className={`absolute top-[100%] left-0 flex h-[calc(var(--btn-height)_/_2)] w-(--btn-width) items-center justify-center overflow-clip rounded-b-lg opacity-0 transition-all duration-250 group-hover:top-[calc(100%-(var(--btn-height)/2))] group-hover:opacity-100 ${hoverClasses}`}
      >
        <p
          className={`relative -top-1/2 flex h-(--btn-height) items-center justify-center`}
        >
          {hoverLabel}
        </p>
      </div>

      <div
        className={`absolute bottom-[100%] left-0 flex h-[calc(var(--btn-height)_/_2)] w-(--btn-width) items-center justify-center overflow-clip rounded-t-lg opacity-0 transition-all duration-250 group-hover:bottom-[calc(100%-(var(--btn-height)/2))] group-hover:opacity-100 ${hoverClasses}`}
      >
        <p
          className={`relative top-1/2 flex h-(--btn-height) items-center justify-center`}
        >
          {hoverLabel}
        </p>
      </div>
    </Link>
  );
}
