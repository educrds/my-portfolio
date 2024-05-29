import { Title, SmallTitle } from './TitleVariants';
import Photo from './Photo';
import Button from './Button';
import Container from './Container';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ProgressBar from './ProgressBar';
import { getTransformStyle } from '../utils';
import curriculum from '../assets/imgs/CV - Eduardo Cardoso.pdf';

const skillsPercentage = [
  {
    content: 'Front-End',
    percentage: 80,
  },
  {
    content: 'UX/UI Design',
    percentage: 45,
  },
  {
    content: 'Back-End',
    percentage: 25,
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
    <SmallTitle
      content='Desenvolvedor front-end criativo e motivado, especializado em Angular, com experiência na criação de
interfaces de usuário dinâmicas e responsivas. Comprometido com a excelência e a melhoria contínua, com
habilidades comprovadas em trabalhar tanto individualmente quanto em equipe.
'
    />
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
