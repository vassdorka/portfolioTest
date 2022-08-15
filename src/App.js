import { useState } from 'react'
import Home from './components/Home';
import About from './components/About';
import './App.css';
import References from './components/References';
import Contact from './components/Contact';
import { BsExclamationSquareFill } from 'react-icons/bs';

function App() {
  const [activeNav, setActiveNav] = useState('');

  const personData = {
    name: 'Janette Doe',
    profession: 'Working Lady',
    introduction: 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. ETIAM ELEIFEND IACULIS FEUGIAT. PROI LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. ETIAM ELEIFEND IACULIS FEUGIAT. PROIN PHARETRA MASSA TURPIS, ET SODALES LACUS TEMPUS A. UT VITAE MASSA A ANTE FERMENTUM LAOREET. AENEAN CONDIMENTUM PURUS IN MAGNA TINCIDUNT SODALES. DONEC AC VIVERRA ELIT. NULLAM PULVINAR MI EU ERAT GRAVIDA PORTA. CURABITUR SCELERISQUE NEC URNA VITAE AUCTOR. MAECENAS PLACERAT, RISUS VITAE PLACERAT LOBORTIS. MASSA TURPIS, ET SODALES LACUS TEMPUS A. UT VITAE MASSA A ANTE FERMENTUM LAOREET. AENEAN CONDIMENTUM PURUS IN MAGNA TINCIDUNT SODALES. DONEC AC VIVERRA ELIT. NULLAM PULVINAR MI EU ERAT GRAVIDA PORTA NIBH NEQUE FACILISIS ORCI, EU CONSECTETUR LIGULA RISUS VEL ENIM. DONEC PORTTITOR CONVALLIS DUI, AC LOBORTIS METUS LAOREET AC. DONEC SIT AMET ODIO VITAE EST BIBENDUM VENENATIS SIT AMET BLANDIT SEM. IN BLANDIT PURUS AC BLANDIT MAXIMUS. VESTIBULUM ET COMMODO LOREM.',
    socialContacts: [
      {
      platform: '@FACEBOOK.COM/LOREMIPSUM',
      },
      {
        platform: '@INSTAGRAM.COM/LOREMIPSUM',
      },
      {
        platform: '@LINKEDIN.COM/LOREMIPSUM',
      },
      {
        platform: '@BEHANCE.COM/LOREMIPSUM',
      },
    ]
  }

  const setHomeActive = () => {
    setActiveNav('home');
    letsScroll(0);
  }
  const setAboutActive = () => {
    setActiveNav('about');
    letsScroll(720);
  }
  const setRefActive = () => {
    setActiveNav('ref');
    letsScroll(1440);
  }
  const setContactActive = () => {
    setActiveNav('contact');
    letsScroll(2160);
  }

  const letsScroll = (y) => {
    window.scrollTo({
      top: y,
      behavior: 'smooth',
  });
  }

  const changeActiveNavOnScroll = () => {
    if(window.scrollY >= 0 && 600 >= window.scrollY) {
      setActiveNav('home');
    } else if(window.scrollY > 600  && 1320 >= window.scrollY) {
      setActiveNav('about');
    } else if(window.scrollY > 1320  && 2040 >= window.scrollY) {
      setActiveNav('ref');
    } else if(window.scrollY > 2040) {
      setActiveNav('contact');
    }
  }

  window.addEventListener('scroll', changeActiveNavOnScroll);

  return (
    <div className="App">
      <div className='nav'>
        <div className={activeNav === 'home' ? 'navHomeActive' : 'navHome'} onClick={setHomeActive}></div>
        <div className={activeNav === 'about' ? 'navAboutActive' : 'navHome'} onClick={setAboutActive}></div>
        <div className={activeNav === 'ref' ? 'navRefActive' : 'navHome'} onClick={setRefActive}></div>
        <div className={activeNav === 'contact' ? 'navContactActive' : 'navHome'} onClick={setContactActive}></div>
      </div>
      <Home personData = {personData}/>
      <About personData = {personData}/>
      <References />
      <Contact personData = {personData}/>
    </div>
  );
}

export default App;
