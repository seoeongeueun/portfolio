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
import Project1Leaderboard from '../images/project1-leaderboard.png';
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

    const project1 = [Project1Main, Project1Mypage, Project1Takequiz, Project1Score, Project1Store, Project1Categories, Project1Leaderboard];

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
                                <span style={{marginBottom: '0.3rem'}}>Main Page</span>
                                <div className='image1DescContent'>
                                        <span>This is the main page. I worked on the frontend for the main page. For the overall design, I aimed to keep it minimal, using blue and gray as the theme colors. Thin borders with no background color were used over full background colors to keep the design simple and clean. 
                                            On the top half of the page, there are draggable category cards. These cards can be dragged left and right to view more cards, and clicking on each card redirects the page to show all quizzes under the selected category. On the bottom half, there are recently created quizzes and platforms.
                                        </span>
                                        <span>★ At the bottom of each platform card, it shows the owner of the platform and the number of subscribers it currently has.</span>
                                        <span>★ There are heart buttons on the platforms that users can click to subscribe to them without having to actually visit the platform.</span>
                                    </div>
                                </div> 
                                : <div className='image1Desc'>
                                    <span style={{marginBottom: '0.3rem'}}>메인 페이지</span>
                                    <div className='image1DescContent'>
                                        <span>제가 프론트엔드 작업을 한 메인 페이지입니다. 전체적인 디자인은 심플하게 만들었고, 블루와 그레이를 메인 색으로 사용했습니다. 디자인을 간결하고 깔끔하게 유지하기 만들기 위해 배경 색상 대신 배경이 없는 얇은 테두리를 많이 사용했습니다. 
                                            페이지 상단은 드래그할 수 있는 카테고리 카드입니다. 좌우로 드래그해 다음 카드를 볼 수 있습니다. 카드를 클릭하면 그 카테고리에 속한 플랫폼을 보여주는 페이지로 이동합니다. 페이지의 하단에는 최근 만들어진 퀴즈와 플랫폼을 보여줍니다. </span>
                                        <span>★ 각 플랫폼 카드의 하단에는 해당 플랫폼의 소유자와 현재 구독자 수가 표시됩니다.</span>
                                        <span>★ 카드에 하트 아이콘을 누르면 해당 플랫폼을 방문하지 않아도 빠르게 구독을 할 수 있습니다. </span>
                                    </div>
                            </div>}
                        </div>}
                        {index1 === 1 && <div className='image1'>
                            <img src={Project1Categories} alt='project2'/>
                            {lang === 'English' ? <div className='image1Desc'>
                                <span style={{marginBottom: '0.3rem'}}>Categories</span>
                                <div className='image1DescContent'>
                                        <span>This is the categories page, where it displays some of the default major categories. I worked on the frontend for this page, and there was no backend work required. The hashtags beneath each category card represent the topics that users can set for their platforms within the respective category.</span>
                                        <span>★ When users create their platform, they can choose one of these main categories and create up to 3 hashtags with any text they desire for the subtopics.</span>
                                    </div>
                                </div> 
                                : <div className='image1Desc'>
                                    <span style={{marginBottom: '0.3rem'}}>메인 페이지</span>
                                    <div className='image1DescContent'>
                                        <span>주요 카테고리를 보여주는 페이지입니다. 저는 프론트엔드 작업을 했고 별다른 백엔드 작업이 필요하지 않았던 페이지입니다. 카테고리 카드 하단의 해시태그는 해당 카테고리에 속한 플랫폼들이 가진 여러 서브 주제 중 3가지가 보여집니다.</span>
                                        <span>★ 유저가 플랫폼을 만들 때 음악, 교육, 게임 등 메인 카테고리를 하나 지정하고, 최대 3가지의 서브 주제를 해시태그로 직접 작성할 수 있습니다. </span>
                                    </div>
                            </div>}
                        </div>}
                        {index1 === 2 && <div className='image1'>
                            <img src={Project1Takequiz} alt='project2'/>
                            {lang === 'English' ? <div className='image1Desc'>
                                <span style={{marginBottom: '0.3rem'}}>Take Quiz</span>
                                <div className='image1DescContent'>
                                        <span>This is the quiz page where users take quizzes on other users' platforms. I worked on both the frontend and backend for this page. 
                                            All questions are multiple-choice, with a 30-second timer for each question. If a question is not answered within the time limit, it is automatically graded as wrong. </span>
                                        <span>★ To provide statistics and determine question difficulty, the number of users choosing each answer choice is saved in the database for each question. </span>
                                        <span>★ Clicking on the 3s or 10s button before the time expires adds more seconds to the timer, and each hint eliminates one incorrect answer choice by disabling the radio button.</span>
                                        <span>★ Points are deducted for each hint and added time used. The deducted points are stored as a state and passed as props to the result page component for updating the points value in the database.</span>
                                    </div>
                                </div> 
                                : <div className='image1Desc'>
                                    <span style={{marginBottom: '0.3rem'}}>퀴즈 풀기</span>
                                    <div className='image1DescContent'>
                                        <span>유저가 다른 유저의 플랫폼에서 퀴즈를 푸는 화면입니다. 저는 이 페이지의 프론트엔드와 백엔드 작업을 담당했습니다. 모든 질문은 객관식으로 이루어져 있으며, 각 질문에는 30초의 타이머가 있습니다. 시간 제한 내에 답을 고르지 않으면 자동으로 오답처리 됩니다.</span>
                                        <span>★ 통계를 제공하고 질문의 난이도를 결정하기 위해 각 답변 선택지마다 해당 답변을 고른 사용자 수가 DB에 저장됩니다.</span>
                                        <span>★ 타이머가 끝나기 전에 3초나 10초를 그 만큼 시간을 추가할 수 있고 일정 포인트가 차감됩니다. 힌트 버튼을 누르면 오답 중에서 한 가지 보기를 비활성화 해서 제거합니다.</span>
                                        <span>★ 힌트와 추가 시간을 사용하면 포인트가 차감되고, 차감된 포인트는 상태로 저장되어 결과 페이지 컴포넌트에 props로 전달해서 퀴즈를 다 풀면 DB에 업데이트를 합니다.</span>
                                    </div>
                            </div>}
                        </div>}
                        {index1 === 3 && <div className='image1'>
                            <img src={Project1Score} alt='project2'/>
                            {lang === 'English' ? <div className='image1Desc'>
                                <span style={{marginBottom: '0.3rem'}}>Score</span>
                                <div className='image1DescContent'>
                                        <span>This is the quiz result page. I worked on both the frontend and backend for this page. It displays the points earned for answering questions correctly, points spent on hints and timers, and the number of questions answered correctly</span>
                                        <span>★ To prevent users from farming points by repeatedly answering the same question, an API request to update the changes in the User collection of the database is made only on this page, which is after the user finished the quiz.</span>
                                        <span>★ Considering it is a quiz website, they are allowed to like a quiz they disliked once or dislike/like it multiple times. Each attempt is treated as a new try because users can gain new knowledge and have a different perspective each time they take the quiz.</span>
                                    </div>
                                </div> 
                                : <div className='image1Desc'>
                                    <span style={{marginBottom: '0.3rem'}}>퀴즈 점수</span>
                                    <div className='image1DescContent'>
                                        <span>퀴즈 점수와 결과를 보여주는 페이지입니다. 프론트엔드와 백엔드 작업을 했습니다. 맞춘 질문의 갯수, 정답을 맞춰 얻은 포인트, 그리고 힌트와 타이머로 차감된 포인트가 표시됩니다. </span>
                                        <span>★ 쉬운 질문만 반복적으로 풀면서 포인트를 파밍하는 것을 방지하기 위해, DB의 User 컬렉션에 변경 내용을 업데이트하는 API 요청은 사용자가 퀴즈를 완료한 후에 결과 페이지에서만 이루어집니다.</span>
                                        <span>★ 퀴즈 웹사이트인 것을 감안해 각 시도는 새로운 시도로 간주되어, 유저는 이미 싫어요를 누른 퀴즈에 또 싫어요를 하거나, 이미 싫어요를 누른 퀴즈를 이번에는 좋아요를 하는 등 직전 평가에 상관없이 좋아요/싫어요를 누를 수 있습니다. 
                                            같은 퀴즈여도 풀 때마다 유저가 새로운 지식을 얻고, 퀴즈에 대한 다른 평가를 갖게 될 수도 있기 때문입니다. </span>
                                    </div>
                            </div>}
                        </div>}
                        {index1 === 4 && <div className='image1'>
                            <img src={Project1Store} alt='project2'/>
                            {lang === 'English' ? <div className='image1Desc'>
                                <span style={{marginBottom: '0.3rem'}}>My Page</span>
                                <div className='image1DescContent'>
                                        <span>This is the store page, and I worked on both the frontend and backend for this page. Users can purchase icons or titles to customize their profile. A preview is available before making a purchase. 
                                            In the header, it shows the remaining points the user has and provides a preview of what the profile would look like with the new item. </span>
                                        <span>★ Pagination library was used to keep the number of items display at once. </span>
                                        <span>★ Changes are made to the DB upon confirming purchase by clicking Confirm on the pop-up, and the items are instantly equipped.</span>
                                    </div>
                                </div> 
                                : <div className='image1Desc'>
                                    <span style={{marginBottom: '0.3rem'}}>메인 페이지</span>
                                    <div className='image1DescContent'>
                                        <span>프로필을 꾸밀 수 있는 아이템인 아이콘과 칭호를 구매할 수 있는 상점 페이지입니다. 프론트엔드와 백엔드 작업을 했습니다. 아이템을 구매하면 포인트가 차감됩니다. Preview를 눌러 헤더에서 아이템을 장착하면 어떤 모습일지 프로필을 미리보기 할 수 있습니다.</span>
                                        <span>★ ResizeObserver를 통해 화면 크기 변화를 감지하여 화면이 작아져도 위젯이 왼쪽 페이지 영역을 벗어나지 않게 만들었습니다.</span>
                                        <span>★ Pagination 라이브러리를 사용해서 한번에 보여지는 상점 아이템 갯수를 조절했습니다. </span>
                                        <span>★ 팝업 창의 확정을 눌러 구매가 확정되면 DB에 변경사항을 업데이트하고, 아이템은 즉시 장착됩니다.</span>
                                    </div>
                            </div>}
                        </div>}
                        {index1 === 5 && <div className='image1'>
                            <img src={Project1Mypage} alt='project2'/>
                            {lang === 'English' ? <div className='image1Desc'>
                                <span style={{marginBottom: '0.3rem'}}>My Page</span>
                                <div className='image1DescContent'>
                                        <span>This is what the My Page looks like. For the this page, I only worked on the frontend. The user can click on the gear icon to change their username and profile picture. On the right side, it shows the platforms the user owns and subscribed platforms.  
                                        </span>
                                        <span>★ The accuracy percentage is calculated as the ratio of the number of correct answers to the total number of questions the user has answered, and both values are saved in the database for each user.</span>
                                        <span>★ The user's experience (exp) bar shows how close the user is to leveling up. It is calculated by dividing the user's current exp by the required experience points for the next level.</span>
                                    </div>
                                </div> 
                                : <div className='image1Desc'>
                                    <span style={{marginBottom: '0.3rem'}}>메인 페이지</span>
                                    <div className='image1DescContent'>
                                        <span>유저 프로필을 바꿀 수 있는 마이페이지입니다. 저는 프론트엔드 작업을 맡았습니다. 유저는 톱니바퀴 아이콘을 클릭하여 사용자 이름과 프로필 사진을 변경할 수 있습니다. 오른쪽에는 사용자의 정보와 함께 소유한 플랫폼과 구독한 플랫폼이 표시됩니다. </span>
                                        <span>★ Accuracy 퍼센트는 사용자가 정답을 맞힌 개수를 전체 풀이한 질문 수로 나눈 비율로 계산되며, 두 값 모두 DB에 각 사용자마다 저장됩니다.</span>
                                        <span>★ 유저의 경험치(exp) 바는 사용자가 레벨업에 얼마나 가까운지를 보여줍니다. 유저의 현재 경험치를 다음 레벨에 필요한 경험치로 나누어 계산됩니다.</span>
                                    </div>
                            </div>}
                        </div>}
                        {index1 === 6 && <div className='image1'>
                            <img src={Project1Leaderboard} alt='project2'/>
                            {lang === 'English' ? <div className='image1Desc'>
                                <span style={{marginBottom: '0.3rem'}}>Leaderboard</span>
                                <div className='image1DescContent'>
                                        <span>This is the leaderboard page, and I worked on both the frontend and backend. The leaderboard is one big table and is sorted by level by default. Users can sort it by level, accuracy, or play count by clicking on the corresponding column. </span>
                                        <span>★ At the top, it shows the current rank of the user, and it changes according to the modifications made to the leaderboard.</span>
                                        <span>★ The icon, profile picture, and title on the leaderboard reflect the items users have equipped at the moment. </span>
                                    </div>
                                </div> 
                                : <div className='image1Desc'>
                                    <span style={{marginBottom: '0.3rem'}}>순위표</span>
                                    <div className='image1DescContent'>
                                        <span>전체 유저 랭킹을 보여주는 순위표 페이지입니다. 저는 프론트엔드와 백엔드 작업을 했습니다. 순위표는 기본적으로 레벨 순위로 정렬한 하나의 큰 표입니다. 레벨, 정확도, 플레이 횟수 열을 클릭해서 해당 조건대로 재정렬할 수 있습니다.  왼쪽과 오른쪽 컴포넌트로 나누어 설정 및 영역은 각각 적용되고, 위젯과 스티커는 왼쪽 영역 내에서 자유롭게 배치할 수 있습니다.</span>
                                        <span>★ 맨 위에는 유저의 현재 순위를 보여주고, 순위표를 재정렬하면 그에 맞춰 유저 순위도 다시 계산됩니다.</span>
                                        <span>★ 모든 유저의 아이콘, 프로필 사진, 칭호는 데이터를 가져온 순간 사용자가 장착하고 있던 아이템을 반영합니다. </span>
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
                                    Points are earned for correct answers, which can be used to purchase store items or obtain hints while taking quizzes.</span>
                                <div className='descriptionKor2'>
                                    <span style={{color: 'cyan'}}>Major Features</span><span style={{marginBottom: '1rem'}}>Google Auth Login, Create Platforms, Create Quizzes, Take Quizzes, Leaderboard, Item Store, Customizable Profile</span>
                                    <span style={{color: 'cyan'}}>My Roles</span><span style={{marginBottom: '1rem'}}>Figma Design, Leaderboard Page (back & front), Store Page (back & front), Quiz Taking Page (back & front), My Page (front only), Main Page (front only)</span>
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
