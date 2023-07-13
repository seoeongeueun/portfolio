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

import Project3Main from '../images/project3-main.png';
import Project3Contact from '../images/project3-contact.png';
import Project3About from '../images/project3-about.png';
import Project3Other from '../images/project3-other.png';
import Project2Edit from '../images/project2-edit.png';
import Project2Todo from '../images/project2-todo.png';
import Project2Search from '../images/project2-search.png';
import Project2Add from '../images/project2-add.png';
import Project2Friend from '../images/project2-friend.png';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MouseIcon from '@mui/icons-material/Mouse';

function Projects3({score, life, onSetScore, onSetLife, lang, setLang, onSetMenu}) {
    const [showFruit2, setShowFruit2] = useState(true);
    const [showFruit4, setShowFruit4] = useState(true);
    const [clicked, setClicked] = useState('');
    const [showScore, setShowScore] = useState(false);
    const [showThund, setShowThund] = useState(true);
    const [showCheese, setShowCheese] = useState(true);
    const [index1, setIndex1] = useState(0);
    const [found, setFound] = useState(0);

    const project1 = [Project3Main, Project3Contact, Project3About, Project3Other, Project2Todo, Project2Search, Project2Friend, Project2Add];

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
                                        <span>레트로 게임 시작 화면처럼 디자인한 홈페이지입니다. x가 쳐진 몬스터를 클릭해서 구해주면 노래를 부릅니다. 마우스 클릭으로 메뉴를 선택하거나, 실제 키보드 위 아래 화살표를 누르거나, 화면 속 미니 키보드와 화살표를 클릭해서 메뉴를 이동할 수 있습니다. 
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
                                        <span>★ Document.querySelector를 사용해 이동하는 미사일의 위치를 가져오고 미사일과 타겟의 위치가 겹치면 해당 타겟이 파괴되는 방식입니다. </span>
                                        <span>★ 애니메이션에 animationend eventlistener를 추가해서 미사일이 아무것도 맞추지 않아도 애니메이션이 종료되면 미사일 div를 다시 숨기고, 렉에 걸릴 경우에 대비해 setinterval을 사용하여 처음 발사 후 1100ms가 지나면 미사일을 숨기게 만들었습니다. </span>
                                    </div>
                                </div>}
                        </div>}
                        {index1 === 2 && <div className='image3'>
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
                        {index1 === 3 && <div className='image3'>
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
                                        <span>★ 유저의 현재 점수와 남은 목숨 상태를 Redux 스토어에서 가져옵니다.</span>
                                    </div>
                                </div>}
                        </div>}
                        {index1 === 4 && <div className='image3'>
                            <img src={Project2Todo} alt='project2'/>
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
                                    <span style={{marginBottom: '0.5rem'}}>투두 리스트 & 일기장 슬라이더</span>
                                    <div className='image3DescContent'>
                                        <span>왼쪽은 6가지 위젯 중 투두 리스트 설정의 예시입니다. + 버튼을 눌러 할일을 추가하고 체크 버튼을 눌러 저장하고, x 버튼을 눌러 할 일을 삭제할 수 있습니다. 또는 설정에서 아예 위젯이 보이지 않게 할 수도 있습니다. 투두 리스트 하단의 기본 표정은 오른쪽의 슬픈 표정이지만, 모든 할 일을 완료하면 웃는 얼굴로 바뀝니다.
                                            오른쪽은 바로 전 예시에서 작성 중이었던 일기장을 저장한 뒤에 모습입니다. 하단의 슬라이더를 움직이거나 슬라이더 양쪽의 화살표 버튼을 눌러 기존에 작성한 다른 날짜의 일기로 이동할 수 있습니다. 또는 왼쪽 페이지의 달력에서 날짜를 직접 눌러서 해당 날짜의 일기로 이동할 수도 있습니다.
                                        </span>
                                        <span>★ 매일 다른 목표를 새울 수 있게 투두 리스트는 날짜마다 따로 지정할 수 있게 만들었습니다. </span>
                                        <span>★ 투두 리스트는 유저 id와 함께 날짜별로 DB에 저장하고, 유저 id가 동일한 모든 투두 리스트를 가져온 뒤, 선택된 날짜의 투두 리스트를 하나씩 보여주는 식으로 만들었습니다. </span>
                                    </div>
                                </div>}
                        </div>}
                        {index1 === 6 && <div className='image3'>
                            <img src={Project2Add} alt='project2'/>
                            {lang === 'English' ? <div className='image3Desc'>
                                <span style={{marginBottom: '0.5rem'}}>Notifications</span>
                                <div className='image3DescContent'>
                                        <span>Users can check notifications by clicking the Notifications button shaped like a bell on the top right of the page. If someone sent the user a friend request, the user can accept or decline the request on the notifications modal. 
                                            On accepting the request, the request sender's name is added to the receiver's friend list and vice versa. A notification that the friend request is accepted is sent to the user who sent the friend request. 
                                            On decline, declined friend request notification is sent to the request sender. Notifications are stored up to the latest 5.
                                        </span>
                                        <span>★ Save the sender and receiver's id with the friend request in the DB, and switch the original sender and receiver and save the information with the receive/decline notification upon the receiver's action. </span>
                                        <span>★ After action has been taken by the receiver, remove accept/decline buttons under the friend request notification.</span>
                                    </div>
                                </div> 
                                : <div className='image3Desc'>
                                    <span style={{marginBottom: '0.5rem'}}>알림창</span>
                                    <div className='image3DescContent'>
                                        <span>페이지 상단 우측 종 모양 알림 버튼을 눌러 알림을 확인할 수 있습니다. 누군가 나에게 친구 요청을 보냈다면 알림창에서 요청을 수락하거나 거절할 수 있습니다. 요청을 수락하면 친구 리스트에서 서로의 이름이 보이고, 상대방에게 요청을 수락했다는 알림을 보냅니다. 거절한다면 상대방에게 친구 요청이 거절됐다는 알림을 보냅니다. 
                                            알림은 최근 5개까지만 보여집니다. 
                                        </span>
                                        <span>★ 보낸 사람의 아이디와 받는 사람의 아이디와 친구 요청 알림을 DB에 저장하고 상대방이 수락이나 거절을 하면, 반대로 기존의 보낸 사람과 받는 사람을 바꿔서 수락/거절 알림을 DB에 저장합니다. </span>
                                        <span>★ 수락/거절 후에는 친구 신청 밑에 있던 기존 수락/거절 버튼을 보이지 않게 합니다.</span>
                                    </div>
                                </div>}
                        </div>}
                        {index1 === 7 && <div className='image3'>
                            <img src={Project2Friend} alt='project2'/>
                            {lang === 'English' ? <div className='image3Desc'>
                                <span style={{marginBottom: '0.5rem'}}>Viewing Friend's Post</span>
                                <div className='image3DescContent'>
                                        <span>Click on the Friend List button on the top right of the page to view the friends list. Click on the friend's name to view their posts and like each post. Contents for the posts that are set private by your friend are not visiable, but instead you see a message that the post is private. 
                                            On the left are your widgets, but clicking on a date on the Calendar widget lets you view your friend's post written on that date. Click on the yellow bookmark with house icon on the far right to leave and go back to your own posts. 
                                        </span>
                                        <span>★ On liking a post, your id is added to the list of users who liked the post, and the list is updated on the DB for the liked post.</span>
                                        <span>★ If the list of users who liked the post contains your id, liking the post removes your id from the list in the DB and undo the like. </span>
                                    </div>
                                </div> 
                                : <div className='image3Desc'>
                                    <span style={{marginBottom: '0.5rem'}}>친구의 포스팅 보기</span>
                                    <div className='image3DescContent'>
                                        <span>페이지 상단 우측에서 친구 버튼을 눌러 친구 목록을 확인하고 친구의 이름을 클릭해서 친구의 일기를 구경하고 좋아요를 누를 수 있습니다. 친구가 비공개한 일기는 내용이 보이지 않고 비공개라는 메세지가 뜹니다. 왼쪽 페이지는 유저의 위젯이지만, 달력에서 날짜를 선택해서 그 날짜에 작성된 친구의 일기를 볼 수 있습니다. 
                                            우측 책갈피 중 집 모양 노란 책갈피를 눌러 다시 내 일기로 돌아올 수 있습니다.
                                        </span>
                                        <span>★ 좋아요를 누르면 유저의 아이디를 좋아요 리스트에 추가하고 DB에서 해당 포스팅 정보에 업데이트합니다. </span>
                                        <span>★ 좋아요를 누른 유저 리스트에 내 아이디가 있다면, 다시 한번 버튼을 누를시엔 좋아요를 취소하고 DB에서 좋아요를 누른 유저 리스트에서 내 이름을 지웁니다. </span>
                                    </div>
                                </div>}
                        </div>}
                        {index1 === 8 && <div className='image3'>
                            <img src={Project2Search} alt='project2'/>
                            {lang === 'English' ? <div className='image3Desc'>
                                <span style={{marginBottom: '0.5rem'}}>Search With Keyword</span>
                                <div className='image3DescContent'>
                                        <span>Click on the Friend List button on the top right of the page to view the friends list. Click on the friend's name to view their posts and like each post. Contents for the posts that are set private by your friend are not visiable, but instead you see a message that the post is private. 
                                            On the left are your widgets, but clicking on a date on the Calendar widget lets you view your friend's post written on that date. Click on the yellow bookmark with house icon on the far right to leave and go back to your own posts. 
                                        </span>
                                        <span>★ Search the DB for posts containing the given keyword and are owned by the user. </span>
                                        <span>★ Upon clicking on the found item, change the date state of Redux store to date of the found item.</span>
                                    </div>
                                </div> 
                                : <div className='image3Desc'>
                                    <span style={{marginBottom: '0.5rem'}}>키워드 검색</span>
                                    <div className='image3DescContent'>
                                        <span>검색창에 원하는 키워드를 입력해서 키워드를 포함한 일기, 노트, 투두 리스트를 검색할 수 있습니다. 오른쪽 페이지의 Content나 Title을 눌러 내용으로 검색하거나, 제목으로 검색할 수 있습니다. 키워드가 포함된 모든 문장이 미리보기에 뜨고, 문장이 너무 길 경우에는 키워드를 중심으로 앞 뒤로 잘라서 보여집니다. 
                                            검색된 일기 또는 위젯을 클릭하면 해당 날짜로 이동해서 그 날짜에 쓰여진 일기와 모든 위젯을 볼 수 있습니다. 책 모양 책갈피를 눌러서 원래 페이지로 돌아갈 수 있습니다.
                                        </span>
                                        <span>★ DB에서 작성자 id가 유저 id와 동일하면서 키워드를 포함한 모든 포스트를 가져옵니다.</span>
                                        <span>★ 검색된 일기나 위젯을 누르면 Redux 스토어의 date 상태를 해당 날짜로 변경합니다. </span>
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
                                <span>CHEESE ME</span>
                                {showCheese && <img className='cheese' src={Cheese} alt='cheese' style={{width: '30px', height: '30px'}} onClick={() => handleClickThunder('cheese')}/>}
                            </div>
                            {lang === 'English' ? <span className='projectTitleDetail'>1 Person Project</span> : <span className='projectTitleDetail'>1인 개인 프로젝트</span>}
                        </div>
                        <div className='projectDetail'>
                            {lang === 'English' && <div className='descriptionKor'>
                                <span>I made CheeseMe because while there are other blog-like applications out there, very few offer all those features within a single interface, along with the freedom to creatively decorate your pages. 
                                CheeseMe is a personalized and customizable diary application for PC that brings together convenient widgets, diary entries, and social connections all in one place.</span>
                            <div className='descriptionKor2'>
                                <span style={{color: 'cyan'}}>Major Features</span><span style={{marginBottom: '1rem'}}>Login, Todo List, Calendar, World Clock, Reminder, Notes, Diary Entries, Drag & Move Widgets, Sticker Widget Maker, Add Friends</span>
                                <span style={{color: 'cyan'}}>My Roles</span><span style={{marginBottom: '1rem'}}>Design, Backend, Frontend, Deloyment</span>
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
                            {lang === 'Korean' && <div className='descriptionKor'><span>CheeseMe는 전자기기에서만 사용할 수 있는 편리한 체계적인 위젯과 자유롭게 꾸미고 커스터마이징할 수 있는 실제 종이 일기장의 장점을 합쳐 만든 PC 스케쥴러입니다. 
                                블로그 비슷한 사이트는 많지만, 꾸미는 자유도가 높고 모든 기능이 한 곳에 있는 스케쥴러 사이트는 찾기 어려워 만들게 되었습니다.</span>
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
                                    <img alt='project2' src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"/>
                                    <img alt='project2' src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=Netlify&logoColor=white"/>
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
export default Projects3;