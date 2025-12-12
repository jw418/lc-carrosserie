"use client";
import React, { useState, useEffect } from "react";

export default function GoTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <>
        {/* <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-5 z-50 p-3 bg-green-500 text-white  text-xl font-extrabold rounded-full cursor-pointer hover:bg-green-600 transition duration-300 ease-in-out"
          aria-label="Go to top"
        >
          ↑
        </button> */}

        <button
          onClick={scrollToTop}
          className="fixed bottom-36 right-5 z-50 inline-block rounded-full bg-blue-600 p-2 text-white shadow transition hover:bg-blue-500 sm:p-3 lg:p-4"
        >
          <span className="sr-only">Back to top</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </>
    )
  );
}
