import { Route, Routes, useLocation} from 'react-router-dom';

import About from './screens/About.tsx';
import Career from './screens/Career.tsx';
import Screen from './screens/screen.tsx'
import React, {useEffect} from 'react';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material';


function App() {
  const location = useLocation();

  useEffect(() => {
    const routeName = getRouteName(location.pathname);
    document.title = routeName;
  }, [location]);

  // Fonction pour obtenir le nom de la route en fonction du chemin
  const getRouteName = (path) => {
    switch (path) {
      case '/about':
        return 'about';
      case '/career':
        return 'career';
      case '/projects':
        return "projects";
      case '/skills':
        return "skills";
      case '/resume':
        return "resume";
      default:
        return 'about';
    }
  };
  
const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(30, 56, 133)',
    },
    secondary: {
      main: 'rgba(255, 255, 255)',
    },
  },
});
  return (
    <ThemeProvider theme={theme}>
      <div className='AppContainer'>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
        <Routes>
          <Route path="/" element={<Screen route="about"><About/></Screen>} />
          <Route path="/about" element={<Screen route="about"><About/></Screen>} />
          <Route path="/career" element={<Screen route="career"><Career/></Screen>} />
          <Route path="/projects" element={<Screen route="projects"><About/></Screen>} />
          <Route path="/skills" element={<Screen route="skills"><About/></Screen>} />
          <Route path="/resume" element={<Screen route="resume"><About/></Screen>} />
      </Routes>
      </div>
    </ThemeProvider>
    
  );
}
export default App;
