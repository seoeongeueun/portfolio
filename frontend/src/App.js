import { useSelector } from 'react-redux';
import { useRef, useEffect, useState } from 'react';
import HomeContainer from './containers/HomeContainer';
import About from './pages/About';
import ProjectsContainer from './containers/ProjectsContainer';
import ProjectsContainer2 from './containers/ProjectsContainer2';
import Other from './pages/Other';
import Contact from './pages/Contact';

function App() {
  const { menu, move } = useSelector(state => ({
    menu: state.menus.menu,
    move: state.menus.move
  }));
  const [lang, setLang] = useState('English');

  const outerRef = useRef();

    useEffect(() => {
      if (move){
        const wheelHandler = (e) => {
            e.preventDefault();
            const { deltaY } = e;
            const { scrollTop } = outerRef.current;
            const pageHeight = window.innerHeight;
            if (deltaY > 0) {
                outerRef.current?.scrollTo({
                    top: pageHeight * (Math.floor(scrollTop / pageHeight) + 1),
                    behavior: "smooth",
                });
            } else {
                outerRef.current?.scrollTo({
                    top: pageHeight * (Math.floor(scrollTop / pageHeight) - 1),
                    behavior: "smooth",
                });
            }
        };
        const outerRefCurr = outerRef.current;
        outerRefCurr.addEventListener("wheel", wheelHandler);
        if (menu === 'project') {
          outerRef.current?.scrollTo({ 
            top: window.innerHeight * 1,
            behavior: 'auto',
          });
        }
        if (menu === 'other') {
          outerRef.current?.scrollTo({ 
            top: window.innerHeight * 2,
            behavior: 'auto',
          });
        }
        if (menu === 'contact') {
          outerRef.current?.scrollTo({ 
            top: window.innerHeight * 3,
            behavior: 'auto',
          });
        }
        return () => {
            outerRefCurr.removeEventListener("wheel", wheelHandler);
        };
      }
    }, [move, menu]);

  return (
      <div>
        {move ? <div ref={outerRef} className='outer'>
          <About lang={lang} setLang={setLang}/>
          <ProjectsContainer lang={lang} setLang={setLang}/>
          <ProjectsContainer2 lang={lang} setLang={setLang}/>
          <Other lang={lang} setLang={setLang}/>
          <Contact/>
        </div>
        : <HomeContainer/>}
      </div>
      
  );
}

export default App;
