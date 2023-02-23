import { motion, useInView } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import { MdError } from 'react-icons/md';
import { useState, useRef, useEffect } from 'react';
import { SmallTitle, Title } from './TitleVariants';
import Button from './Button';
import Container from './Container';
import emailjs from '@emailjs/browser';
import { getTransformStyle } from '../utils';

const apiKey = import.meta.env.VITE_API_KEY;

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [validateMessage, setValidateMessage] = useState(null);
  const [email, setEmail] = useState({name: '', email: '', subject: '', message: '' });

  useEffect(() => {
    if (validateMessage && validateMessage.type === 'success') {
      const timer = setTimeout(() => {
        setValidateMessage(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [validateMessage]);

  const handleSubmit = e => {
    e.preventDefault();

    // Verifica se todos os campos foram preenchidos
    if (Object.values(email).some(value => value === '')) {
      return setValidateMessage({ type: 'error', content: 'Por favor, preencha todos os campos.' });
    }

    // Verifica se o formato do email está correto
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.email)) {
      return setValidateMessage({ type: 'error', content: 'Por favor, insira um email válido.' });
    }

    // Envia o email
    emailjs.send('service_tmp127n', 'template_xtuqxuo', email, apiKey).then(
      () => {
        setValidateMessage({ type: 'success', content: 'Email enviado com sucesso!' });
        setEmail({ name: '', email: '', subject: '', message: '' });
      },
      () => setValidateMessage({ type: 'error', content: 'Ocorreu um erro ao enviar o email.' })
    );
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setEmail({ ...email, [name]: value });
  };

  return (
    <motion.section id='contact-section' ref={ref} style={getTransformStyle(isInView, '200px')}>
      <Title text='Contato' />
      <Container className='contact'>
        <Header />
        <Container className='form'>
          {validateMessage && <Message message={validateMessage} />}
          <form onSubmit={handleSubmit}>
            <Container className='form-row'>
              <Input
                name='name'
                placeholder='Nome'
                onChange={handleChange}
                value={email.name}
              />
              <Input
                name='email'
                placeholder='Email'
                onChange={handleChange}
                value={email.email}
              />
            </Container>
            <Container>
              <Input
                name='subject'
                placeholder='Assunto'
                onChange={handleChange}
                value={email.subject}
              />
            </Container>
            <Container>
              <textarea
                rows='3'
                name='message'
                placeholder='Mensagem'
                onChange={handleChange}
                value={email.message}
              ></textarea>
            </Container>
            <Button content='Enviar mensagem' />
          </form>
        </Container>
      </Container>
    </motion.section>
  );
};

const Header = () => {
  return (
    <Container>
      <h3>Let's talk?</h3>
      <p>
        Não curte formulários? Envie-me um <a href='mailto:eduardocardoso1039@gmail.com'>email</a>.
      </p>
    </Container>
  );
};

const Message = ({ message }) => {
  const [isSuccessfull, setIsSuccessfull] = useState(message.type === 'success');

  useEffect(() => {
    setIsSuccessfull(message.type === 'success');
  }, [message]);

  return (
    <Container className={`message ${isSuccessfull ? 'isSuccessfull' : ''}`}>
      {isSuccessfull ? <FaCheckCircle /> : <MdError />}
      <SmallTitle content={message.content} />
    </Container>
  );
};

const Input = ({ placeholder, ...others }) => (
  <input type='text' placeholder={placeholder} {...others} />
);

export default Contact;
