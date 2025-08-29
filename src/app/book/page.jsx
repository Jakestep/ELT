"use client";
import Script from "next/script";
import React from "react";

const BookingPage = () => {
  return (
    <div className={`h-[calc(100vh-var(--footer-height)-var(--header-height))] flex flex-col items-center w-full`} >
      <div className={`w-full h-full`} >
        <div className="calendly-inline-widget" data-url="https://calendly.com/everlesstech/website-consultation" style={{minWidth: '320px', height: '100%'}}></div>
        <Script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></Script>
      </div>
    </div>
  )
};

export default BookingPage;
