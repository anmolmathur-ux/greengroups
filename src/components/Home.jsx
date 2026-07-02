import React from "react";
import Hero from "./Hero";
import Services from "./Services";
import About from "./About";
import Stats from "./Stats";
import Comments from "./Comments.jsx";

export default function Home() {
  return (
    <div className="w-full bg-gray-100 text-gray-900">
      <Hero />
      <Services />
      <About />
      <Stats />
      <Comments />
    </div>
  );
}