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
}) {

    if (reverse) {
        return (
          <Link
            href={href}
            className="text-nowrap relative mx-auto gap-2 px-8 py-4 w-(--btn-width) group h-(--btn-height) overflow-clip [--btn-height:_calc(var(--spacing)_*_14)] [--btn-width:_calc(var(--spacing)_*_50)]"
          >
            {/* First face */}
            <div
              className={`group-hover:opacity-100 opacity-0 duration-250 transition-all absolute top-0 left-0 rounded-lg flex items-center justify-center h-(--btn-height) w-(--btn-width) ${frontClasses} `}
            >
              {hoverLabel}
            </div>
      
            {/* Hover faces */}
            <div
              className={`top-[calc(100%-(var(--btn-height)/2))] duration-250 opacity-100 group-hover:opacity-0 transition-all absolute group-hover:top-[100%] left-0 rounded-b-lg flex items-center overflow-clip justify-center h-[calc(var(--btn-height)_/_2)] w-(--btn-width) ${hoverClasses}`}
            >
              <p
                className={`h-(--btn-height) relative -top-1/2 flex items-center justify-center`}
              >
                {frontLabel}
              </p>
            </div>
      
            <div
              className={`bottom-[calc(100%-(var(--btn-height)/2))] duration-250 opacity-100 group-hover:opacity-0 transition-all absolute group-hover:bottom-[100%] left-0 rounded-t-lg flex items-center overflow-clip justify-center h-[calc(var(--btn-height)_/_2)] w-(--btn-width) ${hoverClasses}`}
            >
              <p
                className={`h-(--btn-height) relative top-1/2 flex items-center justify-center`}
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
            className="text-nowrap relative mx-auto gap-2 px-8 py-4 w-(--btn-width) group h-(--btn-height) overflow-clip [--btn-height:_calc(var(--spacing)_*_14)] [--btn-width:_calc(var(--spacing)_*_50)]"
        >
            {/* First face */}
            <div
            className={`opacity-100 group-hover:opacity-0 duration-250 transition-all absolute top-0 left-0 rounded-lg flex items-center justify-center h-(--btn-height) w-(--btn-width) ${frontClasses} `}
            >
            {frontLabel}
            </div>

            {/* Hover faces */}
            <div
            className={`group-hover:top-[calc(100%-(var(--btn-height)/2))] duration-250 group-hover:opacity-100 opacity-0 transition-all absolute top-[100%] left-0 rounded-b-lg flex items-center overflow-clip justify-center h-[calc(var(--btn-height)_/_2)] w-(--btn-width) ${hoverClasses}`}
            >
            <p
                className={`h-(--btn-height) relative -top-1/2 flex items-center justify-center`}
            >
                {hoverLabel}
            </p>
            </div>

            <div
            className={`group-hover:bottom-[calc(100%-(var(--btn-height)/2))] duration-250 group-hover:opacity-100 opacity-0 transition-all absolute bottom-[100%] left-0 rounded-t-lg flex items-center overflow-clip justify-center h-[calc(var(--btn-height)_/_2)] w-(--btn-width) ${hoverClasses}`}
            >
            <p
                className={`h-(--btn-height) relative top-1/2 flex items-center justify-center`}
            >
                {hoverLabel}
            </p>
            </div>
        </Link>
        );
}
