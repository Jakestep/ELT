// components/SoftTimer.jsx
"use client";

import { useEffect, useRef, useState } from "react";

export default function SoftTimer({ startSeconds = 900 }) {
  const [seconds, setSeconds] = useState(startSeconds);
  const [pinned, setPinned] = useState(false);
  const anchorRef = useRef(null);

  // Countdown
  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  // Observe visibility of the top block to toggle the floating pill
  useEffect(() => {
    const el = anchorRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        // When the card is less than ~5% visible, show the pill
        setPinned(e.intersectionRatio < 0.05);
      },
      { threshold: [0, 0.05, 1] }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  return (
    <>
      {/* Anchor + main card */}
      <div ref={anchorRef} className="mb-6 rounded-2xl border border-primary-100 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-700">
            Suggested time: <span className="font-semibold">15 minutes</span>
          </p>
          <span
            className="font-mono text-lg tabular-nums"
            aria-live="polite"
            aria-atomic="true"
          >
            {mm}:{ss}
          </span>
        </div>
        <p className="mt-2 text-sm text-gray-600">
          This is just a recommendation—don’t stress. I want honest answers that help us get to what you really need.
          Feel free to take as much time as you like.
        </p>
      </div>

      {/* Floating pill */}
      <div
        aria-hidden={!pinned}
        className={[
          "pointer-events-none fixed inset-x-auto bottom-5 right-5 z-40 transition-opacity duration-200",
          pinned ? "opacity-100" : "opacity-0",
        ].join(" ")}
      >
        <div className="pointer-events-auto flex items-center gap-3 rounded-full border border-primary-100/60 bg-white/75 px-3 py-2 shadow-lg backdrop-blur supports-[backdrop-filter]:backdrop-blur-md">
          <span className="text-xs font-medium text-gray-700">Suggested time</span>
          <span
            className="font-mono text-base font-semibold tabular-nums text-[var(--primary)]"
            aria-live="polite"
            aria-atomic="true"
          >
            {mm}:{ss}
          </span>
        </div>
      </div>
    </>
  );
}
