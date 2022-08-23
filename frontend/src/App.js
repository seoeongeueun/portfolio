import logo from './logo.svg';
import './App.css';
import Keyboard from './components/keyboard';
import Windows from './components/windows';
import Alien from './icons/alien.png';
import Twinkling from './icons/twinkling.png';
import Stars from './icons/stars.png';

function App() {
  return (
      <main style={{backgroundImage: `url(${Stars})`}}>
        <div className='twinkling' style={{background: `transparent url(${Twinkling}) repeat top center`}}></div>
        <div className='main-screen'>
          <span style={{marginBottom: '2rem'}}>PORTFOLIO</span>
          <span className='intro'>HELLO, MY NAME IS SEONGEUN PARK AND THIS IS MY PORTFOLIO!</span>
          <span className='start'>CLICK ANY KEY TO START</span>
          <img src={Alien} alt="alien"/>
        </div>
        <Keyboard/>
      </main>
  );
}

export default App;
