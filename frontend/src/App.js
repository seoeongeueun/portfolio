import { useSelector } from 'react-redux';
import { useRef, useEffect, useState } from 'react';
import HomeContainer from './containers/HomeContainer';
import ProjectsContainer from './containers/ProjectsContainer';
import ProjectsContainer2 from './containers/ProjectsContainer2';
import AboutContainer from './containers/AboutContainer';
import Other from './pages/Other';
import Contact from './pages/Contact';
import { setMenu, setMove } from './modules/menu.js';

function App() {
  useEffect(() => {
    setMove(false);
    setMenu(null);
  }, []);
  
  return (
      <HomeContainer/>
  );
}

export default App;
