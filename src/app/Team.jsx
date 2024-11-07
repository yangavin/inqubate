import React, { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const ProfileCard = ({ name, role, description, image }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg sm:max-w-3xl mx-auto space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-[900px] h-auto sm:h-[300px]">
      <img
        src={image}
        alt={`${name}'s profile`}
        className="w-32 h-32 sm:w-64 sm:h-64 rounded-lg object-cover"
      />
      <div className="flex flex-col justify-between text-left h-full w-full sm:w-[400px]">
        <h2 className="text-xl sm:text-3xl font-bold text-white">{name}</h2>
        <h3 className="text-md sm:text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-500">
          {role}
        </h3>
        <p className="text-white text-sm mt-2 flex-grow overflow-hidden sm:line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
};

const TeamSection = () => {
  const profiles = [
    {
      name: "Daniel Wang",
      role: "Co-chair",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, optio voluptatem. Iste repellendus assumenda, perspiciatis a dolor ea laudantium. Omnis eaque eveniet explicabo beatae enim vel consequatur quae nesciunt odit!",
      image: "https://avatarfiles.alphacoders.com/364/364814.jpg",
    },
    {
      name: "Joseph Liao",
      role: "Director of Marketing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam modi delectus ab nostrum, quis minus dignissimos voluptatum mollitia accusantium, eum aperiam accusamus officia dolorem eaque obcaecati similique inventore. Illum rerum ullam a dicta, adipisci distinctio amet enim asperiores.",
      image: "https://avatarfiles.alphacoders.com/364/364731.png",
    },
    {
      name: "Sarah Lee",
      role: "Product Manager",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione maiores tenetur necessitatibus explicabo, blanditiis ipsam soluta vel. Architecto, ea saepe repellat libero autem totam voluptate maiores ducimus facere, corrupti voluptatum porro id. Distinctio, quidem aliquam?",
      image: "https://avatarfiles.alphacoders.com/365/365483.png",
    },
    {
      name: "Tom Green",
      role: "Lead Developer",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla maiores ipsam ipsum vel consequuntur praesentium fugiat repellendus aperiam provident aliquam, eum asperiores velit rem aspernatur! Corrupti, quibusdam error. Nemo exercitationem aliquam minima, similique, consequatur omnis sed ipsa sunt sint magnam dolorum repudiandae aspernatur.",
      image: "https://avatarfiles.alphacoders.com/364/364764.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < 0 || currentIndex >= profiles.length) {
      setCurrentIndex(0);
    }
  }, [currentIndex, profiles.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? profiles.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === profiles.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <div className="p-4 sm:p-8 mb-16 text-center">
      <div className="flex items-center justify-center space-x-4 sm:space-x-8">
        <button
          onClick={handlePrev}
          className="text-white bg-[#47545a] rounded-full p-2 hover:bg-gray-700 transition ease-in-out duration-300 hover:scale-110"
        >
          <ChevronLeftIcon className="w-6 h-6 text-white" />
        </button>

        <ProfileCard
          name={profiles[currentIndex].name}
          role={profiles[currentIndex].role}
          description={profiles[currentIndex].description}
          image={profiles[currentIndex].image}
        />

        <button
          onClick={handleNext}
          className="text-white bg-[#47545a] rounded-full p-2 hover:bg-gray-700 transition ease-in-out duration-300 hover:scale-110"
        >
          <ChevronRightIcon className="w-6 h-6 text-white" />
        </button>
      </div>

      <div className="flex justify-center space-x-4 sm:space-x-8 mt-8">
        {profiles.map((profile, index) => (
          <div key={index} className="flex flex-col items-center text-white">
            <img
              src={profile.image}
              alt={`${profile.name}'s profile`}
              className={`w-16 h-16 sm:w-24 sm:h-24 rounded-full object-cover ${
                index === currentIndex ? "border-2 border-white" : ""
              }`}
            />
            <span className="text-xs sm:text-sm mt-2">{profile.name}</span>
            <span className="text-xs">{profile.role}</span>
          </div>
        ))}
      </div>

      <button
        className="mt-8 px-4 py-3 text-white border border-white rounded-lg bg-transparent hover:bg-white/30 transition ease-in-out duration-300"
        style={{ width: "200px", height: "54px" }}
      >
        See All
      </button>
    </div>
  );
};

export default function Team() {
  return (
    <div className="relative">
      <div className="mx-4 sm:ml-64 sm:w-1/2">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4" id="contact">
          inQUbate Team
        </h1>
        <p className="mb-8">
          Indulge in the ultimate expression of sophistication with Luxe
          Reserve, where every sip embodies the essence of luxury.
        </p>
      </div>

      <div className="rounded-ss-lg bg-blue">
        <TeamSection />
      </div>
    </div>
  );
}
