import Navigation from "./Navigation";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="px-4 md:px-8 lg:px-48 py-4 md:py-6 flex flex-col md:flex-row items-center gap-4 bg-none">
      <Image
        src="inqubate.svg"
        alt="inqubate"
        width={250}
        height={250}
        className=""
      />
      <div className="flex flex-col md:flex-row gap-4 md:gap-5 justify-center grow">
        <Navigation href="/#home">Home</Navigation>
        <Navigation href="/WhoWeAre">Who we are</Navigation>
        <Navigation href="/TeamPage">Team</Navigation>
      </div>
      <a
        href="#contact"
        className="w-full md:w-48 rounded-md text-center px-4 py-3 md:px-6 md:py-4 bg-gradient-to-r from-red-500 to-pink-700 shadow-lg hover:-translate-y-1 transition-transform"
      >
        Contact Us
      </a>
    </nav>
  );
}
