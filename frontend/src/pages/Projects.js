import { useEffect, useState } from 'react';
import Twinkling from '../icons/twinkling.png';
import Stars from '../icons/stars.png';
import KeyboardContainer from '../containers/KeyboardContainer';
import Apple from '../icons/apple.png';
import Cherry from '../icons/cherry.png';
import Grape from '../icons/grape.png';
import Lemon from '../icons/lemon.png';
import Arrow from '../icons/arrow.png';
import AlienCyan from '../icons/alien-cyan.png';
import Thunder from '../icons/thunder.png';
import Cheese from '../icons/cheese.png';
import Moon from '../icons/moon.png';
import Watermelon from '../icons/watermelon.png';
import CoinPick from "../music/coin-collect-retro-8-bit-sound-effect-145251.mp3"
import Hurt from "../music/hurt_c_08-102842.mp3";

function Projects() {
    const [showFruit, setShowFruit] = useState(true);
    const [showFruit2, setShowFruit2] = useState(true);
    const [showFruit3, setShowFruit3] = useState(true);
    const [showFruit4, setShowFruit4] = useState(true);
    const [showFruit5, setShowFruit5] = useState(true);
    const [clicked, setClicked] = useState('');
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [lives, setLives] = useState(3);
    const [showThund, setShowThund] = useState(true);
    const [showDesc, setShowDesc] = useState(false);
    const [showDesc2, setShowDesc2] = useState(false);
    const [showCheese, setShowCheese] = useState(true);
    const [showMoon, setShowMoon] = useState(true);

    useEffect(() => {
        const audio = new Audio(CoinPick);
        audio.pause()
    }, [])

    const handleClickFruit = (e) => {
        if (e === 'apple') setShowFruit(false);
        if (e === 'cherry') setShowFruit2(false);
        if (e === 'lemon') setShowFruit3(false);
        if (e === 'grape') setShowFruit4(false);
        if (e === 'watermelon') setShowFruit5(false);
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

    const handleClickThunder = (e) => {
        if (e === 'thunder') setShowThund(false);
        if (e === 'moon') setShowMoon(false);
        if (e === 'cheese') setShowCheese(false);
        const audio = new Audio(Hurt);
        audio.play();
        if (lives > 0) setLives(lives-1)
        else setLives(0)
        setInterval(() => {
            audio.pause();
        }, 400)
    }

    const handleReturn = (e) => {
        if (e === 2) setShowDesc2(false);
        if (e === 1) setShowDesc(false);
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
                        <div className='projectName'>
                            <span>BLUE SPACE</span>
                            {showMoon && <img className='moon' src={Moon} alt='moon' style={{width: '30px', height: '30px'}} onClick={() => handleClickThunder('moon')}/>}
                        </div>
                        {showDesc && <div><span>Blue Space is a quiz making website where you can make your own quizes under your own platform about any topic of your choice.</span>
                        <span>Test your knowledge on any topic and compete with other users who share the same interest as you!</span></div>}
                        <div className='projectLower'>
                            <div className='projectDetail'>
                                {!showDesc && <div className='description'>
                                    {showFruit && <img className="apple" src={Apple} alt="apple" style={{width: '30px', height: '35px', display: showFruit, position: 'relative'}} onClick={() => handleClickFruit('apple')}/>}
                                    {(showScore && clicked === 'apple') && <span style={{color: 'cyan'}}>{score}</span>}
                                    <span onClick={() => setShowDesc(true)}>DESCRIPTION</span>
                                </div>}
                                
                                {!showDesc && <div className='description'>
                                    {showFruit3 && <img className="lemon" src={Lemon} alt="lemon" style={{width: '30px', height: '35px', display: showFruit3, position: 'relative'}} onClick={() => handleClickFruit('lemon')}/>}
                                    {(showScore && clicked === 'lemon') && <span style={{color: 'cyan'}}>{score}</span>}
                                    <span>LINK</span>
                                </div>}
                                {!showDesc && <div className='description'>
                                    {showFruit5 && <img className="watermelon" src={Watermelon} alt="watermelon" style={{width: '30px', height: '35px', display: showFruit5, position: 'relative'}} onClick={() => handleClickFruit('watermelon')}/>}
                                    {(showScore && clicked === 'watermelon') && <span style={{color: 'cyan'}}>{score}</span>}
                                    <span>GITHUB</span>
                                </div>}
                            </div>
                            {showDesc && <img src={Arrow} alt="arrow" className='arrow' style={{width: '30px'}} onClick={() => handleReturn(1)}/>}
                        </div>
                    </div>
                    <div className='project'>
                        <div className='projectName'>
                            <span>CHEESE ME</span>
                            {showCheese && <img className='cheese' src={Cheese} alt='cheese' style={{width: '30px', height: '30px'}} onClick={() => handleClickThunder('cheese')}/>}
                        </div>
                        
                        {showDesc2 && <div><span>Cheese Me is a your journal moved to PC!</span>
                            <span>It provides a todo list, reminder, calendar, notes, and a d-day counter, along with the plain journal.
                                Customize your journal by adding your own stickers and placing them freely. Sign up and add friends to connect with them and view their entries.</span></div>}
                        <div className='projectLower'>
                            <div className='projectDetail'>
                                {!showDesc2 && <div className='description'>
                                    {showFruit4 && <img className="grape" src={Grape} alt="grape" style={{width: '30px', height: '35px', display: showFruit2, position: 'relative'}} onClick={() => handleClickFruit('grape')}/>}
                                    {(showScore && clicked === 'grape') && <span style={{color: 'cyan'}}>{score}</span>}
                                    <span onClick={() => setShowDesc2(true)}>DESCRIPTION</span>
                                </div>}
                                
                                {!showDesc2 && <div className='description'>
                                    {showFruit2 && <img className="cherry" src={Cherry} alt="cherry" style={{width: '30px', height: '35px', display: showFruit2, position: 'relative'}} onClick={() => handleClickFruit('cherry')}/>}
                                    {(showScore && clicked === 'cherry') && <span style={{color: 'cyan'}}>{score}</span>}
                                    <span>LINK</span>
                                </div>}
                                {!showDesc2 && <div className='description'>
                                    {showThund && <img className='thunder' src={Thunder} alt='thunder' style={{width: '30px', height: '30px'}} onClick={() => handleClickThunder('thunder')}/>}
                                    <span>GITHUB</span>
                                </div>}
                            </div>
                            {showDesc2 && <img src={Arrow} alt="arrow" className='arrow' style={{width: '30px'}} onClick={() => handleReturn(2)}/>}
                        </div>
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