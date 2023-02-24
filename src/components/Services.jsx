import Container from './Container';
import Square from './Square';
import { Title } from './TitleVariants';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { containerAnimation, getTransformStyle, itemAnimation } from '../utils';

const servicesList = [
  {
    image: 'https://cdn-icons-png.flaticon.com/64/2621/2621260.png',
    title: 'UX/UI Designer',
    content:
      'Criação de wireframes e protótipos, além de colaborar na criação de interfaces de usuário.',
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/64/2621/2621189.png',
    title: 'Front-End',
    content:
      'Desenvolvimento de interfaces de usuário responsivas e atraentes para diversos dispositivos.    ',
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section ref={ref} style={getTransformStyle(isInView, '200px')}>
      <Title text='Serviços' />
      <motion.div
        className='services'
        variants={containerAnimation}
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}
      >
        {servicesList.map(service => <Square key={service.title} {...service} variants={itemAnimation} />)}
      </motion.div>
    </motion.section>
  );
};

export default Services;
