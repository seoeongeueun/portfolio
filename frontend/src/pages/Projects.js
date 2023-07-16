import { useEffect, useState } from 'react';
import Twinkling from '../icons/twinkling.png';
import Stars from '../icons/stars.png';
import Apple from '../icons/apple.png';
import Lemon from '../icons/lemon.png';
import AlienCyan from '../icons/alien-cyan.png';
import Moon from '../icons/moon.png';
import Watermelon from '../icons/watermelon.png';

import Project1Main from '../images/project1-main.png';
import Project1Mypage from '../images/project1-mypage.png';
import Project1Quizedit from '../images/project1-quizedit.png';
import Project1Score from '../images/project1-score.png';
import Project1Store from '../images/project1-store.png';
import Project1Takequiz from '../images/project1-takequiz.png';
import Project1Categories from '../images/project1-categories.png';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import audioControls from '../modules/audioControls.js';
import MouseIcon from '@mui/icons-material/Mouse';

function Projects({score, life, onSetScore, onSetLife, lang, setLang}) {
    const [showFruit, setShowFruit] = useState(true);
    const [showFruit3, setShowFruit3] = useState(true);
    const [showFruit5, setShowFruit5] = useState(true);
    const [clicked, setClicked] = useState('');
    const [showScore, setShowScore] = useState(false);
    const [showMoon, setShowMoon] = useState(true);
    const [index1, setIndex1] = useState(0);
    const [found, setFound] = useState(0)

    const project1 = [Project1Main, Project1Mypage, Project1Quizedit, Project1Takequiz, Project1Score, Project1Store, Project1Categories];

    const handleClickFruit = (e) => {
        if (e === 'apple') {
            setShowFruit(false);
            setFound(found+1);
        }
        if (e === 'lemon') {
            setShowFruit3(false);
            setFound(found+1);
        }
        if (e === 'watermelon') {
            setShowFruit5(false);
            setFound(found+1);
        }
        onSetScore(score + 100);
        setShowScore(true);
        setClicked(e);
        audioControls.play('coin')

        setInterval(() => {
            setShowScore(false);
            setClicked('');
            audioControls.pause('coin');
        }, 800);
    }

    const handleClickThunder = (e) => {
        if (e === 'moon') setShowMoon(false);
        audioControls.play('hurt');
        if (life > 0) onSetLife(life-1)
        else onSetLife(0)
        setInterval(() => {
            audioControls.pause('hurt');
        }, 400)
    }

    return(
        <main style={{backgroundImage: `url(${Stars})`}}>
        <div className='twinkling' style={{background: `transparent url(${Twinkling}) repeat top center`}}></div>
            <div className='projectPage'>
                <div className='projectPageIntro'>
                    <p>PROJECT 2</p>
                    <div className='otherPageLang'>
                        <button onClick={() => setLang(lang ==='Korean' ? 'English' : 'Korean')} style={{opacity: lang === 'Korean' && '0.5'}}>한국어</button>
                        <button onClick={() => setLang(lang === 'English' ? 'Korean' : 'English')} style={{opacity: lang === 'English' && '0.5'}}>ENGLISH</button>
                    </div>
                </div>
                <div className='project'>
                    <div className='pacBoy' style={{bottom: '-15px'}}/>
                    <div className='projectImage'>
                        {lang === 'English' ? <span className='tip'><MouseIcon sx={{fontSize: '1rem', color: 'white', marginRight: '5px'}}/>HOVER OVER IMAGE TO READ ABOUT EACH PAGE</span> : <span className='tip'><MouseIcon sx={{fontSize: '1rem', color: 'white', marginRight: '5px'}}/>마우스를 이미지에 올려 페이지 설명 읽기</span>}
                        {index1 === 0 && <div className='image1'>
                            <img src={Project1Main} alt='project2'/>
                            {lang === 'English' ? <div className='image1Desc'>
                                <span style={{marginBottom: '0.5rem'}}>Main Page</span>
                                <div className='image1DescContent'>
                                        <span>This is the main page. For the main page, I worked on the design and frontend. For the overall design, I wanted to make it simple and clear with blue and gray as the theme colors. Since users can upload banners and pictures they want to decorate their platforms, and it might look messy if there's a lot of colors used. For most parts, I used thin borders with no background color instead of using full background colors. On the top half of the page are draggable category cards. They can be dragged left and right to view more cards, and clicking on each card redirects the page show all quizzes under the selected category. 
                                            On the bottom half are recently created quizzes and platforms. 
                                        </span>
                                        <span>★ On the bottom of each platform card, it shows the owner of the platform and number of subscribers it has at the moment.</span>
                                        <span>★ There are heart buttons on the platform users can click to subsribe to them without having to actually visit the platform.</span>
                                    </div>
                                </div> 
                                : <div className='image1Desc'>
                                    <span style={{marginBottom: '0.5rem'}}>메인 페이지</span>
                                    <div className='image1DescContent'>
                                        <span>로그인 후 첫 페이지입니다. 왼쪽은 위젯, 오른쪽은 일기장 페이지입니다. 왼쪽과 오른쪽 컴포넌트로 나누어 설정 및 영역은 각각 적용되고, 위젯과 스티커는 왼쪽 영역 내에서 자유롭게 배치할 수 있습니다.</span>
                                        <span>★ ResizeObserver를 통해 화면 크기 변화를 감지하여 화면이 작아져도 위젯이 왼쪽 페이지 영역을 벗어나지 않게 만들었습니다.</span>
                                        <span>★ Redux를 이용해 현재 표시할 날짜를 저장하고 달력 위젯에서 원하는 날짜를 고르면 왼쪽 위젯과 오른쪽 일기가 바뀐 날짜에 맞춰 바뀝니다.</span>
                                        <span>★ 로그인에 성공하면 서버에 이틀 후에 만료되는 쿠키를 저장하고, 클라이언트와 DB에는 유저 아이디가 담긴 토큰을 저장해서 로그인 상태를 유지하지만 쿠키가 만료되거나 유저가 로그아웃 하면 토큰을 지웁니다.</span>
                                    </div>
                            </div>}
                        </div>}
                        {index1 === 0 && <div className='image1'>
                            <img src={Project1MyPage} alt='project2'/>
                            {lang === 'English' ? <div className='image1Desc'>
                                <span style={{marginBottom: '0.5rem'}}>My Page</span>
                                <div className='image1DescContent'>
                                        <span>This is what the My Page looks like. For the this page, I worked on the design and frontend. The user can click on the gear icon to change their username and profile picture. On the right side, it shows the platforms the user owns and subscribed platforms.  
                                        </span>
                                        <span>★ Accuracy is the percentage of user's correct answer to the number of questions user has answered, and both values are saved in the DB for each user. </span>
                                        <span>★ User's exp bar shows how close the user is to leveling up, which is calculated by dividing user's exp to the required exp for the next level</span>
                                    </div>
                                </div> 
                                : <div className='image1Desc'>
                                    <span style={{marginBottom: '0.5rem'}}>메인 페이지</span>
                                    <div className='image1DescContent'>
                                        <span>유저 프로필을 바꿀 수 있는 마이페이지입니다. 왼쪽과 오른쪽 컴포넌트로 나누어 설정 및 영역은 각각 적용되고, 위젯과 스티커는 왼쪽 영역 내에서 자유롭게 배치할 수 있습니다.</span>
                                        <span>★ ResizeObserver를 통해 화면 크기 변화를 감지하여 화면이 작아져도 위젯이 왼쪽 페이지 영역을 벗어나지 않게 만들었습니다.</span>
                                        <span>★ Redux를 이용해 현재 표시할 날짜를 저장하고 달력 위젯에서 원하는 날짜를 고르면 왼쪽 위젯과 오른쪽 일기가 바뀐 날짜에 맞춰 바뀝니다.</span>
                                        <span>★ 로그인에 성공하면 서버에 이틀 후에 만료되는 쿠키를 저장하고, 클라이언트와 DB에는 유저 아이디가 담긴 토큰을 저장해서 로그인 상태를 유지하지만 쿠키가 만료되거나 유저가 로그아웃 하면 토큰을 지웁니다.</span>
                                    </div>
                            </div>}
                        </div>}
                        {index1 === 0 && <div className='image1'>
                            <img src={Project1QuizEdit} alt='project2'/>
                            {lang === 'English' ? <div className='image1Desc'>
                                <span style={{marginBottom: '0.5rem'}}>My Page</span>
                                <div className='image1DescContent'>
                                        <span>This is the quiz edit page for creating a quiz or editing an existing quiz. For the this page, I only worked on the design.
                                        <span>★ On the bottom of each platform card, it shows the owner of the platform and number of subscribers it has at the moment.</span>
                                        <span>★ There are heart buttons on the platform users can click to subsribe to them without having to actually visit the platform.</span>
                                    </div>
                                </div> 
                                : <div className='image1Desc'>
                                    <span style={{marginBottom: '0.5rem'}}>메인 페이지</span>
                                    <div className='image1DescContent'>
                                        <span>로그인 후 첫 페이지입니다. 왼쪽은 위젯, 오른쪽은 일기장 페이지입니다. 왼쪽과 오른쪽 컴포넌트로 나누어 설정 및 영역은 각각 적용되고, 위젯과 스티커는 왼쪽 영역 내에서 자유롭게 배치할 수 있습니다.</span>
                                        <span>★ ResizeObserver를 통해 화면 크기 변화를 감지하여 화면이 작아져도 위젯이 왼쪽 페이지 영역을 벗어나지 않게 만들었습니다.</span>
                                        <span>★ Redux를 이용해 현재 표시할 날짜를 저장하고 달력 위젯에서 원하는 날짜를 고르면 왼쪽 위젯과 오른쪽 일기가 바뀐 날짜에 맞춰 바뀝니다.</span>
                                        <span>★ 로그인에 성공하면 서버에 이틀 후에 만료되는 쿠키를 저장하고, 클라이언트와 DB에는 유저 아이디가 담긴 토큰을 저장해서 로그인 상태를 유지하지만 쿠키가 만료되거나 유저가 로그아웃 하면 토큰을 지웁니다.</span>
                                    </div>
                            </div>}
                        </div>}
                        <div className='projectImageButtons'>
                            <ArrowBackIosIcon sx={{marginLeft: '0.6rem', fontSize: '1.2rem', color: 'black', cursor: 'pointer', marginBottom: '2px'}} onClick={() => setIndex1(index1 > 0 ? index1-1 : project1.length-1)}/>
                            <span>{index1+1}/{project1.length}</span>
                            <ArrowForwardIosIcon sx={{fontSize: '1.2rem', color: 'black', cursor: 'pointer', marginBottom: '2px', marginRight: '0.3rem'}} onClick={() => setIndex1(index1 < project1.length-1 ? index1+1 : 0)}/>
                        </div>
                    </div>
                    <div className='projectLower' style={{marginLeft: '1.5rem', width: '55%'}}>
                        <div className='projectName'>
                            <div className='projectTitle'>
                                <span>BLUE SPACE</span>
                                {showMoon && <img className='moon' src={Moon} alt='moon' style={{width: '30px', height: '30px'}} onClick={() => handleClickThunder('moon')}/>}
                            </div>
                            {lang === 'English' ? <span className='projectTitleDetail'>3 People Project</span> : <span className='projectTitleDetail'>3인 그룹 프로젝트</span>}
                        </div>
                        <div className='projectDetail'>
                            {lang === 'English' && <div className='descriptionKor'><span>Blue Space is a quiz-making website where users select a category of their choice and create quizzes on the topic.
                                    Users can test their knowledge and compete with other users by taking the quizzes. 
                                    Like YouTube channels, users manage their own platforms and can subscribe to others'.
                                    Points are earned for correct answers, which can be used to purchase shop items or obtain hints while taking quizzes.</span>
                                <div className='descriptionKor2'>
                                    <span style={{color: 'cyan'}}>Major Features</span><span style={{marginBottom: '1rem'}}>Google Auth Login, Create Platforms, Create Quizzes, Take Quizzes, Leaderboard, Item Shop, Customizable Profile</span>
                                    <span style={{color: 'cyan'}}>My Roles</span><span style={{marginBottom: '1rem'}}>Figma Design, Leaderboard Page (back & front), Shop Page (back & front), Quiz Taking Page (back & front), My Page (front only), Main Page (front only)</span>
                                    <span style={{color: 'cyan'}}>Stacks Used</span>
                                    <div className='stacks'>
                                        <img alt='project1' src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
                                        <img alt='project1' src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
                                        <img alt='project1' src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/> 
                                        <img alt='project1' src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
                                        <img alt='project1' src="https://img.shields.io/badge/mui-007FFF?style=for-the-badge&logo=Mui&logoColor=white"/>
                                        <img alt='project1' src="https://img.shields.io/badge/mongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white"/>
                                        <img alt='project1' src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white"/>
                                        <img alt='project1' src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"/>
                                        <img alt='project1' src="https://img.shields.io/badge/heroku-430098?style=for-the-badge&logo=Heroku&logoColor=white"/>
                                    </div>
                                </div>    
                            </div>}
                            {lang === 'Korean' && <div className='descriptionKor'><span>Blue Space는 유저가 카테고리를 골라 퀴즈를 만들고 다른 유저와 그 분야의 지식을 겨룰 수 있는 퀴즈 사이트입니다. 
                                유저는 유튜브 채널처럼 본인의 플랫폼과 퀴즈를 관리하고 다른 유저가 만든 퀴즈를 풀거나 플랫폼에 구독할 수 있습니다. 
                                퀴즈를 풀어 포인트를 얻고 상점 아이템을 사거나, 퀴즈를 풀 때 힌트 찬스를 사용할 수 있습니다.</span>
                                <div className='descriptionKor2'>
                                    <span style={{color: 'cyan'}}>주요 기능</span><span style={{marginBottom: '1rem'}}>구글 로그인, 플랫폼 생성, 퀴즈 제작, 퀴즈 풀기, 순위표, 아이템 상점, 커스터마이징 가능한 프로필</span>
                                    <span style={{color: 'cyan'}}>나의 역할</span><span style={{marginBottom: '1rem'}}>Figma 디자인, 순위표 페이지 (back & front), 상점 페이지 (back & front), 퀴즈 푸는 페이지 (back & front), 마이페이지 (front only), 메인 페이지 (front only)</span>
                                    <span style={{color: 'cyan'}}>사용 스택</span>
                                    <div className='stacks'>
                                        <img alt='project1' src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
                                        <img alt='project1' src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
                                        <img alt='project1' src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/> 
                                        <img alt='project1' src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
                                        <img alt='project1' src="https://img.shields.io/badge/mui-007FFF?style=for-the-badge&logo=Mui&logoColor=white"/>
                                        <img alt='project1' src="https://img.shields.io/badge/mongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white"/>
                                        <img alt='project1' src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white"/>
                                        <img alt='project1' src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"/>
                                        <img alt='project1' src="https://img.shields.io/badge/heroku-430098?style=for-the-badge&logo=Heroku&logoColor=white"/>
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
                                    <a href="https://github.com/Subii98/Blue-Space" rel="noopener noreferrer" target="_blank"><span>GITHUB<span style={{fontSize: '1rem'}}> (ORIGINAL)</span></span></a>
                                </div>
                                <div className='description'>
                                    {showFruit5 && <img className="watermelon" src={Watermelon} alt="watermelon" style={{width: '30px', height: '35px', display: showFruit5, position: 'relative'}} onClick={() => handleClickFruit('watermelon')}/>}
                                    {(showScore && clicked === 'watermelon') && <span style={{color: 'cyan'}}>{score}</span>}
                                    <a href="https://github.com/Subii98/Blue-Space-Update" rel="noopener noreferrer" target="_blank"><span>GITHUB<span style={{fontSize: '1rem'}}> (CSS FIX)</span></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='projectFooter'>
                        <div className='scoreInfo'>
                            <span className='score'>SCORE</span>
                            <span style={{color: 'cyan', marginLeft: '1rem'}}>{score}</span>
                        </div>
                        <span style={{marginLeft: '7rem', fontSize: '1.3rem', marginTop: '0.5rem'}}>{found}/3 FRUITS</span>
                        <div className='livesInfo'>
                            <span className='lives'>LIVES</span>
                            {[...Array(life).keys()].map((item, index) => (
                                <img src={AlienCyan} key={index} alt='alienCyan' className='alienCyan'/>
                            ))}
                        </div>
                    </div>

            </div>
        </main>
    )
}
export default Projects;
