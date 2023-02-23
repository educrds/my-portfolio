import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SmallTitle, Title } from './TitleVariants';
import { DiJavascript, DiMysql, DiGithubBadge, DiReact, DiSass, DiHtml5, DiBootstrap, DiCss3 } from 'react-icons/di';
import Container from './Container';
import { getTransformStyle } from '../utils';

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
      <TechList />
    </motion.section>
  );
};

const TechList = () => {
  return (
    <Container className='tech-list'>
      {techList.map(({ techName, techIcon }, i) => (
        <Container key={i} className={techName}>
          {techIcon}
          <SmallTitle content={techName} />
        </Container>
      ))}
    </Container>
  );
};

export default TechSkills;
