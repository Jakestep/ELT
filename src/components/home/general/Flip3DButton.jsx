// app/components/Flip3DButton.jsx
"use client";

import React from "react";
import Link from "next/link";

/**
 * Flip3DButton
 *
 * Single-markup version that flips by toggling classes.
 * `reverse` swaps which label is shown by default and inverts transitions.
 * Keeping `frontClasses` on the full-face layer and `hoverClasses` on the split layers
 * preserves your original visual mapping.
 */
export default function Flip3DButton({
  href,
  frontLabel,
  hoverLabel,
  mobileLabel, // kept for API compatibility (unused here)
  frontClasses = "",
  hoverClasses = "",
  className = "",
  reverse = false,
  ...props
}) {
  // Labels swap when reversed
  const baseFaceLabel = reverse ? hoverLabel : frontLabel;
  const splitFacesLabel = reverse ? frontLabel : hoverLabel;
  const mobileText = mobileLabel ?? hoverLabel;
  const baseFaceStyle = reverse ? hoverClasses : frontClasses; // show hover styles on hover when reversed
  const splitFacesStyle = reverse ? frontClasses : hoverClasses;

  // Container
  const root = [
    "group relative mx-auto h-(--btn-height) w-(--btn-width) rounded-lg gap-2 overflow-clip px-8 py-4 text-nowrap",
    "[--btn-height:_calc(var(--spacing)_*_14)] [--btn-width:_calc(var(--spacing)_*_50)]",
    className,
  ].join(" ");

  // Full-size face (top layer)
  const baseFace = [
    "absolute top-0 left-0 flex h-(--btn-height) w-(--btn-width) items-center justify-center rounded-lg transition-all duration-250",
    reverse ? "opacity-0 group-hover:opacity-100" : "opacity-100 group-hover:opacity-0",
    baseFaceStyle,
  ].join(" ");

  // Top split face
  const topSplit = [
    "absolute left-0 flex h-[calc(var(--btn-height)_/_2)] w-(--btn-width) items-center justify-center overflow-clip rounded-b-lg transition-all duration-250",
    reverse
      ? "top-[calc(100%-(var(--btn-height)/2))] opacity-100 group-hover:top-[100%] group-hover:opacity-0"
      : "top-[100%] opacity-0 group-hover:top-[calc(100%-(var(--btn-height)/2))] group-hover:opacity-100",
    splitFacesStyle,
  ].join(" ");

  // Bottom split face
  const bottomSplit = [
    "absolute left-0 flex h-[calc(var(--btn-height)_/_2)] w-(--btn-width) items-center justify-center overflow-clip rounded-t-lg transition-all duration-250",
    reverse
      ? "bottom-[calc(100%-(var(--btn-height)/2))] opacity-100 group-hover:bottom-[100%] group-hover:opacity-0"
      : "bottom-[100%] opacity-0 group-hover:bottom-[calc(100%-(var(--btn-height)/2))] group-hover:opacity-100",
    splitFacesStyle,
  ].join(" ");

  return (
    <Link href={href} className={root} {...props}>
      {/* Full face */}
      <div className={baseFace}>
        {/* Desktop / hover-capable */}
        <p className="hidden not-pointer-coarse:block">{baseFaceLabel}</p>
        {/* Touch / coarse pointer */}
        <p className="hidden pointer-coarse:block">{mobileText}</p>
      </div>

      {/* Split faces */}
      <div className={topSplit}>
        {/* Desktop / hover-capable */}
        <p className="hidden not-pointer-coarse:flex relative -top-1/2 h-(--btn-height) items-center justify-center">
          {splitFacesLabel}
        </p>
        {/* Touch / coarse pointer */}
        <p className="hidden pointer-coarse:flex relative -top-1/2 h-(--btn-height) items-center justify-center">
          {mobileText}
        </p>
      </div>

      <div className={bottomSplit}>
        {/* Desktop / hover-capable */}
        <p className="hidden not-pointer-coarse:flex relative top-1/2 h-(--btn-height) items-center justify-center">
          {splitFacesLabel}
        </p>
        {/* Touch / coarse pointer */}
        <p className="hidden pointer-coarse:flex relative top-1/2 h-(--btn-height) items-center justify-center">
          {mobileText}
        </p>
      </div>
    </Link>
  );
}
