import Image from "next/image";
import Tube from "./Tube";
import Slider from "./Slider";

export default function Landing() {
  return (
    <div className="mb-36">
      <Tube />
      <Image
        src="red-gradient.svg"
        width={900}
        height={700}
        alt="red gradient"
        className="absolute -z-30 top-0"
      />
      <Image
        src="blue-gradient.svg"
        width={1000}
        height={700}
        alt="blue gradient"
        className="absolute -z-30 right-0 top-0"
      />
      <div className="flex h-[80vh] items-center justify-around">
        <div className="animate-fade-in">
          <h1 className="font-bold text-6xl w-96 leading-snug">
            Queen&apos;s <br /> #1 Incubator
          </h1>
          <p>🚀 Innovate, Collaborate, & Succeed</p>
        </div>

        <div className="grow-1 flex flex-col gap-16">
          <Image
            className="animate-fade-in"
            src="innovate-disrupt-create.svg"
            width={500}
            height={500}
            alt="INNOVATE DISRUPT CREATE"
          />
        </div>
      </div>
      <div>
        <h1 className="text-center text-stone-300 text-2xl font-thin tracking-widest mb-8 mt-16">
          PAST PARTNERS AND SPONSORS
        </h1>
        <Slider />
      </div>
    </div>
  );
}
