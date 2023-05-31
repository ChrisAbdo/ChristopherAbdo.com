import React from "react";

import Image from "next/image";
import { VisibilityContext } from "@/context/visibility-context";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { AboutText } from "@/lib/constants";

const projects = [
  {
    id: 1,
    title: "Eternalog",
    description: "An experimental thought manager for the web.",
    image: "/eternalog.jpeg",
    href: "https://www.eternalog.com",
  },
  {
    id: 2,
    title: "PDF Summary",
    description: "A simple PDF viewer for the web.",
    image: "/pdf.jpeg",
    href: "https://www.pdf.eternalog.com",
  },
  {
    id: 3,
    title: "Etherwav",
    description: "An experimental thought manager for the web.",
    image: "/etherwav.jpeg",
    href: "https://www.eternalog.com",
  },
  {
    id: 4,
    title: "Commend",
    description: "An experimental thought manager for the web.",
    image: "/commend.jpeg",
    href: "https://www.eternalog.com",
  },
  {
    id: 5,
    title: "Grammarscore AI",
    description: "An experimental thought manager for the web.",
    image: "/grammar.jpeg",
    href: "https://www.eternalog.com",
  },
  {
    id: 6,
    title: "SmoothTalker",
    description: "A simple PDF viewer for the web.",
    image: "/smooth.jpeg",
    href: "https://www.pdf.eternalog.com",
  },
  {
    id: 7,
    title: "Soulmates",
    description: "An experimental thought manager for the web.",
    image: "/soulmates.jpeg",
    href: "https://www.eternalog.com",
  },
  {
    id: 8,
    title: "MovieGPT",
    description: "An experimental thought manager for the web.",
    image: "/moviegpt.jpeg",
    href: "https://www.eternalog.com",
  },
  {
    id: 9,
    title: "DeStemr",
    description: "An experimental thought manager for the web.",
    image: "/destemr.jpeg",
    href: "https://www.eternalog.com",
  },
  {
    id: 10,
    title: "Bookmarks",
    description: "An experimental thought manager for the web.",
    image: "/bookmarks.jpeg",
    href: "https://www.eternalog.com",
  },
];

function ProjectItem({ project, isIntroFinished, variants }: any) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Change it to false if you want the animation to happen every time the text comes into view
  });

  return (
    <motion.div
      className="group mb-6"
      key={project.id}
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView && isIntroFinished ? "show" : "hidden"}
    >
      <Image
        src={project.image}
        alt=""
        width={700}
        height={500}
        className="transition-transform duration-300 transform group-hover:scale-95"
      />
      <a
        href="#"
        className="text-xl font-bold group-hover:before:scale-x-100 group-hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-black before:absolute before:left-0 before:bottom-0 "
      >
        {project.title}
      </a>
      <p className="text-gray-500 text-sm">{project.description}</p>
    </motion.div>
  );
}

export default function Layout() {
  // @ts-ignore
  const { isIntroFinished } = React.useContext(VisibilityContext);

  const [refs] = React.useState([]);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="p-5 sm:p-8">
          <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-2 lg:columns-2 [&>img:not(:first-child)]:mt-8">
            {projects.map((project) => (
              <ProjectItem
                key={project.id}
                project={project}
                isIntroFinished={isIntroFinished}
                variants={AboutText}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
