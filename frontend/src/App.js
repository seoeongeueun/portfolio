import { useSelector, useDispatch } from 'react-redux';
import { useRef, useEffect } from 'react';
import HomeContainer from './containers/HomeContainer';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectsContainer from './containers/ProjectsContainer';
import Other from './pages/Other';
import Contact from './pages/Contact';

function App() {
  const { menu, move } = useSelector(state => ({
    menu: state.menus.menu,
    move: state.menus.move
  }));

  console.log('move: ', move);
  console.log('menu: ', menu);

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
    }, [move]);

  return (
      <div>
        {move ? <div ref={outerRef} className='outer'>
          <About/>
          <ProjectsContainer/>
          <Other/>
          <Contact/>
        </div>
        : <HomeContainer/>}
      </div>
      
  );
}

export default App;
