import { DiJavascript, DiReact, DiSass, DiBootstrap, DiAngularSimple   } from 'react-icons/di';
import { FaDatabase } from "react-icons/fa";
import { SiTypescript, SiNodedotjs  } from "react-icons/si";
import { getTransformStyle, itemAnimation, containerAnimation } from '../utils';
import { SmallTitle, Title } from './TitleVariants';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const techList = [
  { techName: 'Typescript', techIcon: <SiTypescript /> },
  { techName: 'Angular', techIcon: <DiAngularSimple /> },
  { techName: 'Javascript', techIcon: <DiJavascript /> },
  { techName: 'React', techIcon: <DiReact /> },
  { techName: 'NodeJs', techIcon: <SiNodedotjs  /> },
  { techName: 'Sass', techIcon: <DiSass /> },
  { techName: 'Bootstrap', techIcon: <DiBootstrap /> },
  { techName: 'SQL', techIcon: <FaDatabase /> },
];

const TechSkills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section id='skills-section' ref={ref} style={getTransformStyle(isInView, '200px')}>
      <Title text='Tech Skills' />
      <TechList isInView={isInView} />
    </motion.section>
  );
};

const TechList = ({ isInView }) => {
  return (
    <motion.div
      className='tech-list'
      variants={containerAnimation}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
    >
      {techList.map(({ techName, techIcon }, i) => (
        <motion.div key={i} className={techName} variants={itemAnimation}>
          {techIcon}
          <SmallTitle content={techName} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TechSkills;
