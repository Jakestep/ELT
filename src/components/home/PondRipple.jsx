"use client";

import React, { useEffect, useRef } from "react";
import $ from "jquery";
// import 'jquery.ripples'; // Import the plugin

const RippleBackground = ({ children }) => {
  const rippleRef = useRef(null);

  useEffect(() => {
    require("jquery.ripples");
    if (rippleRef.current) {
      // Initialize jquery.ripples on the ref's current DOM element
      $(rippleRef.current).ripples({
        resolution: 512,
        dropRadius: 5,
        perturbance: 0.001,
      });
    }

    // Cleanup function to destroy ripples when the component unmounts
    return () => {
      if (rippleRef.current) {
        $(rippleRef.current).ripples("destroy");
      }
    };
  }, []); // Empty dependency array ensures this runs once on mount and unmount

  return (
    <div
      ref={rippleRef}
      style={{
        width: "100%",
        height: "100vh",
        backgroundImage: "", // Set your background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: "url('blur-jason-pofahl-YU82HZASi6E-unsplash.webp')"
      }}
      className={`bg-[var(--thistle)]  relative`}
    >
        {children}
    </div>
  );
};

export default RippleBackground;
