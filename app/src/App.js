import { Route, Routes, useLocation} from 'react-router-dom';
//Language manager
import { IntlProvider } from 'react-intl';
import translations from "./lang/translations.ts";
import theme from './styles/theme.ts';

import About from './screens/About.tsx';
import Career from './screens/Career.tsx';
import Screen from './screens/screen.tsx'
import React, {useEffect, useState} from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material';
import Projects from './screens/Projects.tsx';
import Skills from './screens/Skills.tsx';


function App() {
  const [locale, setLocale] = useState('fr'); // state for current locale
  const handleLanguageChange = (selectedLocale) => {
    setLocale(selectedLocale);
  };

  const messages = translations[locale];
  const location = useLocation();

  useEffect(() => {
    const routeName = getRouteName(location.pathname);
    document.title = routeName;
  }, [location]);

  // Fonction pour obtenir le nom de la route en fonction du chemin
  const getRouteName = (path) => {
    switch (path) {
      case '/about':
        return 'Emile Boulanger - About';
      case '/career':
        return 'Emile Boulanger - Career';
      case '/projects':
        return 'Emile Boulanger - Projects';
      case '/skills':
        return 'Emile Boulanger - Skills';
      case '/resume':
        return 'Emile Boulanger - Resume';
      default:
        return 'Emile Boulanger - About';
    }
  };
  

  return (
    <ThemeProvider theme={theme}>
      <IntlProvider locale={locale} messages={messages} defaultLocale='fr'>
        <div className='AppContainer'>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
          <Routes>
            <Route path="/" element={<Screen route="about" onLanguageChange={handleLanguageChange}><About/></Screen>} />
            <Route path="/about" element={<Screen route="about" onLanguageChange={handleLanguageChange}><About/></Screen>} />
            <Route path="/career" element={<Screen route="career" onLanguageChange={handleLanguageChange}><Career/></Screen>} />
            <Route path="/projects" element={<Screen route="projects" onLanguageChange={handleLanguageChange}><Projects/></Screen>} />
            <Route path="/skills" element={<Screen route="skills" onLanguageChange={handleLanguageChange}><Skills/></Screen>} />
            <Route path="/resume" element={<Screen route="resume" onLanguageChange={handleLanguageChange}><About/></Screen>} />
          </Routes>
        </div>
      </IntlProvider>
    </ThemeProvider>
    
  );
}
export default App;
