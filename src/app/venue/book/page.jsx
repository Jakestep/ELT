"use client";
import Script from "next/script";
import React from "react";

const BookingPage = () => {
  return (
    <div className={`h-full bg-green-300`} >
      <div className="calendly-inline-widget" data-url="https://calendly.com/everlesstech/website-consultation" style={{minWidth: '320px', height: '100%'}}></div>
      <Script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></Script>
    </div>
  )
};

export default BookingPage;
