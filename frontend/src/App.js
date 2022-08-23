import './App.css';
import KeyboardContainer from './containers/KeyboardContainer';
import Windows from './components/windows';
import AlienNo from './icons/alienNo.png';
import AlienSing from './icons/alienSing.gif';
import Note from './icons/note.png';
import Note2 from './icons/note2.png';
import Twinkling from './icons/twinkling.png';
import Stars from './icons/stars.png';
import { useEffect, useState } from 'react';

function App() {
  const [musicOn, setMusicOn] = useState(true)
  useEffect(() => {

  }, [musicOn])

  return (
      <main style={{backgroundImage: `url(${Stars})`}}>
        <div className='twinkling' style={{background: `transparent url(${Twinkling}) repeat top center`}}></div>
        <div className='main-screen'>
          <span style={{marginBottom: '2rem'}}>HELLO</span>
          <span className='intro'>MY NAME IS SEONGEUN PARK AND THIS IS MY PORTFOLIO!</span>
          <span className='start'>CLICK ANY KEY TO START</span>
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

export default App;
