import { useEffect, useState } from 'react';
import Twinkling from '../icons/twinkling.png';
import Stars from '../icons/stars.png';
import KeyboardContainer from '../containers/KeyboardContainer';
import Apple from '../icons/apple.png';
import Cherry from '../icons/cherry.png';
import Grape from '../icons/grape.png';
import Lemon from '../icons/lemon.png';
import AlienCyan from '../icons/alien-cyan.png';
import Thunder from '../icons/thunder.png';
import CoinPick from "../music/coin-collect-retro-8-bit-sound-effect-145251.mp3"
import Hurt from "../music/hurt_c_08-102842.mp3"

function Projects() {
    const [showFruit, setShowFruit] = useState(true);
    const [showFruit2, setShowFruit2] = useState(true);
    const [showFruit3, setShowFruit3] = useState(true);
    const [showFruit4, setShowFruit4] = useState(true);
    const [clicked, setClicked] = useState('');
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [lives, setLives] = useState(3);
    const [showThund, setShowThund] = useState(true);

    useEffect(() => {
        const audio = new Audio(CoinPick);
        audio.pause()
    }, [])

    const handleClickFruit = (e) => {
        if (e === 'apple') setShowFruit(false);
        if (e === 'cherry') setShowFruit2(false);
        if (e === 'lemon') setShowFruit3(false);
        if (e === 'grape') setShowFruit4(false);
        setScore(score + 100);
        setShowScore(true);
        setClicked(e);
        const audio = new Audio(CoinPick);
        audio.play()

        setInterval(() => {
            setShowScore(false);
            setClicked('');
            audio.pause();
        }, 800);
    }

    const handleClickThunder = () => {
        setShowThund(false);
        const audio = new Audio(Hurt);
        audio.play();
        if (lives > 0) setLives(lives-1)
        else setLives(0)
        setInterval(() => {
            audio.pause();
        }, 200)
    }

    return(
        <main style={{backgroundImage: `url(${Stars})`}}>
        <div className='twinkling' style={{background: `transparent url(${Twinkling}) repeat top center`}}></div>
            <div className='projectPage'>
                <div className='projectPageIntro'>
                    <p>Projects</p>
                </div>
                <div className='projectInfo'>
                    <div className='project'>
                        {showFruit && <img className="apple" src={Apple} alt="apple" style={{width: '30px', height: '35px', display: showFruit, position: 'relative'}} onClick={() => handleClickFruit('apple')}/>}
                        {(showScore && clicked === 'apple') && <span style={{position: 'absolute', transform: 'translate(-20%, 20%)', color: 'cyan'}}>{score}</span>}
                        <div className='projectName'>
                            <span>Blue Space</span>
                        </div>
                    </div>
                    <div className='project'>
                        {showFruit2 && <img className="cherry" src={Cherry} alt="cherry" style={{width: '30px', height: '35px', display: showFruit2, position: 'relative'}} onClick={() => handleClickFruit('cherry')}/>}
                        {(showScore && clicked === 'cherry') && <span style={{position: 'absolute', transform: 'translate(-20%, 20%)', color: 'cyan'}}>{score}</span>}
                        <span>CheeseMe</span>
                        {showFruit4 && <img className="grape" src={Grape} alt="grape" style={{width: '30px', height: '35px', display: showFruit2, position: 'relative'}} onClick={() => handleClickFruit('grape')}/>}
                        {(showScore && clicked === 'grape') && <span style={{position: 'absolute', transform: 'translate(-20%, 20%)', color: 'cyan'}}>{score}</span>}
                        {showThund && <img className='thunder' src={Thunder} alt='thunder' style={{width: '30px', height: '30px'}} onClick={() => handleClickThunder()}/>}
                    </div>
                </div>
                <div className='projectFooter'>
                    <div className='scoreInfo'>
                        <span className='score'>SCORE</span>
                        <span style={{color: 'cyan', marginLeft: '1rem'}}>{score}</span>
                    </div>
                    <div className='livesInfo'>
                        <span className='lives'>LIVES</span>
                        {[...Array(lives).keys()].map((item) => (
                            <img src={AlienCyan} alt='alienCyan' className='alienCyan'/>
                        ))}
                    </div>
                </div>
                
            </div>
        </main>
    )
}
export default Projects;