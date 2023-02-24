import { DiJavascript, DiMysql, DiGithubBadge, DiReact, DiSass, DiHtml5, DiBootstrap, DiCss3 } from 'react-icons/di';
import { getTransformStyle, itemAnimation, containerAnimation } from '../utils';
import { SmallTitle, Title } from './TitleVariants';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const techList = [
  { techName: 'HTML', techIcon: <DiHtml5 /> },
  { techName: 'Javascript', techIcon: <DiJavascript /> },
  { techName: 'CSS', techIcon: <DiCss3 /> },
  { techName: 'Sass', techIcon: <DiSass /> },
  { techName: 'Bootstrap', techIcon: <DiBootstrap /> },
  { techName: 'Github', techIcon: <DiGithubBadge /> },
  { techName: 'MySQL', techIcon: <DiMysql /> },
  { techName: 'React', techIcon: <DiReact /> },
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
