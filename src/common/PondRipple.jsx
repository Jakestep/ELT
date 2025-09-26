"use client";

import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import { usePathname } from "next/navigation";

const RippleBackground = ({ children, className, background }) => {
  if (!background) {
    background = { backgroundImage: "var(--main-background)" };
  }

  const rippleRef = useRef(null);

  const pathname = usePathname();

  useEffect(() => {
    const el = rippleRef.current;

    if (!el) return;

    // Optional: check if background is missing or corrupted
    const style = getComputedStyle(el);
    const hasBg = style.backgroundImage && style.backgroundImage !== "none";

    if (!hasBg) {
      el.style.backgroundImage =
        background.backgroundImage || "var(--main-background)";
      // el.style.backgroundSize = "cover";
      // el.style.backgroundPosition = "center";
      el.style.backgroundColor = "transparent";
      el.className = `relative w-full h-full bg-transparent z-[10] bg-cover bg-center ${className}`;
    }
  }, [pathname]);

  useEffect(() => {
    const $el = $(rippleRef.current);

    const shouldDisableRipples = () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      return prefersReducedMotion;
    };

    if (shouldDisableRipples() || !$el[0]) return;

    // Safe import after verifying conditions
    require("jquery.ripples");

    const isMobile = window.innerWidth < 640;
    const tooBig = window.innerWidth > 1950;
    let res = 512;
    if (isMobile) {res = 128}
    const drop_radius = isMobile ? 20 : 20;
    const touch_perturbance = isMobile ? 0.05 : 0.05
    $el.ripples({
      resolution: res,
      dropRadius: drop_radius,
      perturbance: touch_perturbance,
      interactive: false,
    });

    // User interactions
    if (isMobile) {
      $el.on("touchstart", (e) => {
        const touch = e.touches[0];
        const rect = $el[0].getBoundingClientRect();
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;
        $el.ripples("drop", x, y, drop_radius, touch_perturbance);
      });
    }
    else {
      // if (!tooBig) {
      //   $el.on("mousemove", (e) => {
      //     const rect = $el[0].getBoundingClientRect();
      //     const x = e.clientX - rect.left;
      //     const y = e.clientY - rect.top;
      //     $el.ripples("drop", x, y, drop_radius, 0.004);
      //   });
      // }
      $el.on("mousedown", (e) => {
        const rect = $el[0].getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        $el.ripples("drop", x, y, drop_radius, touch_perturbance);
      });
    }

    // Controlled random drops
    const drop = () => {
      const x = Math.random() * $el.width();
      const y = Math.random() * $el.height();
      $el.ripples("drop", x, y, drop_radius, 0.04);
    };

    let intervalId = null;
    const startDrops = () => {
      if (intervalId != null) return;
      intervalId = setInterval(drop, isMobile ? 4000 : 4000);
      try { $el.ripples("play"); } catch {}
    };
    const stopDrops = () => {
      if (intervalId != null) {
        clearInterval(intervalId);
        intervalId = null;
      }
      try { $el.ripples("pause"); } catch {}
    };

    // Kickoff
    const startAfter = setTimeout(() => {
      drop();
      startDrops();
    }, 500);

    // Page Visibility (real backgrounding)
    const handleVisibilityChange = () => {
      if (document.hidden) stopDrops();
      else startDrops();
    };

    const stopAutoDrops = () => {
      if (intervalId != null) {
        clearInterval(intervalId);
        intervalId = null;
      }
    }
    const startAutoDrops = () => {
      startDrops();
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("blur", stopAutoDrops);
    window.addEventListener("focus", startAutoDrops);

    // Optional: pause when scrolled off-screen (perf win)
    let io;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          const visible = entries[0]?.isIntersecting;
          if (visible && !document.hidden) startDrops();
          else stopDrops();
        },
        { root: null, threshold: 0.01 }
      );
      io.observe($el[0]);
    }

    // iOS Safari lifecycle quirks
    const onPageHide = () => stopDrops();
    const onPageShow = () => { if (!document.hidden) startDrops(); };
    window.addEventListener("pagehide", onPageHide);
    window.addEventListener("pageshow", onPageShow);

    return () => {
      clearTimeout(startAfter);
      stopDrops();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.addEventListener("blur", stopAutoDrops);
      window.addEventListener("focus", startAutoDrops);
      window.removeEventListener("pagehide", onPageHide);
      window.removeEventListener("pageshow", onPageShow);
      if (io) io.disconnect();
      $el.off("touchstart mousemove mousedown");
      if ($el.data("ripples")) $el.ripples("destroy");
    };
  }, []);

  return (
    <div
      className={`relative z-[10] h-full w-full bg-transparent bg-cover bg-center ${className}`}
      ref={rippleRef}
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "transparent",
        ...background,
      }}
    >
      <div
        className={`absolute inset-0 z-[-1] bg-cover bg-center ${className}`}
        style={{ ...background }}
      />
      <div className="relative z-10">{children}</div>
      <p className={`absolute right-1 bottom-1 text-sm invert md:text-base`}>
        Photo by{" "}
        <a
          target="_blank"
          className={`italic`}
          href="https://unsplash.com/@jasonpofahlphotography?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
        >
          Jason Pofahl
        </a>{" "}
        on{" "}
        <a
          target="_blank"
          className={`italic`}
          href="https://unsplash.com/photos/brown-rocky-mountain-under-white-cloudy-sky-during-daytime-YU82HZASi6E?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
        >
          Unsplash
        </a>
      </p>
    </div>
  );
};

export default RippleBackground;
