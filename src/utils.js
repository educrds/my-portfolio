const getTransformStyle = (isInView, px) => {
  return {
    transform: isInView ? 'none' : `translateX(${px})`,
    opacity: isInView ? 1 : 0,
    transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
  };
};

const containerAnimation = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.4,
    },
  },
};

const itemAnimation = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const buttonTransition = {
  delay: 0.5,
  x: { duration: 1 },
  default: { ease: "linear" }
};

const mainCardVariants = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
  transition: {
    default: {
      duration: 0.3,
      ease: [0, 0.71, 0.2, 1.01],
    },
    scale: {
      type: 'spring',
      damping: 5,
      stiffness: 100,
      restDelta: 0.001,
    },
  },
};

export { getTransformStyle, mainCardVariants, containerAnimation, itemAnimation, buttonTransition };
