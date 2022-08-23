import KeyboardContainer from '../containers/KeyboardContainer';
import Windows from '../components/windows';
import AlienNo from '../icons/alienNo.png';
import AlienSing from '../icons/alienSing.gif';
import Note from '../icons/note.png';
import Note2 from '../icons/note2.png';
import Play from '../icons/play.png';
import Twinkling from '../icons/twinkling.png';
import Stars from '../icons/stars.png';
import { useEffect, useState, useRef } from 'react';
import Theme from "../music/HoliznaCC0 - NPC Theme.mp3"
import Theme2 from "../music/HoliznaCC0 - ICE temple.mp3"

function Home({menu, onSetMenu, clicked}) {
    const [musicOn, setMusicOn] = useState(true);
    const [audio, setAudio] = useState(new Audio(Theme2));
    const [index, setIndex] = useState(0);
    const [intro, setIntro] = useState('')
    const menusList = ['about', 'project', 'other', 'interest', 'contact'];
    
    useEffect(() => {
      audio.play()
    }, [])

    useEffect(() => {

    }, [menu, index])

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
            if (['interest', 'project', 'contact', 'other', 'about'].includes(clicked)){
                onSetMenu(clicked);
            }
        }
    }, [clicked])

  useEffect(() => {
    musicOn ? audio.play() : audio.pause()
  }, [musicOn])

  const handleClick = (e) => {
    onSetMenu(e);
  }

  return (
      <main style={{backgroundImage: `url(${Stars})`}}>
        <div className='twinkling' style={{background: `transparent url(${Twinkling}) repeat top center`}}></div>
        <div className='main-screen'>
          <span style={{marginTop: "5rem", marginBottom: '2rem'}}>HELLO</span>
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
              <span className='start' onClick={(e) => {handleClick('other'); setIndex(2);}}>OTHER</span>
            </div>
            <div className='menuKey'>
              <img className="play" src={Play} alt="play" style={ menu === 'interest' ? {width: '25px', marginRight: '5px'} : {width: '25px', marginRight: '5px', display: 'none'}}/>
              <span className='start' onClick={(e) => {handleClick('interest'); setIndex(3);}}>INTERESTS</span>
            </div>
            <div className='menuKey'>
              <img className="play" src={Play} alt="play" style={ menu === 'contact' ? {width: '25px', marginRight: '5px'} : {width: '25px', marginRight: '5px', display: 'none'}}/>
              <span className='start' onClick={(e) => {handleClick('contact'); setIndex(4);}}>CONTACT</span>
            </div>
          </div>
          <div className='alienIcon'>
            {musicOn ? <img className="note2" src={Note2} alt="note2" style={{width: '20px', marginRight: '5px'}}/> : <img className="note2" src={Note2} alt="note2" style={{width: '20px', marginRight: '5px', opacity: '0'}}/>}
            {musicOn ? <img src={AlienSing} alt="aliensing" onClick={() => setMusicOn(false)}/> : <img src={AlienNo} alt="alien" onClick={() => setMusicOn(true)}/>}
            {musicOn ? <img className="note" src={Note} alt="note" style={{width: '20px', marginLeft: '2px'}}/> : <img src={Note} alt="note" style={{width: '20px', marginRight: '2px', opacity: '0'}}/>}
          </div>
        </div>
        <KeyboardContainer/>
      </main>
  );
}

export default Home;
