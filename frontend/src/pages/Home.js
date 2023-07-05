import KeyboardContainer from '../containers/KeyboardContainer';
import ProjectsContainer from '../containers/ProjectsContainer';
import ProjectsContainer2 from '../containers/ProjectsContainer2';
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
import Theme2 from "../music/HoliznaCC0 - ICE temple.mp3"
import Bleep from "../music/arcade-bleep-sound-6071.mp3";

function Home({menu, onSetMenu, clicked, onSetMove, move, onSetClicked}) {
    const [musicOn, setMusicOn] = useState(false);
    const [audio, setAudio] = useState();
    const [index, setIndex] = useState(0);
    const [jump, setJump] = useState(false);
    const [lang, setLang] = useState('English');
    const outerRef = useRef();
    const menusList = ['about', 'project1', 'project2', 'project3', 'other', 'contact'];
    const [current, setCurrent] = useState(0);

    useEffect(() => {
      setAudio(new Audio(Theme2));
      onSetMove(false);
      onSetMenu(null);
    }, []);
      
    useEffect(() => {
        const wheelHandler = (e) => {

          const { deltaY } = e;
          if (deltaY > 0) {
            setCurrent(current === 5 ? 5 : current + 1)
          } else {
            setCurrent(current === 0 ? 0 : current - 1);

          }
      };
      const outerRefCurr = outerRef?.current;
      if (outerRefCurr) {
          outerRefCurr.addEventListener("wheel", wheelHandler);
          return () => {
            outerRefCurr.removeEventListener("wheel", wheelHandler);
        };
      }
  }, [outerRef, move, current]);

    useEffect(() => {
      if (audio) musicOn ? audio.play() : audio.pause()
    }, [musicOn, audio])

    useEffect(() => {
        if (clicked === 'enter'){
          onSetMove(true);
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
        if (menu === 'project') {
          outerRef.current?.scrollTo({ 
            top: window.innerHeight * 1,
            behavior: 'auto',
          });
        }
        if (menu === 'other') {
          outerRef.current?.scrollTo({ 
            top: window.innerHeight * 4,
            behavior: 'auto',
          });
        }
        if (menu === 'contact') {
          outerRef.current?.scrollTo({ 
            top: window.innerHeight * 5,
            behavior: 'auto',
          });
        }
      }
    }, [menu, move])


  const handleClick = (e) => {
    if (e === menu){
        setJump(true);
        const audio = new Audio(Bleep);
        audio.play();
        setTimeout(() => {
            onSetMove(true);
            audio.pause();
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
          <span style={{marginTop: "0rem", marginBottom: '2rem'}}>HELLO</span>
          <span className='intro'>MY NAME IS SEONGEUN PARK AND WELCOME TO MY PAGE!</span>
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
          <section>
            <ProjectsContainer lang={lang} setLang={setLang}/>
          </section>
          <section>
            <ProjectsContainer2 lang={lang} setLang={setLang}/>
          </section>
          <section>
            <ProjectsContainer2 lang={lang} setLang={setLang}/>
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
