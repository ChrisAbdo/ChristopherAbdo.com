export const pageVariants = {
  initial: {
    opacity: 1,
    y: "0%",
    backgroundColor: "black",
  },
  animate: {
    opacity: 1,
    y: "-100%",
    scale: 1.01,
    backgroundColor: "black",
    transition: {
      delay: 3.5,
      duration: 1.0,
    },
  },
  exit: {
    opacity: 0,
    y: "-100%",
    transition: {
      duration: 1,
    },
  },
};

export const textVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1,
    },
  },
};

export const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: any) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 2,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

export const AboutText = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
