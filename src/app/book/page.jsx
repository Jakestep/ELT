"use client";
import Script from "next/script";
import React from "react";

const BookingPage = () => {
  return (
    <>
      <div className="calendly-inline-widget" data-url="https://calendly.com/everlesstech/website-consultation" style={{minWidth: '320px', height: '700px'}}></div>
      <Script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></Script>
    </>
  )
};

export default BookingPage;
