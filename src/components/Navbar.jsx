import { RiMoonFill, RiSunLine } from 'react-icons/ri';
import { useState, useContext } from 'react';
import { TbMenu2 } from 'react-icons/tb';
import { Title } from './TitleVariants';
import Container from './Container';
import List from './List';
import { ThemeContext } from '../contexts/theme-context';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const navItems = [
    { href: '#about-section', content: 'Sobre' },
    { href: '#skills-section', content: 'Skills' },
    { href: '#projects-section', content: 'Projetos' },
    { href: '#experience-section', content: 'Experiência' },
    { href: '#contact-section', content: 'Contato' },
  ];

  const handleThemeChange = () => {
    const isCurrentDark = theme === 'dark';
    setTheme(isCurrentDark ? 'light' : 'dark');
  };

  const toggleNavElements = () => setIsOpen(!isOpen);

  return (
    <nav>
      <Container className='container'>
        <NavBrand />
        <NavbarToggle isOpen={isOpen} toggleNavElements={toggleNavElements} />
        <NavElements isOpen={isOpen} navItems={navItems} theme={theme} handleThemeChange={handleThemeChange} toggleNavElements={toggleNavElements}
        />
      </Container>
    </nav>
  );
}

const NavBrand = () => (
  <Container>
    <Title text='Edu_' />
  </Container>
);

const NavbarToggle = ({ isOpen, toggleNavElements }) => (
  <div className='navbar-toggle' onClick={toggleNavElements}>
    <TbMenu2 className={`${isOpen && 'active'}`} />
  </div>
);

const NavElements = ({ isOpen, navItems, theme, handleThemeChange, toggleNavElements }) => (
  <Container className={`nav-elements ${isOpen && 'active'}`}>
    <ul>
      {navItems.map((item, i) => (
        <List key={i} {...item} onClick={toggleNavElements} />
      ))}
      <List
        className='toggle-button'
        content={theme === 'dark' ? <RiSunLine /> : <RiMoonFill />}
        onClick={handleThemeChange}
      />
    </ul>
  </Container>
);

export default Navbar;
