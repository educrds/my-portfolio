import { FaSun, FaLink, FaGithub, FaRocketchat, FaCalculator, FaGamepad } from 'react-icons/fa';
import { RiNetflixFill } from 'react-icons/ri';
import { GiSnakeTongue } from 'react-icons/gi';
import { SmallTitle, Title } from './TitleVariants';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { containerAnimation, getTransformStyle, itemAnimation } from '../utils';
import Container from './Container';

const projects = [
  {
    title: 'Hangman Game',
    description:
      'Jogo da Forca recriado com JS, HTML, CSS e Bootstrap. Dê adeus ao chato e experimente essa nova versão.',
    icon: <FaGamepad />,
    techList: ['Bootstrap', 'JavaScript'],
    links: {
      github: 'https://github.com/educrds/HangMan-Game',
      project: 'https://educrds.github.io/HangMan-Game/',
    },
  },
  {
    title: 'Calculator',
    description: 'Calculadora criada com as principais operações matemáticas e raiz quadrada.',
    icon: <FaCalculator />,
    techList: ['React'],
    links: {
      github: 'https://github.com/educrds/Calculator',
      project: 'https://educrds.github.io/Calculator/',
    },
  },
  {
    title: 'Netflix',
    description:
      'Clone da Netflix com HTML, CSS e JS, usando a API MovieDB para buscar informações para exibição.',
    icon: <RiNetflixFill />,
    techList: ['JavaScript', 'MovieDB'],
    links: {
      github: 'https://github.com/educrds/netflix-clone',
      project: 'https://educrds.github.io/netflix-clone/',
    },
  },
  {
    title: 'BeZoo',
    description:
      'Projeto de uma landing page de um Zoológico feita para o projeto final de um Bootcamp.',
    icon: <GiSnakeTongue />,
    techList: ['Bootstrap', 'JavaScript'],
    links: {
      github: 'https://github.com/educrds/BeAcademy-Final-Project',
      project: 'https://educrds.github.io/BeAcademy-Final-Project/',
    },
  },

  {
    title: 'Chat App',
    description: 'Aplicativo de chat em tempo real utilizando Node e a biblioteca Socket.io.',
    icon: <FaRocketchat />,
    techList: ['Node', 'SocketIO'],
    links: {
      github:
        'https://github.com/educrds/The-Complete-Node.js-Developer-Course/tree/master/chat-app',
      project: 'http://node-chat-app.herokuapp.com/',
    },
  },
  {
    title: 'Weather App',
    description:
      'Aplicativo para visualizar indicadores do clima das cidades brasileiras, utilizando WeatherAPI.',
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
    <a href={links.project} target='_blank'>
      <FaLink />
    </a>
  </Container>
);

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section id='projects-section' ref={ref} style={getTransformStyle(isInView, '-200px')}>
      <Title text='Projetos' />
      <motion.div
        className='projects'
        variants={containerAnimation}
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}
      >
        <Item />
      </motion.div>
    </motion.section>
  );
}

export { Technologies };
