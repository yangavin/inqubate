import Navigation from "./Navigation";
import Image from "next/image";
import { profiles, ProfileCard } from "./Team";
import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export default function TeamPage() {
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
    <div className="mb-36">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="landing-morph-lines.svg"
        alt="webs"
        className="-z-50 absolute w-full"
      />
      <nav className="px-48 py-6 flex bg-none">
        <Image
          src="inqubate.svg"
          alt="inqubate"
          width={250}
          height={250}
          className=""
        />
        <div className="grow flex gap-5 justify-center">
          <Navigation href="#home">Home</Navigation>
          <Navigation href="#about">Who we are</Navigation>
          <Navigation href="#about">Ventures</Navigation>
          <Navigation href="#contact">Blog</Navigation>
        </div>
        <a
          href="#contact"
          className="w-48 rounded-md text-center px-6 py-4 bg-gradient-to-r from-red-500 to-pink-700 shadow-[2px_5px_20px_grey] hover:-translate-y-1 transition-transform"
        >
          Contact Us
        </a>
      </nav>

      <Image
        src="red-gradient.svg"
        width={900}
        height={700}
        alt="red gradient"
        className="absolute -z-30 top-[800px]"
      />
      <Image
        src="blue-gradient.svg"
        width={1000}
        height={700}
        alt="blue gradient"
        className="absolute -z-30 right-0 top-0"
      />

      <div className="flex flex-col ml-80 mt-20">
        <h1 className="text-6xl font-bold ml-10 mb-4">Our Team</h1>
        <p className="mb-8 ml-10 mt-6 font-thin">
          Indulge in the ultimate expression of sophistication with Luxe
          Reserve, <br />
          where every sip embodies the essence of luxury. Indulge in the <br />
          ultimate expression of sophistication ..
        </p>
      </div>

      <div className="mt-6">
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
              <div
                key={index}
                className="flex flex-col items-center text-white"
              >
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
        </div>
      </div>
    </div>
  );
}
