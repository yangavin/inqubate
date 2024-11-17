import Navigation from "./Navigation";
import Image from "next/image";
import { profiles, ProfileCard } from "./Team";
import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { members } from "./index";
import { founders } from "./index";

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
      <Image
        src="red-gradient.svg"
        width={900}
        height={700}
        alt="red gradient"
        className="absolute -z-30 top-[800px] hidden md:block"
      />
      <Image
        src="blue-gradient.svg"
        width={1000}
        height={700}
        alt="blue gradient"
        className="absolute -z-30 right-0 top-0 hidden md:block"
      />

      <div className="px-4 md:px-16 lg:px-[24rem] flex flex-col align-items-start mt-8 md:mt-20">
        <h1 className="text-4xl md:text-6xl font-bold mx-auto md:ml-10 mb-4">
          Our Team
        </h1>
        <p className="text-sm md:text-base mb-6 md:mb-8 mx-auto md:ml-10 mt-4 md:mt-6 font-thin text-center md:text-left">
          Indulge in the ultimate expression of sophistication with Luxe
          Reserve, <br />
          where every sip embodies the essence of luxury. Indulge in the <br />
          ultimate expression of sophistication ..
        </p>
      </div>

      {/* Team Carousel Section */}
      <div className="mt-6">
        <div className="p-4 sm:p-8 mb-8 md:mb-16 text-center">
          <div className="flex items-center justify-center space-x-2 md:space-x-8">
            <button
              onClick={handlePrev}
              className="text-white bg-[#47545a] rounded-full p-1 md:p-2 hover:bg-gray-700 transition ease-in-out duration-300 hover:scale-110"
            >
              <ChevronLeftIcon className="w-4 h-4 md:w-6 md:h-6 text-white" />
            </button>

            <ProfileCard
              name={profiles[currentIndex].name}
              role={profiles[currentIndex].role}
              description={profiles[currentIndex].description}
              image={profiles[currentIndex].image}
            />

            <button
              onClick={handleNext}
              className="text-white bg-[#47545a] rounded-full p-1 md:p-2 hover:bg-gray-700 transition ease-in-out duration-300 hover:scale-110"
            >
              <ChevronRightIcon className="w-4 h-4 md:w-6 md:h-6 text-white" />
            </button>
          </div>

          {/* Team Members Section */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-8">
            {members.slice(0, 2).map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-white"
              >
                <img
                  src={member.image}
                  alt={`${member.name}'s profile`}
                  className="w-12 h-12 md:w-24 md:h-24 rounded-full object-cover border-2 border-white"
                />
                <span className="text-xs md:text-sm mt-2">{member.name}</span>
                <span className="text-xs">{member.role}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-center gap-y-8 md:gap-y-14 max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 md:gap-16 mt-6 md:mt-10">
              {members.slice(2).map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-white"
                >
                  <img
                    src={member.image}
                    alt={`${member.name}'s profile`}
                    className="w-12 h-12 md:w-24 md:h-24 rounded-full object-cover border-2 border-white"
                  />
                  <span className="text-xs md:text-sm mt-2">{member.name}</span>
                  <span className="text-xs">{member.role}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Founders Section */}
          <div className="flex flex-col justify-center gap-y-8 md:gap-y-14 max-w-4xl mx-auto mt-16 md:mt-36">
            <h2 className="text-xl md:text-2xl font-thin text-white mt-6 md:mt-10">
              FOUNDERS
            </h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-16">
              {founders.map((founder, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-white"
                >
                  <img
                    src={founder.image}
                    alt={`${founder.name}'s profile`}
                    className="w-12 h-12 md:w-24 md:h-24 rounded-full object-cover border-2 border-white"
                  />
                  <span className="text-xs md:text-sm mt-2">
                    {founder.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
