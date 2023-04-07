import { useSelector, useDispatch } from 'react-redux';
import { useRef, useEffect } from 'react';
import HomeContainer from './containers/HomeContainer';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  const { menu, move } = useSelector(state => ({
    menu: state.menus.menu,
    move: state.menus.move
  }));

  console.log('move: ', move);
  console.log('menu: ', menu);

  const outerRef = useRef();
  const projectRef = useRef();

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
        return () => {
            outerRefCurr.removeEventListener("wheel", wheelHandler);
        };
      }
    }, [move]);

    useEffect(() => {
      if (move) {
        if (menu === 'project') {
          console.log('eyey')
          projectRef.current?.scrollIntoView({ behavior: 'auto' });
        }
      }
    }, [menu, move]);

  return (
      <div>
        {move ? <div ref={outerRef} className='outer'>
          <About/>
          <Projects ref={projectRef}/>
        </div>
        : <HomeContainer/>}
      </div>
      
  );
}

export default App;
