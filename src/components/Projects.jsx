import { FaSun, FaLink, FaGithub, FaRocketchat, FaCalculator, FaGamepad } from 'react-icons/fa';
import { RiCoinsFill } from 'react-icons/ri';
import { GiSnakeTongue } from 'react-icons/gi';
import { SmallTitle, Title } from './TitleVariants';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { containerAnimation, getTransformStyle, itemAnimation } from '../utils';
import Container from './Container';

const projects = [
  {
    title: 'Coinz',
    description: 'Aplicação para controle de gastos mensais. A ideia surgiu da dificuldade em usar planilhas complexas e confusas para controlar as finanças, levando-me a buscar uma solução mais intuitiva e eficiente para facilitar o acompanhamento e a gestão dos gastos.',
    icon: <RiCoinsFill />,
    techList: ['Em andamento','Angular', 'Typescript'],
    links: {
      github: 'https://github.com/educrds/finance-app',
    },
  },
  {
    title: 'Hangman Game',
    description: 'Jogo da Forca recriado com JS, HTML, CSS e Bootstrap. Dê adeus ao chato e experimente essa nova versão.',
    icon: <FaGamepad />,
    techList: ['Bootstrap', 'JavaScript'],
    links: {
      github: 'https://github.com/educrds/HangMan-Game',
      project: 'https://educrds.github.io/HangMan-Game/',
    },
  },
  {
    title: 'BeZoo',
    description: 'Projeto de uma landing page de um Zoológico feita para o projeto final de um Bootcamp.',
    icon: <GiSnakeTongue />,
    techList: ['Bootstrap', 'JavaScript'],
    links: {
      github: 'https://github.com/educrds/BeAcademy-Final-Project',
      project: 'https://educrds.github.io/BeAcademy-Final-Project/',
    },
  },
  {
    title: 'Weather App',
    description: 'Aplicativo para visualizar indicadores do clima das cidades brasileiras, utilizando WeatherAPI.',
    icon: <FaSun />,
    techList: ['React', 'Styled-Components'],
    links: {
      github: 'https://github.com/educrds/react-weather-app',
      project: 'https://educrds.github.io/react-weather-app/',
    },
  },
];

const Item = () =>
  projects.map(({ icon, title, techList, description, links }, i) => (
    <motion.div key={i} variants={itemAnimation}>
      <ProjectTitle icon={icon} title={title} />
      <Technologies techList={techList} />
      <ProjectDescription description={description} />
      <ProjectLinks links={links} />
    </motion.div>
  ));

const ProjectTitle = ({ title, icon }) => (
  <Container className='title'>
    {icon}
    <Title text={title} />
  </Container>
);

const Technologies = ({ techList }) => (
  <Container className='technologies'>
    {techList.map((tech, i) => (
      <Container className={`item ${tech}`} key={i}>
        <SmallTitle content={tech} />
      </Container>
    ))}
  </Container>
);

const ProjectDescription = ({ description }) => (
  <Container className='description'>
    <SmallTitle content={description} />
  </Container>
);

const ProjectLinks = ({ links }) => (
  <Container className='links'>
    <a href={links.github} target='_blank'>
      <FaGithub />
    </a>
    {links.project && (
      <a href={links.project} target='_blank'>
        <FaLink />
      </a>
    )}
  </Container>
);

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section id='projects-section' ref={ref} style={getTransformStyle(isInView, '-200px')}>
      <Title text='Projetos' />
      <motion.div className='projects' variants={containerAnimation} initial='hidden' animate={isInView ? 'visible' : 'hidden'}>
        <Item />
      </motion.div>
    </motion.section>
  );
}

export { Technologies };
