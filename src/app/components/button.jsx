"use client"; // Add this line at the top

import React from "react";

const Button = () => {
  return (
    <a href="/WhoWeAre">
      <button
        className="text-white border border-white rounded-lg bg-transparent hover:bg-white/30 transition ease-in-out duration-300 w-40 h-12"
      >
        Explore More
      </button>
    </a>
  );
};

export default Button;
