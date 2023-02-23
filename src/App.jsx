import './styles/css/style.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Experience from './components/Experience';
import TechList from './components/TechList';
import Contact from './components/Contact';
import { ThemeContext } from './contexts/theme-context';
import { useState } from 'react';
import Footer from './components/Footer';

const App = () => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme}`}>
        <div className='wrapper'>
          <Navbar />
          <Main />
          <About />
          <TechList />
          <Projects />
          <Services />
          <Experience />
          <Contact />
          <Footer />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
