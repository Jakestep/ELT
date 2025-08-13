"use client";

import SafeIcon from "@/common/SafeIcon";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const MotionLink = motion.create(Link);

export default function AnimatedSwapButton({
  href,
  defaultText,
  hoverText,
  defaultClasses,
  hoverClasses,
  iconName,
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative mx-3 h-14 min-w-[14rem]" // ← adds horizontal spacing
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence initial={false} mode="popLayout">
        {!hovered ? (
          <MotionLink
            key="default"
            href={href}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={`absolute inset-0 inline-flex items-center justify-center rounded-lg px-8 py-4 text-lg font-medium ${defaultClasses}`}
          >
            {defaultText}
            {iconName && <SafeIcon name={iconName} className="ml-2 h-5 w-5" />}
          </MotionLink>
        ) : (
          <MotionLink
            key="hovered"
            href={href}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={`absolute inset-0 inline-flex items-center justify-center rounded-lg px-8 py-4 text-lg font-medium ${hoverClasses}`}
          >
            {hoverText}
            {iconName && <SafeIcon name={iconName} className="ml-2 h-5 w-5" />}
          </MotionLink>
        )}
      </AnimatePresence>
    </div>
  );
}
