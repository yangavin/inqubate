"use client";
import Landing from "./Landing";
import About from "./about";
import ContactUs from "./contact";
import Team from "./Team";
import Ventures from "./Ventures";

export default function Home() {
  return (
    <>
      <Landing />
      <About />
      <Ventures />
      <Team />
      <ContactUs />
    </>
  );
}
