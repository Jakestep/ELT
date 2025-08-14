"use client";
import Script from "next/script";
import React from "react";

const BookingPage = () => {
  return (
    <>
      <div class="meetings-iframe-container" data-src="https://meetings-na2.hubspot.com/jacob-estep?embed=true"></div>
      <Script type="text/javascript" src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"></Script>
    </>
  )
};

export default BookingPage;
