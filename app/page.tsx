"use client";

import React from "react";

import About from "@/components/about";
import AnimatedIntro from "@/components/animated-intro";
import Navbar from "@/components/navbar";

import { VisibilityContext } from "@/context/visibility-context";
import Layout from "@/components/project-layout/layout";

export default function Home() {
  const [isIntroFinished, setIntroFinished] = React.useState(false);

  return (
    <div className="bg-white h-screen">
      <VisibilityContext.Provider value={{ isIntroFinished, setIntroFinished }}>
        <AnimatedIntro />

        <Navbar />
        <About />
        <Layout />
      </VisibilityContext.Provider>
    </div>
  );
}
