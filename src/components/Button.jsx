import { motion } from 'framer-motion';

const Button = ({ content, variants, ...others }) => {
  return (
    <a {...others}>
      <motion.button
        variants={variants}
        whileHover={{ scale: [null, 1, 1.3] }}
        transition={{ duration: 0.25 }}
      >
        {content}
      </motion.button>
    </a>
  );
};

export default Button;
