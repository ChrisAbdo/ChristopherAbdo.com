"use client";

import React from "react";
import { motion } from "framer-motion";
import { VisibilityContext } from "@/context/visibility-context";
import { pageVariants, textVariants, draw } from "@/lib/constants";

export default function AnimatedIntro() {
  // @ts-ignore
  const { setIntroFinished } = React.useContext(VisibilityContext);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIntroFinished(true);
    }, 4500); // Update this to match the total animation time

    return () => clearTimeout(timer);
  }, [setIntroFinished]);

  return (
    <motion.div
      className="space-y-6 h-screen w-screen fixed top-0 left-0 flex flex-col items-center justify-center z-50"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.h1
        className="text-white text-4xl md:text-6xl lg:text-8xl"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        Christopher Abdo
      </motion.h1>

      <motion.svg width="800" height="30" initial="hidden" animate="visible">
        <motion.line
          x1="400"
          y1="30"
          x2="0"
          y2="30"
          stroke="#fff"
          variants={draw}
          custom={2}
        />
        <motion.line
          x1="400"
          y1="30"
          x2="800"
          y2="30"
          stroke="#fff"
          variants={draw}
          custom={2}
        />
      </motion.svg>

      <motion.h2
        className="text-white text-2xl md:text-3xl lg:text-4xl"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        Software Engineer &amp; Designer
      </motion.h2>
    </motion.div>
  );
}
