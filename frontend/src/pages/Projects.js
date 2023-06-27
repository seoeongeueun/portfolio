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

function Projects({score, life, onSetScore, onSetLife}) {
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
                    <p>Projects</p>
                    <div className='otherPageLang'>
                        <button onClick={() => setLang('Korean')} disabled={lang === 'Korean'}>한국어</button>
                        <button onClick={() => setLang('English')} disabled={lang === 'English'}>ENGLISH</button>
                    </div>
                </div>
                <div className='projectInfo'>
                    <div className='project'>
                        <div className='projectName'>
                            <div className='projectTitle'>
                                <span>BLUE SPACE</span>
                                {showMoon && <img className='moon' src={Moon} alt='moon' style={{width: '30px', height: '30px'}} onClick={() => handleClickThunder('moon')}/>}
                            </div>
                            <span className='projectTitleDetail'>3 People Team Project</span>
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
                                    {lang === 'English' && <div className='descriptionKor'><span>Blue Space is a quiz-making website where users can select a category of their choice and create quizzes on that topic.
                                        Users can test their knowledge and compete with other users by taking the quzzes.</span>
                                    <span>Similar to YouTube channels, users can manage their own platforms and subscribe to others' platforms.</span>
                                    <span>Points are earned for correct answers, which can be used to purchase items from the shop or obtain hints while taking quizzes.</span><br></br>
                                    <div className='descriptionKor2'>
                                        <span style={{color: 'cyan'}}>Major Features</span><span style={{marginBottom: '1rem'}}>Google Auth Login, Create Platforms, Create Quizzes, Take Quizzes, Leaderboard, Item Shop, Customizable Profile</span>
                                        <span style={{color: 'cyan'}}>My Roles</span><span style={{marginBottom: '1rem'}}>Figma Design, Leaderboard Page (back & front), Shop Page (back & front), Quiz Taking Page (back & front), My Page (front only), Main Page (front only)</span>
                                        <span style={{color: 'cyan'}}>Stacks Used</span>
                                        <div className='stacks'>
                                            <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
                                            <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
                                            <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/> 
                                            <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
                                            <img src="https://img.shields.io/badge/mui-007FFF?style=for-the-badge&logo=html5&logoColor=white"/>
                                            <img src="https://img.shields.io/badge/mongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white"/>
                                            <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white"/>
                                            <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"/>
                                            <img src="https://img.shields.io/badge/heroku-430098?style=for-the-badge&logo=Heroku&logoColor=white"/>
                                        </div>
                                    </div>    
                                    </div>}
                                    {lang === 'Korean' && <div className='descriptionKor'><span>Blue Space는 유저가 카테고리를 골라 해당하는 분야의 퀴즈를 만들고 다른 유저와 그 분야의 지식을 겨룰 수 있는 퀴즈 사이트입니다.</span>
                                    <span>유저는 유튜브 채널처럼 본인의 플랫폼에서 퀴즈를 관리하고 다른 유저의 플랫폼에 구독하고 퀴즈를 풀어볼 수 있습니다.</span>
                                    <span>퀴즈를 풀어 포인트를 얻고 포인트로 상점 아이템을 사거나, 퀴즈를 풀 때 힌트를 사용하는 방법으로 포인트를 사용할 수 있습니다.</span><br></br>
                                    <div className='descriptionKor2'>
                                        <span style={{color: 'cyan'}}>주요 기능</span><span style={{marginBottom: '1rem'}}>구글 로그인, 플랫폼 생성, 퀴즈 제작, 퀴즈 풀기, 순위표, 아이템 상점, 커스터마이징 가능한 프로필</span>
                                        <span style={{color: 'cyan'}}>나의 역할</span><span style={{marginBottom: '1rem'}}>Figma 디자인, 순위표 페이지 (back & front), 상점 페이지 (back & front), 퀴즈 푸는 페이지 (back & front), 마이페이지 (front only), 메인 페이지 (front only)</span>
                                        <span style={{color: 'cyan'}}>사용 스택</span>
                                        <div className='stacks'>
                                            <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
                                            <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
                                            <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/> 
                                            <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
                                            <img src="https://img.shields.io/badge/mui-007FFF?style=for-the-badge&logo=html5&logoColor=white"/>
                                            <img src="https://img.shields.io/badge/mongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white"/>
                                            <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white"/>
                                            <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"/>
                                            <img src="https://img.shields.io/badge/heroku-430098?style=for-the-badge&logo=Heroku&logoColor=white"/>
                                        </div>
                                    </div>    
                                    </div>}
                                    <div className='descriptionButtons'>
                                        <div className='description'>
                                            {showFruit && <img className="apple" src={Apple} alt="apple" style={{width: '30px', height: '35px', display: showFruit, position: 'relative'}} onClick={() => handleClickFruit('apple')}/>}
                                            {(showScore && clicked === 'apple') && <span style={{color: 'cyan'}}>{score}</span>}
                                            <a href="https://www.figma.com/file/Pe8tN6vaKn5O0z7pIbWmds/Blue_Space_Project?type=design&node-id=18%3A83&mode=design&t=M2hXxl6YqQMv84a9-1" rel="noopener noreferrer" target="_blank"><span>FIGMA</span></a>
                                        </div>
                                    
                                        <div className='description'>
                                            {showFruit3 && <img className="lemon" src={Lemon} alt="lemon" style={{width: '30px', height: '35px', display: showFruit3, position: 'relative'}} onClick={() => handleClickFruit('lemon')}/>}
                                            {(showScore && clicked === 'lemon') && <span style={{color: 'cyan'}}>{score}</span>}
                                            <a href="https://github.com/Subii98/Blue-Space" rel="noopener noreferrer" target="_blank"><span>GITHUB (ORIGINAL)</span></a>
                                        </div>
                                        <div className='description'>
                                            {showFruit5 && <img className="watermelon" src={Watermelon} alt="watermelon" style={{width: '30px', height: '35px', display: showFruit5, position: 'relative'}} onClick={() => handleClickFruit('watermelon')}/>}
                                            {(showScore && clicked === 'watermelon') && <span style={{color: 'cyan'}}>{score}</span>}
                                            <a href="https://github.com/Subii98/Blue-Space-Update" rel="noopener noreferrer" target="_blank"><span>GITHUB (CSS FIX)</span></a>
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
export default Projects;
