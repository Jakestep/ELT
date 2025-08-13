"use client";

import React, { useEffect, useRef } from "react";
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
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      // const isTouch = "ontouchstart" in window;
      // const isLowRes = window.innerWidth < 480;
      // const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);

      // return prefersReducedMotion || isTouch || isLowRes || isMobile;
      return prefersReducedMotion;
    };

    if (shouldDisableRipples()) {
      return;
    }

    // Safe import after verifying conditions
    require("jquery.ripples");

    const isMobile = window.innerWidth < 640;
    const res = isMobile ? 256 : 512;
    // const res = 512;

    $el.ripples({
      resolution: res,
      dropRadius: 20,
      perturbance: 0.03,
      interactive: false,
    });
    // Manually handle soft taps
    if (isMobile) {
      $el.on("touchstart", (e) => {
        const touch = e.touches[0]; // first finger
        const rect = $el[0].getBoundingClientRect();
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;

        $el.ripples("drop", x, y, 20, 0.05); // controlled softness
      });
    } else {
      $el.on("mousemove", (e) => {
        const rect = $el[0].getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        $el.ripples("drop", x, y, 20, 0.004); // controlled softness
      });

      $el.on("mousedown", (e) => {
        const rect = $el[0].getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        $el.ripples("drop", x, y, 20, 0.05); // controlled softness
      });
    }

    const drop = () => {
      const x = Math.random() * $el.width();
      const y = Math.random() * $el.height();
      $el.ripples("drop", x, y, 20, 0.04);
    };

    setTimeout(() => {
      drop();
    }, 1500);
    let intervalId = setInterval(drop, isMobile ? 5000 : 7500);

    // Pause/resume logic
    const handleVisibilityChange = () => {
      if (document.hidden) {
        $el.ripples("pause");
        clearInterval(intervalId);
      } else {
        $el.ripples("play");
        intervalId = setInterval(drop, isMobile ? 5000 : 7500);
      }
    };

    function handleBlur() {
      $el.ripples("pause");
      clearInterval(intervalId);
    }

    function handleFocus() {
      $el.ripples("play");
      intervalId = setInterval(drop, isMobile ? 5000 : 7500);
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);

    return () => {
      if ($el.data("ripples")) {
        $el.ripples("destroy");
      }
      clearInterval(intervalId);
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
