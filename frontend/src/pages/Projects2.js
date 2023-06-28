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

import Project1Main from '../images/project1-main.png';
import Project1Mypage from '../images/project1-mypage.png';
import Project1Quizedit from '../images/project1-quizedit.png';
import Project1Score from '../images/project1-score.png';
import Project1Store from '../images/project1-store.png';
import Project1Takequiz from '../images/project1-takequiz.png';
import Project1Categories from '../images/project1-categories.png';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Projects2({score, life, onSetScore, onSetLife}) {
    const [showFruit, setShowFruit] = useState(true);
    const [showFruit2, setShowFruit2] = useState(true);
    const [showFruit3, setShowFruit3] = useState(true);
    const [showFruit4, setShowFruit4] = useState(true);
    const [showFruit5, setShowFruit5] = useState(true);
    const [clicked, setClicked] = useState('');
    const [showScore, setShowScore] = useState(false);
    const [showThund, setShowThund] = useState(true);
    const [showDesc, setShowDesc] = useState(false);
    const [showDesc2, setShowDesc2] = useState(false);
    const [showCheese, setShowCheese] = useState(true);
    const [showMoon, setShowMoon] = useState(true);
    const [lang, setLang] = useState('English');
    const [index1, setIndex1] = useState(0);

    const project1 = [Project1Main, Project1Mypage, Project1Quizedit, Project1Takequiz, Project1Score, Project1Store, Project1Categories];

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
        onSetScore(score + 100);
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
        if (life > 0) onSetLife(life-1)
        else onSetLife(0)
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
                    <p>Project 2</p>
                    <div className='otherPageLang'>
                        <button onClick={() => setLang('Korean')} disabled={lang === 'Korean'}>한국어</button>
                        <button onClick={() => setLang('English')} disabled={lang === 'English'}>ENGLISH</button>
                    </div>
                </div>
                <div className='projectInfo'>
                    <div className='project'>
                        <div className='projectName'>
                            <div className='projectTitle'>
                                <span>CHEESE ME</span>
                                {showCheese && <img className='cheese' src={Cheese} alt='cheese' style={{width: '30px', height: '30px'}} onClick={() => handleClickThunder('cheese')}/>}
                            </div>
                            {lang === 'English' ? <span className='projectTitleDetail'>1 Person Project</span> : <span className='projectTitleDetail'>1인 개인 프로젝트</span>}
                        </div>
                        <div className='projectImageAndDetail'>
                            <div className='projectImage'>
                                <img src={project1[index1]} alt='project1'/>
                                <div className='projectImageButtons'>
                                    <ArrowBackIosIcon sx={{fontSize: '1.2rem', color: 'white', cursor: 'pointer', marginBottom: '2px'}} onClick={() => setIndex1(index1 > 0 ? index1-1 : project1.length-1)}/>
                                    <span style={{fontSize: '1.5rem'}}>{index1+1}/{project1.length}</span>
                                    <ArrowForwardIosIcon sx={{fontSize: '1.2rem', color: 'white', cursor: 'pointer', marginBottom: '2px'}} onClick={() => setIndex1(index1 < project1.length-1 ? index1+1 : 0)}/>
                                    </div>
                            </div>
                            <div className='projectLower'>
                                <div className='projectDetail'>
                                    {lang === 'English' && <div className='descriptionKor'><span>I made CheeseMe because while there are other blog-like applications out there, very few offer all those features within a single interface, along with the freedom to creatively decorate your pages.</span>
                                    <span>CheeseMe is a personalized and customizable journal application for PC that brings together convenient widgets, journal entries, and social connections all in one place.</span><br></br>
                                    <div className='descriptionKor2'>
                                        <span style={{color: 'cyan'}}>Major Features</span><span style={{marginBottom: '1rem'}}>Login, Todo List, Calendar, World Clock, Reminder, Notes, Journal Posts, Drag & Move Widgets, Make Sticker Widgets, Add Friends</span>
                                        <span style={{color: 'cyan'}}>My Roles</span><span style={{marginBottom: '1rem'}}>Design, Backend, Frontend, Deloyment</span>
                                        <span style={{color: 'cyan'}}>Stacks Used</span>
                                        <div className='stacks'>
                                            <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
                                            <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
                                            <img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white"/>
                                            <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/> 
                                            <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
                                            <img src="https://img.shields.io/badge/mui-007FFF?style=for-the-badge&logo=html5&logoColor=white"/>
                                        </div>
                                        <div className='stacks'>
                                            <img src="https://img.shields.io/badge/mongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white"/>
                                            <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white"/>
                                            <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"/>
                                            <img src="https://img.shields.io/badge/amazons3-FF9900?style=for-the-badge&logo=AmazonS3&logoColor=white"/>
                                            <img src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=Netlify&logoColor=white"/>
                                            <img src="https://img.shields.io/badge/fly.io-8D33E8?style=for-the-badge&logo=express&logoColor=white"/>
                                            <img src="https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white"/>
                                        </div>
                                    </div>    
                                    </div>}
                                    {lang === 'Korean' && <div className='descriptionKor'><span>CheeseMe는 전자기기에서만 사용할 수 있는 편리한 체계적인 위젯과 자유롭게 꾸미고 커스터마이징할 수 있는 실제 종이 일기장의 장점을 합쳐 만든 PC 스케쥴러입니다.</span>
                                    <span>블로그 비슷한 사이트는 많지만, 꾸미는 자유도가 높고 모든 기능이 한 곳에 있는 스케쥴러 사이트는 찾기 어려워 만들게 되었습니다.</span><br></br>
                                    <div className='descriptionKor2'>
                                        <span style={{color: 'cyan'}}>주요 기능</span><span style={{marginBottom: '1rem'}}>로그인, 투두 리스트, 캘린더, 세계 시간, 리마인더, 노트, 일기장 포스트, 자유 배치 가능한 위젯 그리드, 원하는 사진으로 제작하는 스티커, 친구 추가</span>
                                        <span style={{color: 'cyan'}}>나의 역할</span><span style={{marginBottom: '1rem'}}>디자인, 백엔드, 프론트엔드, 배포</span>
                                        <span style={{color: 'cyan'}}>사용 스택</span>
                                        <div className='stacks'>
                                            <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
                                            <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
                                            <img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white"/>
                                            <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/> 
                                            <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
                                            <img src="https://img.shields.io/badge/mui-007FFF?style=for-the-badge&logo=html5&logoColor=white"/>
                                        </div>
                                        <div className='stacks'>
                                            <img src="https://img.shields.io/badge/mongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white"/>
                                            <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white"/>
                                            <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"/>
                                            <img src="https://img.shields.io/badge/amazons3-FF9900?style=for-the-badge&logo=AmazonS3&logoColor=white"/>
                                            <img src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=Netlify&logoColor=white"/>
                                            <img src="https://img.shields.io/badge/fly.io-8D33E8?style=for-the-badge&logo=express&logoColor=white"/>
                                            <img src="https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white"/>
                                        </div>
                                    </div>    
                                    </div>}
                                    <div className='descriptionButtons'>
                                        <div className='description'>
                                            {showFruit2 && <img className="cherry" src={Cherry} alt="cherry" style={{width: '30px', height: '35px', display: showFruit2, position: 'relative'}} onClick={() => handleClickFruit('cherry')}/>}
                                            {(showScore && clicked === 'cherry') && <span style={{color: 'cyan'}}>{score}</span>}
                                            <a href="https://cheeseme.netlify.com" rel="noopener noreferrer" target="_blank"><span>URL</span></a>
                                        </div>
                                        <div className='description'>
                                            {showThund && <img className='thunder' src={Thunder} alt='thunder' style={{width: '30px', height: '30px'}} onClick={() => handleClickThunder('thunder')}/>}
                                            <a href="https://github.com/seoeseongeueun/cheeseme" rel="noopener noreferrer" target="_blank"><span>GITHUB</span></a>
                                        </div>
                                        <div className='description'>
                                            {showFruit4 && <img className="grape" src={Grape} alt="grape" style={{width: '30px', height: '35px', display: showFruit2, position: 'relative'}} onClick={() => handleClickFruit('grape')}/>}
                                            {(showScore && clicked === 'grape') && <span style={{color: 'cyan'}}>{score}</span>}
                                            <a href="https://github.com/seoeongeueun/cheeseme#pages-help" rel="noopener noreferrer" target="_blank"><span>README</span></a>
                                        </div>
                                    </div>
                                </div>
                                {showDesc && <img src={Arrow} alt="arrow" className='arrow' style={{width: '30px'}} onClick={() => handleReturn(1)}/>}
                            </div>
                        </div>
                    </div>
                    {/* <div className='project'>
                        <div className='projectName'>
                            <span>CHEESE ME</span>
                            
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
                                    <a href="https://cheeseme.netlify.com" rel="noopener noreferrer" target="_blank"><span>LINK</span></a>
                                </div>}
                                {!showDesc2 && <div className='description'>
                                    {showThund && <img className='thunder' src={Thunder} alt='thunder' style={{width: '30px', height: '30px'}} onClick={() => handleClickThunder('thunder')}/>}
                                    <a href="https://github.com/seoeongeueun/cheeseme" rel="noopener noreferrer" target="_blank"><span>GITHUB</span></a>
                                </div>}
                            </div>
                            {showDesc2 && <img src={Arrow} alt="arrow" className='arrow' style={{width: '30px'}} onClick={() => handleReturn(2)}/>}
                        </div>
                    </div> */}
                </div>
                <div className='projectFooter'>
                        <div className='scoreInfo'>
                            <span className='score'>SCORE</span>
                            <span style={{color: 'cyan', marginLeft: '1rem'}}>{score}</span>
                        </div>
                        <div className='livesInfo'>
                            <span className='lives'>LIVES</span>
                            {[...Array(life).keys()].map((item) => (
                                <img src={AlienCyan} alt='alienCyan' className='alienCyan'/>
                            ))}
                        </div>
                    </div>
                
            </div>
        </main>
    )
}
export default Projects2;