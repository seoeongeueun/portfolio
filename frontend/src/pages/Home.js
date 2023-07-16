import KeyboardContainer from '../containers/KeyboardContainer';
import ProjectsContainer from '../containers/ProjectsContainer';
import ProjectsContainer2 from '../containers/ProjectsContainer2';
import ProjectsContainer3 from '../containers/ProjectsContainer3';
import AboutContainer from '../containers/AboutContainer';
import Other from './Other';
import Contact from './Contact';
import AlienNo from '../icons/alienNo.png';
import Alien3 from '../icons/alien3.png';
import AlienSing from '../icons/alienSing.gif';
import Note from '../icons/note.png';
import Note2 from '../icons/note2.png';
import Play from '../icons/play.png';
import Twinkling from '../icons/twinkling.png';
import Stars from '../icons/stars.png';
import { useEffect, useState, useRef } from 'react';
import audioControls from '../modules/audioControls.js';

function Home({menu, onSetMenu, clicked, onSetMove, move, onSetClicked, text, onSetText}) {
    const [musicOn, setMusicOn] = useState(false);
    const [index, setIndex] = useState(0);
    const [jump, setJump] = useState(false);
    const [lang, setLang] = useState('English');
    const [current, setCurrent] = useState(0);
    const [doneLoading, setDoneLoading] = useState(false);
    const [showInput, setShowInput] = useState(false);
    const outerRef = useRef();
    const sectionRefs = useRef([]);
    const menusList = ['about', 'project', 'other', 'contact'];

    useEffect(() => {
      onSetMove(false);
      onSetMenu(null);
      const animation = document.querySelector('.intro');
      animation?.addEventListener("animationend", () => {
        setDoneLoading(true);
      });
      animation?.addEventListener("animationend", () => {
        setDoneLoading(true);
      });
    }, []);

    useEffect(() => {
      if (doneLoading) {
        const show = setInterval(() => {
          setShowInput(true);
        }, 1500);

        return () => {
          clearInterval(show);
        };
      }
    }, [doneLoading]);
      
    useEffect(() => {
      if (text.length >= 50) {
        onSetText(text.substring(0, 49));
      }
      else if (text.toLowerCase() === 'projects') {
        setIndex(1);
        onSetMenu('project');
      }
      else if (text.toLowerCase() === 'about me' || text.toLowerCase() === 'aboutme') {
        setIndex(0);
        onSetMenu('about')
      }
      else if (text.toLowerCase() === 'other') {
        setIndex(2);
        onSetMenu('other');
      }
      else if (text.toLowerCase() === 'contact') {
        setIndex(3);
        onSetMenu('contact');
      }
    }, [text]);
    
    const wheelHandler = (e) => {
          const { deltaY, target } = e;
          if (target.classList.contains('image1DescContent') || target.classList.contains('image2DescContent') || target.classList.contains('image3DescContent')) {
            return;
          }
          if (deltaY > 0) {
            setCurrent((prev) => Math.min(prev + 1, 6 - 1));
          } else if (deltaY < 0) {
            setCurrent((prev) => Math.max(prev - 1, 0));
          }
      };
    
    useEffect(() => {
        const container = document.querySelector('.outer');
        container.addEventListener('wheel', handleWheel);

        return () => {
          container.removeEventListener('wheel', handleWheel);
        };
  }, []);

    useEffect(() => {
      musicOn ? audioControls.play('theme2') : audioControls.pause('theme2');
    }, [musicOn])

    useEffect(() => {
        if (!move) {
          if (clicked === 'enter'){
            onSetMove(true);
          }
        }
    }, [clicked, onSetMove]);

    useEffect(() => {
      document.addEventListener("keydown", (e) => {
        e = e || window.event;
        if (e.key === "ArrowUp") {
          onSetClicked('up')
        } else if (e.key === "ArrowDown") {
          onSetClicked('down')
        } else if (e.key === "Enter") {
          onSetClicked('enter')
        }
        setTimeout(() => {
            onSetClicked(null);
        }, 100);
      });
    }, [clicked, onSetClicked]);

    useEffect(() => {
      if (clicked === 'down'){
          if (index + 1 > 4) {
              onSetMenu(menusList[0]);
              setIndex(0);
          }
          else {
              onSetMenu(menusList[index+1])
              setIndex(index+1);
          }
      }
      else if (clicked === 'up'){
          if (index - 1 < 0){
            onSetMenu(menusList[4]);
            setIndex(4);
          }
          else {
              onSetMenu(menusList[index-1])
              setIndex(index-1);
          }
      }
      else {
          if (['project', 'contact', 'other', 'about'].includes(clicked)){
              onSetMenu(clicked);
          }
      }
    }, [clicked]);

    useEffect(() => {
      if (move) {
        if (menu === 'about') {
          outerRef.current?.scrollTo({ 
            top: window.innerHeight * 0,
            behavior: 'auto',
          });
          setCurrent(0);
        }
        if (menu === 'project') {
          outerRef.current?.scrollTo({ 
            top: window.innerHeight * 1,
            behavior: 'auto',
          });
          setCurrent(1);
        }
        if (menu === 'other') {
          outerRef.current?.scrollTo({ 
            top: window.innerHeight * 4,
            behavior: 'auto',
          });
          setCurrent(4)
        }
        if (menu === 'contact') {
          outerRef.current?.scrollTo({ 
            top: window.innerHeight * 5,
            behavior: 'auto',
          });
          setCurrent(5)
        }
      }
    }, [menu, move]);

    useEffect(() => {
      console.log(current)
    }, [current])


  const handleClick = (e) => {
    if (e === menu){
        setJump(true);
        audioControls.play('bleep');
        setTimeout(() => {
            onSetMove(true);
            audioControls.pause('bleep');
        }, 1500);
    } else {
        onSetMenu(e);
    }
  }

  return (
    <>
      {!move ? <main style={{backgroundImage: `url(${Stars})`}}>
        <div className='twinkling' style={{background: `transparent url(${Twinkling}) repeat top center`}}></div>
        <div className='main-screen'>
          <span className='homePageTitle' style={{marginTop: "0rem", marginBottom: '2rem'}}>HELLO</span>
          {showInput ?  <div className='userInputContainer'><span className='textTitle'>TRY THE MINI KEYBOARD </span><div className='userInput'><span className='text'>{text}</span><div className='mouseCursor'/></div></div> : <span className='intro'>MY NAME IS SEONGEUN PARK AND WELCOME TO MY PAGE!</span>}
          <div className='menus'>
            <div className='menuKey'>
              <img className="play" src={Play} alt="play" style={ menu === 'about' ? {width: '25px', marginRight: '5px'} : {width: '25px', marginRight: '5px', display: 'none'}}/>
              <span className='start' onClick={(e) => {handleClick('about'); setIndex(0);}}>ABOUT ME</span>
            </div>
            <div className='menuKey'>
              <img className="play" src={Play} alt="play" style={ menu === 'project' ? {width: '25px', marginRight: '5px'} : {width: '25px', marginRight: '5px', display: 'none'}}/>
              <span className='start' onClick={(e) => {handleClick('project'); setIndex(1);}}>PROJECTS</span>
            </div>
            <div className='menuKey'>
              <img className="play" src={Play} alt="play" style={ menu === 'other' ? {width: '25px', marginRight: '5px'} : {width: '25px', marginRight: '5px', display: 'none'}}/>
              <span className='start' onClick={(e) => {handleClick('other'); setIndex(3);}}>OTHER</span>
            </div>
            <div className='menuKey'>
              <img className="play" src={Play} alt="play" style={ menu === 'contact' ? {width: '25px', marginRight: '5px'} : {width: '25px', marginRight: '5px', display: 'none'}}/>
              <span className='start' onClick={(e) => {handleClick('contact'); setIndex(5);}}>CONTACT</span>
            </div>
          </div>
          {jump ? <div className='alienIconJump'>
            <img src={Alien3} alt="alien3"/>
          </div> :
          <div className={musicOn ? 'alienIcon' : 'alienIconMute'}>
            {musicOn ? <img className="note2" src={Note2} alt="note2" style={{width: '20px', marginRight: '5px'}}/> : <img className="note2" src={Note2} alt="note2" style={{width: '20px', marginRight: '5px', opacity: '0'}}/>}
            {musicOn ? <img src={AlienSing} alt="aliensing" onClick={() => setMusicOn(false)}/> : <img src={AlienNo} alt="alien" onClick={() => setMusicOn(true)}/>}
            {musicOn ? <img className="note" src={Note} alt="note" style={{width: '20px', marginLeft: '2px'}}/> : <img src={Note} alt="note" style={{width: '20px', marginRight: '2px', opacity: '0'}}/>}
          </div>}
        </div>
        <KeyboardContainer/>
      </main>
      : <div ref={outerRef} className='outer'>
          <section>
            <AboutContainer lang={lang} setLang={setLang} current={current}/>
          </section>
          <section ref={(ref) => sectionRefs.current[1] = ref}>
            <ProjectsContainer2 lang={lang} setLang={setLang}/>
          </section>
          <section ref={(ref) => sectionRefs.current[2] = ref}>
            <ProjectsContainer lang={lang} setLang={setLang}/>
          </section>
          <section ref={(ref) => sectionRefs.current[3] = ref}>
            <ProjectsContainer3 lang={lang} setLang={setLang}/>
          </section>
          <section>
            <Other lang={lang} setLang={setLang} onSetMenu={onSetMenu}/>
          </section>
          <section>
            <Contact current={current}/>
          </section>
        </div>}
    </>
  );
}

export default Home;
