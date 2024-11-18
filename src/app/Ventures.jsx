import React from "react";
import Button from "./components/button";
import "tailwindcss/tailwind.css";

// Define the Ventures data
export const Ventures = [
  {
    name: "Speakease",
    description:
      "Indulge in the ultimate expression of sophistication with Luxe Reserve, where every sip embodies the essence of luxury.",
    image: "/ventures/speakease.png",
  },
  {
    name: "Tutor AI",
    description:
      "Indulge in the ultimate expression of sophistication with Luxe Reserve, where every sip embodies the essence of luxury.",
    image: "/ventures/tutor-ai.png",
  },
];

// Create the Ventures component
const VenturesComponent = () => {
  return (
    <div className="relative -top-36 mx-12 text-center min-h-screen text-white ">      
      {/* Title Section */}
      <h1 className="text-5xl sm:text-6xl font-bold mb-12">Ventures</h1>
      <p className="mb-10 text-center max-w-xl mx-auto leading-relaxed pb-24">
        Indulge in the ultimate expression of sophistication with Luxe Reserve, 
        where every sip embodies the essence of luxury.
      </p>
      {/* Render Ventures */}
      <div className="flex justify-center gap-24 mt-20">
        {Ventures.map((venture, index) => (
          <div
            key={index}
            className="w-[500px] h-[500px] p-20 rounded-[20px] bg-white/20 backdrop-blur-sm shadow-lg overflow-visible"
          >
            {/* Image */}
            <div className="absolute object-fill -top-32 left-1/2 transform -translate-x-1/2 overflow-visible">
              <img
                src={venture.image}
                alt={venture.name}
                className="w-auto h-auto max-w-[500px] sm:max-w-[500px] object-contain"
              />
            </div>

            {/* Venture Name */}
            <h2 className="pb-5 mt-32 text-2xl md:text-3xl font-bold mb-2 text-white">
              {venture.name}
            </h2>

            {/* Venture Description */}
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              {venture.description}
            </p>

            {/* Button */}
            <button
        className="mt-8 px-4 text-white border border-white rounded-lg bg-transparent hover:bg-white/30 transition ease-in-out duration-300"
        style={{ width: "200px", height: "54px" }}
      >
        Learn More
      </button>
          </div>
        ))}
      </div>
      <h1 className="text-center text-stone-300 text-2xl font-thin tracking-widest mb-8 mt-16">
          CHECK OUT 10+ UNIQUE VENTURES:
      </h1>
      <button
      className="text-white px-6 py-3 rounded-lg bg-gradient-to-r from-[#3F99BA] to-[#8132B1] shadow-[0_0_15px_rgba(129,50,177,0.6)] hover:shadow-[0_0_25px_rgba(129,50,177,0.8)] transition ease-in-out duration-300"
      style={{ width: "200px",  height: "54px" }}
    >
      Explore More
    </button>
    </div>
  );
};

export default VenturesComponent;
