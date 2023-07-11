import { useEffect, useState } from 'react';
import Twinkling from '../icons/twinkling.png';
import Stars from '../icons/stars.png';
import Cherry from '../icons/cherry.png';
import Grape from '../icons/grape.png';
import AlienCyan from '../icons/alien-cyan.png';
import Thunder from '../icons/thunder.png';
import Cheese from '../icons/cheese.png';
import CoinPick from "../music/coin-collect-retro-8-bit-sound-effect-145251.mp3"
import Hurt from "../music/hurt_c_08-102842.mp3";

import Project2Main from '../images/project2-main.png';
import Project2Signup from '../images/project2-signup.png';
import Project2Right from '../images/project2-right.png';
import Project2Sticker from '../images/project2-sticker.png';
import Project2Edit from '../images/project2-edit.png';
import Project2Todo from '../images/project2-todo.png';
import Project2Search from '../images/project2-search.png';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Projects2({score, life, onSetScore, onSetLife, lang, setLang, onSetMenu}) {
    const [showFruit2, setShowFruit2] = useState(true);
    const [showFruit4, setShowFruit4] = useState(true);
    const [clicked, setClicked] = useState('');
    const [showScore, setShowScore] = useState(false);
    const [showThund, setShowThund] = useState(true);
    const [showCheese, setShowCheese] = useState(true);
    const [index1, setIndex1] = useState(0);
    const [found, setFound] = useState(0);

    const project1 = [Project2Main, Project2Sticker, Project2Edit, Project2Right, Project2Todo, Project2Search, Project2Signup];

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
                    <p>PROJECT 2</p>
                    <div className='otherPageLang'>
                        <button onClick={() => setLang(lang ==='Korean' ? 'English' : 'Korean')} style={{opacity: lang === 'Korean' && '0.5'}}>한국어</button>
                        <button onClick={() => setLang(lang === 'English' ? 'Korean' : 'English')} style={{opacity: lang === 'English' && '0.5'}}>ENGLISH</button>
                    </div>
                </div>
                <div className='project'>
                    <div className='projectImageAndDetail'>
                        <div className='projectImage2'>
                            {index1 === 0 && <div className='image2'>
                                <img src={Project2Main} alt='project2'/>
                                {lang === 'English' ? <div className='image2Desc'>
                                    <span style={{marginBottom: '1rem'}}>Main Page</span>
                                    <div className='image2DescContent'>
                                            <span>This is the main page after logging in. Left side is for widgets, and right side is for writing posts. Left and Right are separate components, and thus the settings and boundaries apply individually. Widgets and stickers can be moved freely within the Left boundary.</span>
                                            <span>★ I used ResizeObserver to detect window size change so that the widgets never leave the left page boundary even when screen size gets smaller.</span>
                                            <span>★ I used Redux to store current displayed date, and clicking on any date on the Calendar widget allows both Left and Right to change according to the new picked date.</span>
                                            <span>★ Cookie with max age 2 days is saved on the server when user logs in successfully and token is set for client side and DB to keep login state. And the token is deleted when cookie expires or when the user logs out.</span>
                                        </div>
                                    </div> 
                                    : <div className='image2Desc'>
                                        <span style={{marginBottom: '1rem'}}>메인 페이지</span>
                                        <div className='image2DescContent'>
                                            <span>로그인 후 첫 페이지입니다. 왼쪽은 위젯, 오른쪽은 일기장 페이지입니다. 왼쪽과 오른쪽 컴포넌트로 나누어 설정 및 영역은 각각 적용되고, 위젯과 스티커는 왼쪽 영역 내에서 자유롭게 배치할 수 있습니다.</span>
                                            <span>★ ResizeObserver를 통해 화면 크기 변화를 감지하여 화면이 작아져도 위젯이 왼쪽 페이지 영역을 벗어나지 않게 만들었습니다.</span>
                                            <span>★ Redux를 이용해 현재 표시할 날짜를 저장해서 달력 위젯에서 원하는 날짜를 고르면 왼쪽 위젯과 오른쪽 일기가 바뀐 날짜에 맞춰 바뀌게 만들었습니다.</span>
                                            <span>★ 로그인에 성공하면 서버에 이틀 후에 만료되는 쿠키를 저장하고, 클라이언트와 DB에는 유저 아이디가 담긴 토큰을 저장해서 로그인 상태를 유지하지만 쿠키가 만료되거나 유저가 로그아웃 하면 토큰을 지우게 했습니다.</span>
                                        </div>
                                    </div>}
                            </div>}
                            {index1 === 1 && <div className='image2'>
                                <img src={Project2Sticker} alt='project2'/>
                                {lang === 'English' ? <div className='image2Desc'>
                                    <span style={{marginBottom: '1rem'}}>Sticker Maker</span>
                                    <div className='image2DescContent'>
                                            <span>This is Sticker Maker, which shows up after user uploaded a picture of their choice through 'Add Pic' button on the bottom right side of the Left page. Users can move the sliders to zoom in and out, rotate the image, and choose a circle or rectangle or square frame for the sticker. 
                                                After saving the settings by clicking DONE, the sticker is now movable like other widgets and could be temporary hidden or permanently deleted by changing settings.
                                            </span>
                                            <span>★ The original image of the sticker is saved to the S3 bucket, and zoom, rotate, frame values for each sticker are saved to the DB so that it applys correctly to the image.</span>
                                            <span>★ When user removes the sticker, API request to remove the settings in the DB and the base image in S3 bucket is called so that the sticker is completely removed. </span>
                                        </div>
                                    </div> 
                                    : <div className='image2Desc'>
                                        <span style={{marginBottom: '1rem'}}>스티커 만들기</span>
                                        <div className='image2DescContent'>
                                            <span>왼쪽 하단 스티커 추가 버튼을 누르고 유저가 원하는 사진을 고른 후 페이지입니다. 슬라이더를 움직여 원하는 수치대로 확대, 회전을 할 수 있고, 원형, 직사각형, 정사각형 세가지 프레임을 고를 수 있습니다. 
                                                Done 버튼을 눌러서 완성한 뒤 다른 위젯처럼 위치를 이동할 수 있고, 왼쪽 페이지 하단의 스티커 설정을 눌러 임시로 보이지 않게 하거나 완전히 삭제할 수 있습니다.</span>
                                            <span>★ 유저가 올린 스티커 이미지의 원본은 S3 버킷에 저장하고, 각 스티커의 확대, 회전 수치와 프레임 설정은 DB에 저장해서 적용되게 했습니다. </span>
                                            <span>★ 유저가 스티커를 삭제하면 DB에 저장된 스티커 설정과 S3 버킷에 저장된 원본 이미지를 삭제하는 요청을 보내 완전히 삭제합니다. </span>
                                        </div>
                                    </div>}
                            </div>}
                            {index1 === 2 && <div className='image2'>
                                <img src={Project2Edit} alt='project2'/>
                                {lang === 'English' ? <div className='image2Desc'>
                                    <span style={{marginBottom: '1rem'}}>Move Mode</span>
                                    <div className='image2DescContent'>
                                            <span>This is after clicking Move button on the bottom right of the Left page. The yellow cross appears on the center of each widget and sticker, and users can click on the cross to freely drag the widgets within the Left boundary.
                                                 Clicking the Move button saves the current positions of all widgets and stickers.
                                            </span>
                                            <span>★ Positions of widgets and stickers are saved to the DB to preserve the positions when logging in fresh or refreshing the page.</span>
                                            <span>★ Edit mode is save as boolean using Redux so that all widgets turns movable when edit mode is on. </span>
                                        </div>
                                    </div> 
                                    : <div className='image2Desc'>
                                        <span style={{marginBottom: '1rem'}}>이동하기 모드</span>
                                        <div className='image2DescContent'>
                                            <span>왼쪽 페이지의 오른쪽 하단 버튼 중 이동하기 버튼을 누른 후 페이지입니다. 위젯과 스티커 가운데 노란 십자가 버튼을 클릭한 뒤 드래그해서 왼쪽 페이지 내에서 원하는 위치에 위젯을 둘 수 있습니다. 이동하기 버튼을 다시 누르면 설정을 저장합니다.</span>
                                            <span>★ 위젯과 스티커의 위치는 DB에 저장해서 새로고침하거나 다시 로그인해도 위치가 바뀌지 않게 했습니다. </span>
                                            <span>★ 기존 상태에선 드래그해도 위젯이 움직이지 않지만, Redux에 이동하기 모드를 boolean으로 저장해서 모드가 켜지면 모든 위젯 컴포넌트에서 드래그 가능하게 반응하게 했습니다. </span>
                                        </div>
                                    </div>}
                            </div>}
                            {index1 === 3 && <div className='image2'>
                                <img src={Project2Right} alt='project2'/>
                                {lang === 'English' ? <div className='image2Desc'>
                                    <span style={{marginBottom: '1rem'}}>Journal (Social Media Theme)</span>
                                    <div className='image2DescContent'>
                                            <span>Clicking on the pen button on the Right page opens journal writing page. Users can give it a title, select a weather, upload image. The default theme is Social Media theme with an image, but users can click on the gear settings button to change the theme to Plain Text or turn on the grid on the background. 
                                                    The Lock button makes the post private, and the user's friends can not view the post. After saving the post, users can bookmark the post, change style settings again, like the post, or permanently delete it.
                                            </span>
                                            <span>★ Style settings is saved individually to the DB, so Social Media / Memo theme and grid background can be applied separately for each post. </span>
                                            <span>★ Any image file uploaded before saving the post is temporary presented via URL.createObjectURL, and is saved to the S3 bucket on clicking SAVE. </span>
                                        </div>
                                    </div> 
                                    : <div className='image2Desc'>
                                        <span style={{marginBottom: '1rem'}}>일기장 (SNS 테마)</span>
                                        <div className='image2DescContent'>
                                            <span>오른쪽 페이지의 펜 버튼을 누른 후 일기를 작성할 수 있습니다. 제목을 쓰고, 날씨를 고르고, 사진 추가 버튼을 눌러 사진을 업로드할 수 있습니다. 기본 일기 테마는 사진이 포함된 SNS 스타일이지만, 톱니바퀴를 눌러 메모장 스타일로 변경해서 사진 없이 텍스트만 작성하거나, 그리드를 켜서 기존 흰 배경에서 모눈 배경으로 변경 할 수 있습니다. 
                                                자물쇠 버튼을 누르면 비공개로 일기를 작성할 수 있으며, 친구들이 읽을 수 없게 바뀝니다. SAVE를 눌러 저장한 뒤에 일기를 북마크하거나, 스타일 설정을 변경하거나, 좋아요를 누르거나, 완전히 삭제할 수 있습니다.
                                            </span>
                                            <span>★ 스타일 설정은 포스팅별로 DB에 저장되어 SNS / 메모장 테마와 모눈 설정은 일기별로 다르게 지정할 수 있습니다. </span>
                                            <span>★ SAVE를 누르기 전에 업로드된 사진은 URL.createObjectURL을 이용해 임시로 나타나게 하고, SAVE를 눌러 후에는 S3 버킷에 저장합니다.</span>
                                        </div>
                                    </div>}
                            </div>}
                            {index1 === 4 && <div className='image2'>
                                <img src={Project2Todo} alt='project2'/>
                                {lang === 'English' ? <div className='image2Desc'>
                                    <span style={{marginBottom: '1rem'}}>Todo Widget & Journal Posts Slider</span>
                                    <div className='image2DescContent'>
                                            <span>On the left is an example of editing Todo List widget. Click on + to add more todos, check button to save, x button to remove a todo. The default face on the bottom of the Todo Widget is the frowning face, but it turns into a smiling face when finishing all the todos. 
                                                On the right is what the post looks like after saving it. Users can move the slider on the bottom or click on the arrow buttons to view other posts that have been written on different dates. Or directly choose a date on the Calendar widget on the left to view a post written on that date.
                                            </span>
                                            <span>★ The Todo List is unique to each day so that users can have different goals everyday. </span>
                                            <span>★ Todo list is saved each day with the user id, server retrieves all todo list of different dates with matching user id, and display the todo list of the selected date. </span>
                                        </div>
                                    </div> 
                                    : <div className='image2Desc'>
                                        <span style={{marginBottom: '1rem'}}>투두 리스트 & 일기장 슬라이더</span>
                                        <div className='image2DescContent'>
                                            <span>왼쪽은 6가지 위젯 중 투두 리스트 설정의 예시입니다. + 버튼을 눌러 할일을 추가하고 체크 버튼을 눌러 저장하고, x 버튼을 눌러 할 일을 삭제할 수 있습니다. 투두 리스트 하단의 기본 표정은 오른쪽의 슬픈 표정이지만, 모든 할 일을 완료하면 웃는 얼굴로 바뀝니다. 
                                                오른쪽은 바로 전 예시에서 작성 중이었던 일기장을 저장한 뒤에 모습입니다. 하단의 슬라이더를 움직이거나 슬라이더 양쪽의 화살표 버튼을 눌러 기존에 작성한 다른 날짜의 일기로 이동할 수 있습니다. 또는 왼쪽 페이지의 달력에서 날짜를 직접 눌러서 해당 날짜의 일기로 이동할 수도 있습니다.
                                            </span>
                                            <span>★ 매일 다른 목표를 새울 수 있게 투두 리스트는 날짜마다 따로 지정할 수 있게 만들었습니다. </span>
                                            <span>★ 투두 리스트는 유저 id와 함께 날짜별로 DB에 저장하고, 유저 id가 동일한 모든 투두 리스트를 가져온 뒤, 선택된 날짜의 투두 리스트를 하나씩 보여주는 식으로 만들었습니다. </span>
                                        </div>
                                    </div>}
                            </div>}
                            <div className='projectImageButtons'>
                                <ArrowBackIosIcon sx={{marginLeft: '0.5rem', fontSize: '1.2rem', color: 'black', cursor: 'pointer', marginBottom: '2px'}} onClick={() => setIndex1(index1 > 0 ? index1-1 : project1.length-1)}/>
                                <span>{index1+1}/{project1.length}</span>
                                <ArrowForwardIosIcon sx={{fontSize: '1.2rem', color: 'black', cursor: 'pointer', marginBottom: '2px'}} onClick={() => setIndex1(index1 < project1.length-1 ? index1+1 : 0)}/>
                            </div>
                        </div>
                        <div className='projectLower'>
                            <div className='projectName'>
                                <div className='projectTitle'>
                                    <span>CHEESE ME</span>
                                    {showCheese && <img className='cheese' src={Cheese} alt='cheese' style={{width: '30px', height: '30px'}} onClick={() => handleClickThunder('cheese')}/>}
                                </div>
                                {lang === 'English' ? <span className='projectTitleDetail'>1 Person Project</span> : <span className='projectTitleDetail'>1인 개인 프로젝트</span>}
                            </div>
                            <div className='projectDetail'>
                                {lang === 'English' && <div className='descriptionKor'>
                                    <span>I made CheeseMe because while there are other blog-like applications out there, very few offer all those features within a single interface, along with the freedom to creatively decorate your pages. 
                                    CheeseMe is a personalized and customizable journal application for PC that brings together convenient widgets, journal entries, and social connections all in one place.</span><br></br>
                                <div className='descriptionKor2'>
                                    <span style={{color: 'cyan'}}>Major Features</span><span style={{marginBottom: '1rem'}}>Login, Todo List, Calendar, World Clock, Reminder, Notes, Journal Posts, Drag & Move Widgets, Sticker Widget Maker, Add Friends</span>
                                    <span style={{color: 'cyan'}}>My Roles</span><span style={{marginBottom: '1rem'}}>Design, Backend, Frontend, Deloyment</span>
                                    <span style={{color: 'cyan'}}>Stacks Used</span>
                                    <div className='stacks'>
                                        <img alt='project2' src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
                                        <img alt='project2' src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
                                        <img alt='project2' src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white"/>
                                        <img alt='project2' src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/> 
                                        <img alt='project2' src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
                                        <img alt='project2' src="https://img.shields.io/badge/mui-007FFF?style=for-the-badge&logo=Mui&logoColor=white"/>
                                    </div>
                                    <div className='stacks'>
                                        <img alt='project2' src="https://img.shields.io/badge/mongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white"/>
                                        <img alt='project2' src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white"/>
                                        <img alt='project2' src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"/>
                                        <img alt='project2' src="https://img.shields.io/badge/amazons3-FF9900?style=for-the-badge&logo=AmazonS3&logoColor=white"/>
                                        <img alt='project2' src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=Netlify&logoColor=white"/>
                                        <img alt='project2' src="https://img.shields.io/badge/fly.io-8D33E8?style=for-the-badge&logo=express&logoColor=white"/>
                                        <img alt='project2' src="https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white"/>
                                    </div>
                                </div>    
                                </div>}
                                {lang === 'Korean' && <div className='descriptionKor'><span>CheeseMe는 전자기기에서만 사용할 수 있는 편리한 체계적인 위젯과 자유롭게 꾸미고 커스터마이징할 수 있는 실제 종이 일기장의 장점을 합쳐 만든 PC 스케쥴러입니다. 
                                    블로그 비슷한 사이트는 많지만, 꾸미는 자유도가 높고 모든 기능이 한 곳에 있는 스케쥴러 사이트는 찾기 어려워 만들게 되었습니다.</span><br></br>
                                <div className='descriptionKor2'>
                                    <span style={{color: 'cyan'}}>주요 기능</span><span style={{marginBottom: '1rem'}}>로그인, 투두 리스트, 캘린더, 세계 시간, 리마인더, 노트, 일기장 포스트, 자유 배치 가능한 위젯 그리드, 원하는 사진으로 제작하는 스티커, 친구 추가</span>
                                    <span style={{color: 'cyan'}}>나의 역할</span><span style={{marginBottom: '1rem'}}>디자인, 백엔드, 프론트엔드, 배포</span>
                                    <span style={{color: 'cyan'}}>사용 스택</span>
                                    <div className='stacks'>
                                        <img alt='project2' src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=black"/>
                                        <img alt='project2' src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=React&logoColor=black"/>
                                        <img alt='project2' src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white"/>
                                        <img alt='project2' src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/> 
                                        <img alt='project2' src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
                                        <img alt='project2' src="https://img.shields.io/badge/mui-007FFF?style=for-the-badge&logo=Mui&logoColor=white"/>
                                    </div>
                                    <div className='stacks'>
                                        <img alt='project2' src="https://img.shields.io/badge/mongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white"/>
                                        <img alt='project2' src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white"/>
                                        <img alt='project2' src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"/>
                                        <img alt='project2' src="https://img.shields.io/badge/amazons3-FF9900?style=for-the-badge&logo=AmazonS3&logoColor=white"/>
                                        <img alt='project2' src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=Netlify&logoColor=white"/>
                                        <img alt='project2' src="https://img.shields.io/badge/fly.io-8D33E8?style=for-the-badge&logo=express&logoColor=white"/>
                                        <img alt='project2' src="https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white"/>
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
                        </div>
                    </div>
                </div>
                <div className='projectFooter'>
                        <div className='scoreInfo'>
                            <span className='score'>SCORE</span>
                            <span style={{color: 'cyan', marginLeft: '1rem'}}>{score}</span>
                        </div>
                        <span style={{marginLeft: '7rem', fontSize: '1.3rem', marginTop: '0.5rem'}}>{found}/2 FRUITS</span>
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
export default Projects2;