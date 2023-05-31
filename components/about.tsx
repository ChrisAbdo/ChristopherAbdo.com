"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { VisibilityContext } from "@/context/visibility-context";
import { AboutText } from "@/lib/constants";

export default function About() {
  // @ts-ignore
  const { isIntroFinished } = React.useContext(VisibilityContext);

  const { ref, inView } = useInView({
    triggerOnce: true, // Change it to false if you want the animation to happen every time the text comes into view
  });

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <motion.h2
          ref={ref}
          variants={AboutText}
          initial="hidden"
          animate={inView && isIntroFinished ? "show" : "hidden"}
          className="text-3xl tracking-tight text-gray-900 sm:text-4xl"
        >
          Christopher Abdo ~
          <br />
          Software Engineer &amp; Designer
        </motion.h2>
        <motion.div
          className="mt-10 tracking-tight text-2xl flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0"
          variants={AboutText}
          initial="hidden"
          animate={inView && isIntroFinished ? "show" : "hidden"}
        >
          Crafting beautiful experiences for the web ~ <br />
          Innovating at the intersection of design and tech ~ <br />
          Building the future of the internet.
        </motion.div>
      </div>
    </div>
  );
}
