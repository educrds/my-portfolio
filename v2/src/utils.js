const getTransformStyle = (isInView, px) => {
  return {
    transform: isInView ? 'none' : `translateX(${px})`,
    opacity: isInView ? 1 : 0,
    transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
  };
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

export { getTransformStyle, mainCardVariants };
