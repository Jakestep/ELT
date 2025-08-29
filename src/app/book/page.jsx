"use client";
import Script from "next/script";
import React from "react";

const BookingPage = () => {
  return (
    <div
      className={[
        "w-full",
        "md:min-h-[calc(100vh-var(--footer-height)-var(--header-height))] md:flex md:flex-col md:items-center",
      ].join(" ")}
    >
      {/* Intro: hidden on mobile, shown on md+ */}
      <div className="hidden md:block max-w-2xl mx-auto px-4 pb-0 pt-6 text-center">
        <h1 className="mb-2 text-2xl font-bold text-gray-900">
          Book a Free Consultation
        </h1>
        <p className="text-gray-700">
          Even if you just want to talk through ideas — no pressure, no hard sell.
        </p>
      </div>

      {/* Calendly embed */}
      <div className="w-full md:flex-1">
        <div
          className="calendly-inline-widget w-full"
          data-url="https://calendly.com/everlesstech/website-consultation"
          data-resize="true"
          style={{ minWidth: "320px", height: "750px" }} // fallback; auto-resize will override visually
        />
        <Script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        />
      </div>

    </div>
  );
};

export default BookingPage;
