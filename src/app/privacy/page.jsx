"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Privacy() {
  const router = useRouter();

  const [hasHistory, setHasHistory] = useState(false);

  useEffect(() => {
    // If user came from another page in this session, `document.referrer` will be set
    if (document.referrer && document.referrer !== window.location.href) {
      setHasHistory(true);
    }
  }, []);

  const handleClick = () => {
    if (hasHistory) {
      router.back();
    } else {
      router.push("/"); // fallback to home
    }
  };

  return (
    <main className="mx-auto mt-1 max-w-2xl bg-white px-4 py-8 shadow sm:mt-8 sm:rounded-lg sm:px-6 sm:py-10">
      <h1 className="text-primary-700 mb-1 text-2xl font-semibold sm:text-3xl">
        Privacy Policy
      </h1>
      <p className="mb-6 text-xs text-gray-500 sm:text-sm">
        Effective Date: August 9, 2025
      </p>

      <p className="mb-6 text-base leading-relaxed text-gray-700 sm:text-lg">
        We keep things simple. Here’s the short version of how we treat your
        information:
      </p>

      <ul className="list-inside list-disc space-y-2 text-sm leading-relaxed text-gray-700 sm:text-base">
        <li>Nothing crazy.</li>
        <li>
          When you fill out the forms, we collect what you type in (like your
          name, email, and website, etc) so we can connect with you.
        </li>
        <li>
          We use tools like Supabase, SendFox, and Resend to store and send
          things. They help us run the site but don’t own your info.
        </li>
        <li>
          We’ll send an invite to your email to join Jake’s newsletter. You
          don’t have to join if you don’t want to.
        </li>
        <li>You can unsubscribe from emails any time.</li>
        <li>We will never sell your data. That would be messed up.</li>
        <li>
          We use Google PageSpeed Insights to check websites. That means Google
          sees the site link you gave us — but not your personal info.
        </li>
      </ul>

      <p className="mt-6 text-sm leading-relaxed text-gray-700 sm:text-base">
        Questions or requests about your data? Email{" "}
        <a
          href="mailto:jake@everlesstech.com"
          className="text-primary-600 hover:text-primary-700 underline"
        >
          jake@everlesstech.com
        </a>
        .
      </p>

      <button
        onClick={handleClick}
        className="bg-primary-500 hover:bg-primary-600 mt-8 w-full rounded px-5 py-3 text-sm text-white sm:w-auto sm:text-base"
      >
        {hasHistory ? "Go Back" : "Go Home"}
      </button>
    </main>
  );
}
