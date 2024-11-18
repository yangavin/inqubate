import Image from "next/image";
import Navigation from "../Navigation";
import React from "react";
import WideImageSlider from "../components/WideImageSlider";

const images = [
  "/images/inqubate_photo.png",
  "/images/image2.png",
  "/images/image4.png",
];

const StatCard = ({ number, text }) => {
  return (
    <div className="flex flex-col items-center justify-center aspect-square w-1/4 p-4 rounded-xl bg-[#BFBFBF33] hover:bg-[#BFBFBF1A]">
      <h3
        className={`${number.length > 4 ? "text-xl xl:text-xl 2xl:text-5xl" : "text-2xl xl:text-xl 2xl:text-7xl"}    font-bold text-white`}
      >
        {number}
      </h3>
      <p className="text-sm xl:text-md 2xl:text-lg text-white text-center">
        {text}
      </p>
    </div>
  );
};

export default function Team() {
  return (
    <div className="mb-36">
      {/* First Section */}
      <div className="mx-20 lg:mx-40 xl:mx-64 mt-40 mb-24 flex flex-row h-64">
        <div className="flex flex-col flex-1 justify-center h-full">
          <h1 className="font-bold text-6xl leading-snug">Who We Are</h1>
          <p>
            Indulge in the ultimate expression of sophistication with Luxe
            Reserve, where every sip embodies the essence of luxury. Indulge in
            the ultimate expression of sophistication with Luxe Reserve, where
            every sip embodies the essence of luxury.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center flex-1">
          <div className="relative aspect-square w-96 h-96">
            <Image
              src="/images/lightbulb.png"
              width={200}
              height={200}
              alt="Lightbulb"
              className="absolute right-16 top-16"
            />
            <Image
              src="/images/rocket.png"
              width={140}
              height={140}
              alt="Rocket"
              className="absolute left-24 bottom-24"
            />
            <Image
              src="blue-gradient.svg"
              width={331}
              height={209}
              alt="blue gradient"
              className="absolute -z-30 right-0 w-full aspect-[1.5837] top-20"
            />
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="mx-20 lg:mx-40 xl:mx-64 mb-64 flex flex-row">
        <div className="flex flex-row w-full gap-4 lg:gap-8">
          <StatCard
            number="57%"
            text="Indulge in the ultimate expression of sophistication"
          />
          <StatCard
            number="+10,000"
            text="Indulge in the ultimate expression of sophistication"
          />
          <StatCard
            number="23"
            text="Indulge in the ultimate expression of sophistication"
          />
          <StatCard
            number="+5"
            text="Indulge in the ultimate expression of sophistication"
          />
        </div>
      </div>

      {/* Third Section */}
      <div className="mx-20 lg:mx-40 xl:mx-64 mb-64 flex flex-row h-64">
        <div className="flex flex-col flex-1 justify-center h-full">
          <h1 className="text-[#C2C2C2] text-2xl mb-8">MISSION STATEMENT</h1>
          <p>
            Indulge in the ultimate expression of sophistication with Luxe
            Reserve, where every sip embodies the essence of luxury. Indulge in
            the ultimate expression of sophistication with Luxe Reserve, where
            every sip embodies the essence of luxury.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center flex-1">
          <Image
            src="/innovate-disrupt-collaborate.png"
            width={472}
            height={241}
            alt="Innovate"
            className="w-[80%]"
          />
        </div>
      </div>

      {/* Fourth Section */}
      <div className="mx-20 lg:mx-40 xl:mx-64 mb-20 h-64 flex flex-col">
        <h2 className="font-bold text-6xl leading-snug">History</h2>

        <div className="flex flex-row gap-16">
          <div className="flex flex-col">
            <h3 className="text-lg xl:text-xl 2xl:text-3xl text-[#C2C2C2] tracking-wider font-bold">
              2019
            </h3>
            <p className="leading-6 font-light">
              Indulge in the ultimate expression of sophistication with Luxe
              Reserve, where every sip embodies the essence of luxury.{" "}
            </p>
            <div className="flex justify-center">
              <svg width="2" height="280" xmlns="http://www.w3.org/2000/svg">
                <line
                  x1="1"
                  y1="0"
                  x2="1"
                  y2="280"
                  stroke="#585858"
                  strokeWidth="2"
                  strokeDasharray="32 8"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg xl:text-xl 2xl:text-3xl text-[#C2C2C2] tracking-wider font-bold">
              2020
            </h3>
            <p className="leading-6 font-light">
              Indulge in the ultimate expression of sophistication with Luxe
              Reserve, where every sip embodies the essence of luxury.{" "}
            </p>
            <div className="flex justify-center">
              <svg width="2" height="280" xmlns="http://www.w3.org/2000/svg">
                <line
                  x1="1"
                  y1="0"
                  x2="1"
                  y2="280"
                  stroke="#585858"
                  strokeWidth="2"
                  strokeDasharray="32 8"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg xl:text-xl 2xl:text-3xl text-[#C2C2C2] tracking-wider font-bold">
              2021
            </h3>
            <p className="leading-6 font-light">
              Indulge in the ultimate expression of sophistication with Luxe
              Reserve, where every sip embodies the essence of luxury.{" "}
            </p>
            <div className="flex justify-center">
              <svg width="2" height="400" xmlns="http://www.w3.org/2000/svg">
                <line
                  x1="1"
                  y1="0"
                  x2="1"
                  y2="400"
                  stroke="#585858"
                  strokeWidth="2"
                  strokeDasharray="32 8"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg xl:text-xl 2xl:text-3xl text-[#C2C2C2] tracking-wider font-bold">
              2023
            </h3>
            <p className="leading-6 font-light">
              Indulge in the ultimate expression of sophistication with Luxe
              Reserve, where every sip embodies the essence of luxury.{" "}
            </p>
            <div className="flex justify-center">
              <svg width="2" height="280" xmlns="http://www.w3.org/2000/svg">
                <line
                  x1="1"
                  y1="0"
                  x2="1"
                  y2="280"
                  stroke="#585858"
                  strokeWidth="2"
                  strokeDasharray="32 8"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[400px]">
        <Image
          src="/tube2.png"
          width={1000}
          height={400}
          alt="Tube graphic"
          className="w-full absolute -top-40"
        />
      </div>

      <div className="mx-20 lg:mx-40 xl:mx-64 mb-96 flex flex-col">
        <h2 className="text-7xl mb-8 text-[#C2C2C2] tracking-wider">
          2024 - 2025
        </h2>
        <p className="text-md">
          Indulge in the ultimate expression of sophistication with Luxe
          Reserve, where every sip embodies the essence of luxury. Indulge in
          the ultimate expression of sophistication with Luxe Reserve, where
          every sip embodies the essence of luxury.Indulge in the ultimate
          expression of sophistication with Luxe Reserve, where every sip
          embodies the essence of luxury. Indulge in the ultimate expression of
          sophistication with Luxe Reserve, where every sip embodies the essence
          of luxury. Beneath a canopy of shimmering stars, the small village of
          Elmsbrook seemed to hold its breath. The moonlight danced on the
          cobblestone streets, casting long, whimsical shadows that swayed with
          the gentle breeze. In the heart of th
        </p>
      </div>

      <div className="mx-20 lg:mx-40 xl:mx-64 mb-72 flex flex-col items-center justify-center">
        <h3 className="text-[#C2C2C2] text-2xl mb-8">PHOTO GALLERY</h3>
        <div className="w-full h-[500px]">
          <WideImageSlider images={images} />
        </div>
      </div>
    </div>
  );
}
