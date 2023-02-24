import { SmallTitle, Title } from './TitleVariants';
import { motion } from 'framer-motion';

const Square = ({ title, content, image, variants }) => {
  return (
    <motion.div variants={variants}>
      <img src={image} />
      <Title text={title} />
      <SmallTitle content={content} />
    </motion.div>
  );
};
export default Square;
