import { useEffect, useState } from 'react';
import Twinkling from '../icons/twinkling.png';
import Stars from '../icons/stars.png';
import Cherry from '../icons/orange.png';
import Grape from '../icons/banana.png';
import AlienCyan from '../icons/alien-cyan.png';
import Strawberry from '../icons/strawberry.png';
import Cheese from '../icons/dollar.png';
import CoinPick from "../music/coin-collect-retro-8-bit-sound-effect-145251.mp3"
import Hurt from "../music/hurt_c_08-102842.mp3";

import Project3Main from '../images/project3-main.png';
import Project3Contact from '../images/project3-contact.png';
import Project3About from '../images/project3-about.png';
import Project3Other from '../images/project3-other.png';
import Project3Project from '../images/project3-project.png';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MouseIcon from '@mui/icons-material/Mouse';

function Projects3({score, life, onSetScore, onSetLife, lang, setLang, onSetMenu}) {
    const [showFruit2, setShowFruit2] = useState(true);
    const [showFruit4, setShowFruit4] = useState(true);
    const [showFruit5, setShowFruit5] = useState(true);
    const [clicked, setClicked] = useState('');
    const [showScore, setShowScore] = useState(false);
    const [showCheese, setShowCheese] = useState(true);
    const [index1, setIndex1] = useState(0);
    const [found, setFound] = useState(0);

    const project1 = [Project3Main, Project3About, Project3Project, Project3Other, Project3Contact];

    useEffect(() => {
        const audio = new Audio(CoinPick);
        audio.pause();
    }, [])

    const handleClickFruit = (e) => {
        if (e === 'cherry') {
            setShowFruit2(false);
            setFound(found+1);
        }
        if (e === 'grape') {
            setShowFruit4(false);
            setFound(found+1);
        }
        if (e === 'strawberry') {
            setShowFruit5(false);
            setFound(found+1);
        }
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
        if (e === 'cheese') setShowCheese(false);
        const audio = new Audio(Hurt);
        audio.play();
        if (life > 0) onSetLife(life-1)
        else onSetLife(0)
        setInterval(() => {
            audio.pause();
        }, 400)
    }

    return(
        <main style={{backgroundImage: `url(${Stars})`}}>
        <div className='twinkling' style={{background: `transparent url(${Twinkling}) repeat top center`}}></div>
            <div className='projectPage'>
                <div className='projectPageIntro'>
                    <p>PROJECT 3</p>
                    <div className='otherPageLang'>
                        <button onClick={() => setLang(lang ==='Korean' ? 'English' : 'Korean')} style={{opacity: lang === 'Korean' && '0.5'}}>한국어</button>
                        <button onClick={() => setLang(lang === 'English' ? 'Korean' : 'English')} style={{opacity: lang === 'English' && '0.5'}}>ENGLISH</button>
                    </div>
                </div>
                <div className='project'>
                    <div className='pacBoy'/>
                    <div className='projectImage2'>
                    {lang === 'English' ? <span className='tip'><MouseIcon sx={{fontSize: '1rem', color: 'white', marginRight: '5px'}}/>HOVER OVER IMAGE TO READ ABOUT EACH PAGE</span> : <span className='tip'><MouseIcon sx={{fontSize: '1rem', color: 'white', marginRight: '5px'}}/>마우스를 이미지에 올려 페이지 설명 읽기</span>}
                        {index1 === 0 && <div className='image3'>
                            <img src={Project3Main} alt='project2'/>
                            {lang === 'English' ? <div className='image3Desc'>
                                <span style={{marginBottom: '0.5rem'}}>Main Page</span>
                                <div className='image3DescContent'>
                                        <span>This is the main page after logging in. Left side is for widgets, and right side is for writing posts. Left and Right are separate components, and thus the settings and boundaries apply individually. Widgets and stickers can be moved freely within the Left boundary.</span>
                                        <span>★ I used ResizeObserver to detect window size change so that the widgets never leave the left page boundary even when screen size gets smaller.</span>
                                        <span>★ I used Redux to store current displayed date, and clicking on any date on the Calendar widget allows both Left and Right to change according to the new picked date.</span>
                                        <span>★ Cookie with max age 2 days is saved on the server when user logs in successfully and token is set for client side and DB to keep login state. And the token is deleted when cookie expires or when the user logs out.</span>
                                    </div>
                                </div> 
                                : <div className='image3Desc'>
                                    <span style={{marginBottom: '0.5rem'}}>홈페이지</span>
                                    <div className='image3DescContent'>
                                        <span>레트로 게임 시작 화면처럼 디자인한 홈페이지입니다. 마우스 클릭으로 메뉴를 선택하거나, 실제 키보드 위 아래 화살표를 누르거나, 화면 속 미니 키보드와 화살표를 클릭해서 메뉴를 이동할 수 있습니다. 
                                            미니 키보드는 키를 누르는 대신 클릭하는 방식이며 실제 키보드와 똑같이 작동하고 My name is 소개 메세지 애니메이션이 재생되고난 뒤 1500 ms 후 키보드를 테스트할 수 있는 화면으로 전환됩니다. </span>
                                        <span>★ 몬스터에 keyframe 애니메이션을 적용해 유저가 메뉴를 선택하면 먼저 점프 애니메이션을 재생하고, setInterval로 일정 시간 뒤에 메뉴를 이동하게 만들었습니다.</span>
                                        <span>★ 모든 메뉴 페이지는 한 div에 전부 포함시키고, 페이지 당 section 태그로 100vh 화면 크기를 정하고, scroll-snap 속성을 사용해 마우스 스크롤 시에 페이지가 전환되게 했습니다. </span>
                                        <span>★ 메뉴 선택시에는 해당 메뉴의 순서와 window.innerHeight를 곱하고 scrollTo 함수를 사용해서 페이지를 이동합니다.</span>
                                    </div>
                                </div>}
                        </div>}
                        {index1 === 1 && <div className='image3'>
                            <img src={Project3About} alt='project2'/>
                            {lang === 'English' ? <div className='image3Desc'>
                                <span style={{marginBottom: '0.5rem'}}>Sticker Maker</span>
                                <div className='image3DescContent'>
                                        <span>This is Sticker Maker, which shows up after user uploaded a picture of their choice through 'Add Pic' button on the bottom right side of the Left page. Users can move the sliders to zoom in and out, rotate the image, and choose a circle or rectangle or square frame for the sticker. 
                                            After saving the settings by clicking DONE, the sticker is now movable like other widgets and could be temporary hidden or permanently deleted by changing settings.
                                        </span>
                                        <span>★ The original image of the sticker is saved to the S3 bucket, and zoom, rotate, frame values for each sticker are saved to the DB so that it applys correctly to the image.</span>
                                        <span>★ When user removes the sticker, API request to remove the settings in the DB and the base image in S3 bucket is called so that the sticker is completely removed. </span>
                                    </div>
                                </div> 
                                : <div className='image3Desc'>
                                    <span style={{marginBottom: '0.5rem'}}>About Me 페이지</span>
                                    <div className='image3DescContent'>
                                        <span>마우스를 누르면 미사일을 발사하고 몬스터를 파괴할 수 있는 슈팅 게임을 포함한 소개 페이지입니다. 마우스 클릭으로 시작하면 게임이 시작되고 몬스터와 글씨를 포함해 총 9개의 타겟이 있습니다. 미사일을 쏴서 맞추면 몬스터는 파괴되고, 글씨는 네온사인이 꺼지고 픽셀화됩니다. 
                                        </span>
                                        <span>★ 마우스를 클릭하면 숨겨두었던 미사일 div를 보이게 하고 클릭한 마우스 x, y 위치에서부터 수직으로 이동하는 keyframe 애니메이션과 효과음을 재생합니다. </span>
                                        <span>★ ResizeObserver와 element.getBoundingClientRect를 사용해서 화면 크기가 바뀌더라도 타겟의 위치를 가져올 수 있게 했습니다. </span>
                                        <span>★ Document.querySelector를 사용해 이동하는 미사일의 위치를 가져오고 미사일과 타겟의 위치가 겹치면 해당 타겟이 파괴됩니다. </span>
                                        <span>★ 애니메이션에 animationend eventlistener를 추가해서 미사일이 아무것도 맞추지 않아도 애니메이션이 종료되면 미사일 div를 다시 숨기고, 렉에 걸릴 경우에 대비해 setinterval을 사용하여 처음 발사 후 1100ms가 지나면 미사일을 숨깁니다. </span>
                                    </div>
                                </div>}
                        </div>}
                        {index1 === 2 && <div className='image3'>
                            <img src={Project3Project} alt='project2'/>
                            {lang === 'English' ? <div className='image3Desc'>
                                <span style={{marginBottom: '0.5rem'}}>Todo Widget & Diary Entries Slider</span>
                                <div className='image3DescContent'>
                                        <span>On the left is an example of editing Todo List widget. Click on + to add more todos, check button to save, x button to remove a todo. Or make the widget itself invisible by changing the settings. The default face on the bottom of the Todo Widget is the frowning face, but it turns into a smiling face when finishing all the todos. 
                                            On the right is what the post looks like after saving it. Users can move the slider on the bottom or click on the arrow buttons to view other posts that have been written on different dates. Or directly choose a date on the Calendar widget on the left to view a post written on that date.
                                        </span>
                                        <span>★ The Todo List is unique to each day so that users can have different goals everyday. </span>
                                        <span>★ Todo list is saved each day with the user id, server retrieves all todo list of different dates with matching user id, and display the todo list of the selected date. </span>
                                    </div>
                                </div> 
                                : <div className='image3Desc'>
                                    <span style={{marginBottom: '0.5rem'}}>Projects 페이지</span>
                                    <div className='image3DescContent'>
                                        <span>과일 아이콘을 눌러 점수를 얻는 미니 게임을 포함한 프로젝트 소개 페이지입니다. 이미지 하단 화살표를 눌러 이전/다음 이미지로 넘길 수 있고, 마우스를 올려 설명을 읽을 수 있습니다. 배포 주소, 깃허브 버튼 등을 눌러 해당 웹사이트로 이동할 수 있습니다.
                                        </span>
                                        <span>★ 입을 여닫는 애니메이션과 움직이는 애니메이션을 만들어 상단 팩맨 모양이 프로젝트 프레임을 따라 움직이게 만들었습니다. </span>
                                        <span>★ 과일을 클릭하면 점수가 보이게 하고 효과음을 재생하고 일정 시간 뒤에 사라지게 만들고, 과일이 아닌 사물을 클릭하면 남은 목숨을 깎고 효과음을 재생합니다. </span>
                                    </div>
                                </div>}
                        </div>}
                        {index1 === 3 && <div className='image3'>
                            <img src={Project3Other} alt='project2'/>
                            {lang === 'English' ? <div className='image3Desc'>
                                <span style={{marginBottom: '0.5rem'}}>Move Mode</span>
                                <div className='image3DescContent'>
                                        <span>This is after clicking Move button on the bottom right of the Left page. The yellow cross appears on the center of each widget and sticker, and users can click on the cross to freely drag the widgets within the Left boundary.
                                             Clicking the Move button saves the current positions of all widgets and stickers.
                                        </span>
                                        <span>★ Positions of widgets and stickers are saved to the DB to preserve the positions when logging in fresh or refreshing the page.</span>
                                        <span>★ Edit mode is save as boolean using Redux so that all widgets turns movable when edit mode is on. </span>
                                    </div>
                                </div> 
                                : <div className='image3Desc'>
                                    <span style={{marginBottom: '0.5rem'}}>Other 페이지</span>
                                    <div className='image3DescContent'>
                                        <span>CSS만으로 만든 게임기입니다. 게임기 상단 스위치를 클릭해서 전원을 켤 수 있고, 효과음과 함께 로딩 후 이미지가 나타납니다. 게임기 버튼을 클릭해서 다음 이미지를 볼 수 있고, 화면이 작아서 버튼이 다 보이지 않을 경우를 대비해 모든 버튼은 동일하게 다음 이미지를 보여주게 만들었습니다. 
                                            또는 유저 키보드의 좌우 화살표 키를 눌러서 이전/다음 이미지를 볼 수 있습니다.
                                        </span>
                                        <span>★ Box-shadow와 outline을 사용해 디테일한 명암을 넣었습니다.</span>
                                        <span>★ Keydown eventlistener를 적용해 키보드 좌우 화살표 키를 눌렀을 때도 이미지를 전환하게 만들었습니다.</span>
                                    </div>
                                </div>}
                        </div>}
                        {index1 === 4 && <div className='image3'>
                            <img src={Project3Contact} alt='project2'/>
                            {lang === 'English' ? <div className='image3Desc'>
                                <span style={{marginBottom: '0.5rem'}}>Diary (Social Media Theme)</span>
                                <div className='image3DescContent'>
                                        <span>Clicking on the pen button on the Right page opens diary writing page. Users can give it a title, select a weather, upload image. The default theme is Social Media theme with an image, but users can click on the gear settings button to change the theme to Plain Text or turn on the grid on the background. 
                                                The Lock button makes the post private, and the user's friends can not view the post. After saving the post, users can bookmark the post, change style settings again, like the post, or permanently delete it.
                                        </span>
                                        <span>★ Style settings is saved individually to the DB, so Social Media / Memo theme and grid background can be applied separately for each post. </span>
                                        <span>★ Any image file uploaded before saving the post is temporary presented via URL.createObjectURL, and is saved to the S3 bucket on clicking SAVE. </span>
                                    </div>
                                </div> 
                                : <div className='image3Desc'>
                                    <span style={{marginBottom: '0.5rem'}}>Contact 페이지</span>
                                    <div className='image3DescContent'>
                                        <span>레트로 게임의 순위표처럼 디자인한 연락처 페이지입니다. 세글자 이니셜을 입력하고 ENT를 클릭해서 미니 게임 점수를 올린 뒤 모습입니다. 돌아가는 코인을 클릭하면 다시 홈페이지로 돌아갑니다.
                                        </span>
                                        <span>★ 스크롤을 올릴때는 -1, 내릴때는 +1으로 현재 스크롯 횟수를 상태에 저장하고 페이지 번호 === 5 조건문으로 페이지 div의 key를 다르게 설정해 스크롤해서 다른 페이지로 나갔다 돌아와도 CONTACT 제목 애니메이션이 재생되게 했습니다.</span>
                                        <span>★ 유저의 현재 점수와 남은 목숨 상태를 Redux 스토어에서 가져옵니다.</span>
                                        <span>★ 깃허브와 링크드인 아이콘을 눌러 해당 페이지로 이동할 수 있습니다.</span>
                                    </div>
                                </div>}
                        </div>}
                        <div className='projectImageButtons'>
                            <ArrowBackIosIcon sx={{marginLeft: '0.6rem', fontSize: '1.2rem', color: 'black', cursor: 'pointer', marginBottom: '2px'}} onClick={() => setIndex1(index1 > 0 ? index1-1 : project1.length-1)}/>
                            <span>{index1+1}/{project1.length}</span>
                            <ArrowForwardIosIcon sx={{fontSize: '1.2rem', color: 'black', cursor: 'pointer', marginBottom: '2px', marginRight: '0.3rem'}} onClick={() => setIndex1(index1 < project1.length-1 ? index1+1 : 0)}/>
                        </div>
                    </div>
                    <div className='projectLower'>
                        <div className='projectName'>
                            <div className='projectTitle'>
                                <span>PORTFOLIO</span>
                                {showCheese && <img className='cheese' src={Cheese} alt='cheese' style={{width: '30px', height: '30px'}} onClick={() => handleClickThunder('cheese')}/>}
                            </div>
                            {lang === 'English' ? <span className='projectTitleDetail'>1 Person Project</span> : <span className='projectTitleDetail'>1인 개인 프로젝트</span>}
                        </div>
                        <div className='projectDetail'>
                            {lang === 'English' && <div className='descriptionKor'>
                                <span>This portfolio is a frontend project to implement different ideas I had and try out various functions. Main theme is retro arcade game, but each page has its own concept inspired by different arcade games. 
                                </span>
                            <div className='descriptionKor2'>
                                <span style={{color: 'cyan'}}>Major Features</span><span style={{marginBottom: '1rem'}}>Mini CSS keyboard, audio sound effects, scrollable sections, shooting game, keyframe animations, pure CSS gameboy</span>
                                <span style={{color: 'cyan'}}>My Roles</span><span style={{marginBottom: '1rem'}}>Design, Frontend, Deloyment</span>
                                <span style={{color: 'cyan'}}>Stacks Used</span>
                                <div className='stacks'>
                                    <img alt='project2' src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
                                    <img alt='project2' src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
                                    <img alt='project2' src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white"/>
                                    <img alt='project2' src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/> 
                                    <img alt='project2' src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
                                    <img alt='project2' src="https://img.shields.io/badge/mui-007FFF?style=for-the-badge&logo=Mui&logoColor=white"/>
                                    <img alt='project2' src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"/>
                                    <img alt='project2' src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=Netlify&logoColor=white"/>
                                </div>
                            </div>    
                            </div>}
                            {lang === 'Korean' && <div className='descriptionKor'><span>다양한 아이디어를 구현 해보고, 새로운 기능을 시도하기 위해 만든 프론트엔드 프로젝트이자 포트폴리오입니다. 메인 테마는 레트로 아케이드 게임이며, 각 페이지는 각자 다른 게임에서 영감을 받아 디자인 했습니다. 
                            </span>
                            <div className='descriptionKor2'>
                                <span style={{color: 'cyan'}}>주요 기능</span><span style={{marginBottom: '1rem'}}>미니 키보드, 오디오 효과음, 스크롤 가능한 페이지, 슈팅 게임, Keyframe 애니메이션, CSS 게임기</span>
                                <span style={{color: 'cyan'}}>나의 역할</span><span style={{marginBottom: '1rem'}}>디자인, 프론트엔드, 배포</span>
                                <span style={{color: 'cyan'}}>사용 스택</span>
                                <div className='stacks'>
                                    <img alt='project2' src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=black"/>
                                    <img alt='project2' src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=React&logoColor=black"/>
                                    <img alt='project2' src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white"/>
                                    <img alt='project2' src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/> 
                                    <img alt='project2' src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
                                    <img alt='project2' src="https://img.shields.io/badge/mui-007FFF?style=for-the-badge&logo=Mui&logoColor=white"/>
                                    <img alt='project2' src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"/>
                                    <img alt='project2' src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=Netlify&logoColor=white"/>
                                </div>
                            </div>    
                            </div>}
                            <div className='descriptionButtons'>
                                <div className='description'>
                                    {showFruit2 && <img className="cherry" src={Cherry} alt="cherry" style={{width: '30px', height: '35px', display: showFruit2, position: 'relative'}} onClick={() => handleClickFruit('cherry')}/>}
                                    {(showScore && clicked === 'cherry') && <span style={{color: 'cyan'}}>{score}</span>}
                                    <a href="https://seongeunpark.com" rel="noopener noreferrer" target="_blank"><span>URL</span></a>
                                </div>
                                <div className='description'>
                                    {showFruit5 && <img className='strawberry' src={Strawberry} alt='strawberry' style={{width: '30px', height: '30px'}} onClick={() => handleClickFruit('strawberry')}/>}
                                    <a href="https://github.com/seoeongeueun/portfolio" rel="noopener noreferrer" target="_blank"><span>GITHUB</span></a>
                                </div>
                                <div className='description'>
                                    {showFruit4 && <img className="grape" src={Grape} alt="grape" style={{width: '30px', height: '35px', display: showFruit2, position: 'relative'}} onClick={() => handleClickFruit('grape')}/>}
                                    {(showScore && clicked === 'grape') && <span style={{color: 'cyan'}}>{score}</span>}
                                    <a href="https://github.com/seoeongeueun/react-keyboard" rel="noopener noreferrer" target="_blank"><span>KEYBOARD</span></a>
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
export default Projects3;