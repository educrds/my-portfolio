import { Title, SmallTitle } from './TitleVariants';
import Photo from './Photo';
import Button from './Button';
import Container from './Container';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ProgressBar from './ProgressBar';
import { getTransformStyle } from '../utils';
import curriculum from '../assets/imgs/CV-Eduardo Cardoso.pdf';

const skillsPercentage = [
  {
    content: 'Front-End',
    percentage: 65,
  },
  {
    content: 'UX/UI Design',
    percentage: 45,
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <motion.section id='about-section' ref={ref} style={getTransformStyle(isInView, '-200px')}>
        <Title text='Sobre mim' />
        <Container className='about'>
          <Container>
            <Photo className='photo' />
          </Container>
          <Container className='summary'>
            <Summary />
            <Skills />
          </Container>
        </Container>
      </motion.section>
    </>
  );
};

const Summary = () => (
  <Container>
    <SmallTitle content='Desenvolvedor front-end React com experiência em criar interfaces de usuário responsivas e acessíveis e atualizado com as últimas tendências de design e desenvolvimento front-end.' />
    <Button content='Baixar CV' href={curriculum} target='_blank' />
  </Container>
);

const Skills = () => (
  <Container className='skills'>
    {skillsPercentage.map((all, i) => (
      <ProgressBar key={i} {...all} />
    ))}
  </Container>
);

export default About;
