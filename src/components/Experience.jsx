import Container from './Container';
import { SmallTitle, Title } from './TitleVariants';
import { TbCertificate } from 'react-icons/tb';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { containerAnimation, getTransformStyle, itemAnimation } from '../utils';
import { Technologies } from './Projects';

const experienceList = [
  {
    period: 'Janeiro - 2023',
    title: 'Front-End JavaScript Junior',
    resources: ['CSS', 'MySQL', 'HTML', 'JavaScript'],
    link: 'https://i.postimg.cc/yx18k6TY/Eduardo-Cardoso-Barbosa.png',
  },
  {
    period: 'Janeiro - 2023',
    title: 'Node.js Developer Course',
    resources: ['Node', 'MongoDB', 'SocketIO', 'Express', 'REST API'],
    link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-f1ce6acc-4bb5-4791-ad44-4877e578d5a1.jpg?v=1672840221000',
  },
  {
    period: 'Novembro - 2022',
    title: 'Orange Tech +',
    resources: ['React', 'Typescript', 'HTML'],
    link: 'https://hermes.digitalinnovation.one/certificates/B1AC8419.pdf',
  },
  {
    period: 'Outubro - 2022',
    title: 'Web Development Bootcamp',
    resources: ['Express', 'Bootstrap', 'MySQL', 'React', 'MongoDB', 'Node'],
    link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-1ad50437-35ce-4b4d-b4ae-4de6a852764b.jpg?v=1666789196000',
  },
  {
    period: 'Outubro - 2022',
    title: 'SQL Bootcamp: Go from Zero to Hero',
    resources: ['MySQL', 'PostgreSQL'],
    link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-2cf5b2c5-d13c-4fad-a3a2-2cb337b9e750.jpg?v=1664136644000',
  },
  {
    period: 'Outubro - 2022',
    title: 'Google UX Design',
    resources: ['UI/UX designer', 'Interaction designer', 'Visual designer'],
    link: 'https://i.postimg.cc/D0wj45jM/Certificado-Profissionalde-UXDesigndo-Google.png',
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section id='experience-section' ref={ref} style={getTransformStyle(isInView, '-200px')}>
      <Title text='Experiência' />
      <motion.div
        className='experience'
        variants={containerAnimation}
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}
      >
        <ExperienceList />
      </motion.div>
    </motion.section>
  );
};

const ExperienceList = () => (
  <>
    <motion.div className='square' variants={itemAnimation}>
      {experienceList.slice(0, 3).map((experience, i) => (
        <ExpInfo key={i} {...experience} />
      ))}
    </motion.div>
    <motion.div className='square' variants={itemAnimation}>
      {experienceList.slice(-3).map((experience, i) => (
        <ExpInfo key={i} {...experience} />
      ))}
    </motion.div>
  </>
);

const ExpInfo = ({ period, title, resources, link }) => (
  <div className='column'>
    <div className='icon'>
      <TbCertificate />
      <div className='line'></div>
    </div>
    <div className='infos'>
      <SmallTitle content={period} />
      <a href={link} target='_blank'>
        <Title text={title} />
      </a>
      <Technologies techList={resources} />
    </div>
  </div>
);

export default Experience;
