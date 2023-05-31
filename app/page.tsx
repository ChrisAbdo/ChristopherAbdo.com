"use client";

import React from "react";

import About from "@/components/about";
import AnimatedIntro from "@/components/animated-intro";
import Navbar from "@/components/navbar";

import { VisibilityContext } from "@/context/visibility-context";

export default function Home() {
  const [isIntroFinished, setIntroFinished] = React.useState(false);

  return (
    <div className="bg-white h-screen">
      <VisibilityContext.Provider value={{ isIntroFinished, setIntroFinished }}>
        <AnimatedIntro />

        <Navbar />
        <About />
      </VisibilityContext.Provider>
    </div>
  );
}
