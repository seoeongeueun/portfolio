import { useEffect, useState } from 'react';
import Twinkling from '../icons/twinkling.png';
import Stars from '../icons/stars.png';
import Cherry from '../icons/cherry.png';
import Grape from '../icons/grape.png';
import AlienCyan from '../icons/alien-cyan.png';
import Thunder from '../icons/thunder.png';
import Cheese from '../icons/cheese.png';
import Project2Main from '../images/project2-main.png';
import Project2Signup from '../images/project2-signup.png';
import Project2Right from '../images/project2-right.png';
import Project2Sticker from '../images/project2-sticker.png';
import Project2Edit from '../images/project2-edit.png';
import Project2Todo from '../images/project2-todo.png';
import Project2Search from '../images/project2-search.png';
import Project2Add from '../images/project2-add.png';
import Project2Friend from '../images/project2-friend.png';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MouseIcon from '@mui/icons-material/Mouse';
import audioControls from '../modules/audioControls.js';


function Projects2({score, life, onSetScore, onSetLife, lang, setLang, onSetMenu}) {
    const [showFruit2, setShowFruit2] = useState(true);
    const [showFruit4, setShowFruit4] = useState(true);
    const [clicked, setClicked] = useState('');
    const [showScore, setShowScore] = useState(false);
    const [showThund, setShowThund] = useState(true);
    const [showCheese, setShowCheese] = useState(true);
    const [index1, setIndex1] = useState(0);
    const [found, setFound] = useState(0);

    const project1 = [Project2Main, Project2Sticker, Project2Edit, Project2Right, Project2Todo, Project2Search, Project2Signup, Project2Friend, Project2Add];

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
        audioControls.play('coin')
        setInterval(() => {
            setShowScore(false);
            setClicked('');
            audioControls.pause('coin');
        }, 800);
    }

    const handleClickThunder = (e) => {
        if (e === 'thunder') setShowThund(false);
        if (e === 'cheese') setShowCheese(false);
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
                    <p>PROJECT 1</p>
                    <div className='otherPageLang'>
                        <button onClick={() => setLang(lang ==='Korean' ? 'English' : 'Korean')} style={{opacity: lang === 'Korean' && '0.5'}}>한국어</button>
                        <button onClick={() => setLang(lang === 'English' ? 'Korean' : 'English')} style={{opacity: lang === 'English' && '0.5'}}>ENGLISH</button>
                    </div>
                </div>
                <div className='project'>
                    <div className='pacBoy'/>
                    <div className='projectImage2'>
                    {lang === 'English' ? <span className='tip'><MouseIcon sx={{fontSize: '1rem', color: 'white', marginRight: '5px'}}/>HOVER OVER IMAGE TO READ ABOUT EACH PAGE</span> : <span className='tip'><MouseIcon sx={{fontSize: '1rem', color: 'white', marginRight: '5px'}}/>마우스를 이미지에 올려 페이지 설명 읽기</span>}
                        {index1 === 0 && <div className='image2'>
                            <img src={Project2Main} alt='project2'/>
                            {lang === 'English' ? <div className='image2Desc'>
                                <span style={{marginBottom: '0.5rem'}}>Main Page</span>
                                <div className='image2DescContent'>
                                        <span>This is the main page after logging in. Left side is for widgets, and right side is for writing diary entries. Left and Right are separate components, and thus the settings and boundaries apply individually. Widgets and stickers can be moved freely within the Left boundary.</span>
                                        <span>★ I used ResizeObserver to detect window size change so that the widgets never leave the left page boundary even when the screen size gets smaller.</span>
                                        <span>★ I used Redux to store current displayed date, and clicking on any date on the Calendar widget allows both Left and Right to change according to the new picked date.</span>
                                        <span>★ A cookie with max age 2 days is saved on the server when user logs in, and a token is set on the client side and DB to preserve the login state. And the token is deleted when the cookie expires or when the user logs out.</span>
                                    </div>
                                </div> 
                                : <div className='image2Desc'>
                                    <span style={{marginBottom: '0.5rem'}}>메인 페이지</span>
                                    <div className='image2DescContent'>
                                        <span>로그인 후 첫 페이지입니다. 왼쪽은 위젯, 오른쪽은 일기장 페이지입니다. 왼쪽과 오른쪽 컴포넌트로 나누어 설정 및 영역은 각각 적용되고, 위젯과 스티커는 왼쪽 영역 내에서 자유롭게 배치할 수 있습니다.</span>
                                        <span>★ ResizeObserver를 통해 화면 크기 변화를 감지하여 화면이 작아져도 위젯이 왼쪽 페이지 영역을 벗어나지 않게 만들었습니다.</span>
                                        <span>★ Redux를 이용해 현재 표시할 날짜를 저장하고 달력 위젯에서 원하는 날짜를 고르면 왼쪽 위젯과 오른쪽 일기가 바뀐 날짜에 맞춰 바뀝니다.</span>
                                        <span>★ 로그인에 성공하면 서버에 이틀 후에 만료되는 쿠키를 저장하고, 클라이언트와 DB에는 유저 아이디가 담긴 토큰을 저장해서 로그인 상태를 유지하지만 쿠키가 만료되거나 유저가 로그아웃 하면 토큰을 지웁니다.</span>
                                    </div>
                                </div>}
                        </div>}
                        {index1 === 1 && <div className='image2'>
                            <img src={Project2Sticker} alt='project2'/>
                            {lang === 'English' ? <div className='image2Desc'>
                                <span style={{marginBottom: '0.5rem'}}>Sticker Maker</span>
                                <div className='image2DescContent'>
                                        <span>This is Sticker Maker, which shows up when the user uploaded a picture of their choice via 'Add Pic' button on the bottom right side of the Left page. Users can move the sliders to zoom in and out, rotate the image, and choose a circle or rectangle or square frame for the sticker. 
                                            After saving the settings by clicking DONE, the sticker is now movable like other widgets and could be temporary hidden or permanently deleted by changing settings.
                                        </span>
                                        <span>★ The original image of the sticker is saved to the S3 bucket, and zoom, rotate, frame values for each sticker are saved to the DB so that it applys correctly to the sticker.</span>
                                        <span>★ When the user removes a sticker, an API request is made to remove the corresponding settings from the DB and delete the base image from the S3 bucket. </span>
                                    </div>
                                </div> 
                                : <div className='image2Desc'>
                                    <span style={{marginBottom: '0.5rem'}}>스티커 만들기</span>
                                    <div className='image2DescContent'>
                                        <span>왼쪽 하단 스티커 추가 버튼을 누르고 유저가 원하는 사진을 고른 후 페이지입니다. 슬라이더를 움직여 원하는 수치대로 확대, 회전을 할 수 있고, 원형, 직사각형, 정사각형 세가지 프레임을 고를 수 있습니다. 
                                            Done 버튼을 눌러서 완성한 뒤 다른 위젯처럼 위치를 이동할 수 있고, 왼쪽 페이지 하단의 스티커 설정을 눌러 임시로 보이지 않게 하거나 완전히 삭제할 수 있습니다.</span>
                                        <span>★ 유저가 올린 스티커 이미지의 원본은 S3 버킷에 저장하고, 각 스티커의 확대, 회전 수치와 프레임 설정은 DB에 저장합니다. </span>
                                        <span>★ 유저가 스티커를 삭제하면 DB에 저장된 스티커 설정과 S3 버킷에 저장된 원본 이미지를 삭제하는 요청을 보내 완전히 삭제합니다. </span>
                                    </div>
                                </div>}
                        </div>}
                        {index1 === 2 && <div className='image2'>
                            <img src={Project2Edit} alt='project2'/>
                            {lang === 'English' ? <div className='image2Desc'>
                                <span style={{marginBottom: '0.5rem'}}>Move Mode</span>
                                <div className='image2DescContent'>
                                        <span>This is after clicking Move button on the bottom right of the Left page. The yellow cross appears on the center of each widget and sticker, and users can click on the cross to freely drag the widgets within the Left boundary.
                                             Clicking the Move button again saves the current positions of all widgets and stickers.
                                        </span>
                                        <span>★ The positions of widgets and stickers are saved to the database, preserving their current locations for new logins or page refreshes.</span>
                                        <span>★ Edit mode is saved as a boolean using Redux so that all widgets turns movable when edit mode is on. </span>
                                    </div>
                                </div> 
                                : <div className='image2Desc'>
                                    <span style={{marginBottom: '0.5rem'}}>이동하기 모드</span>
                                    <div className='image2DescContent'>
                                        <span>왼쪽 페이지의 오른쪽 하단 버튼 중 이동하기 버튼을 누른 후 페이지입니다. 위젯과 스티커 가운데 노란 십자가 버튼을 클릭한 뒤 드래그해서 왼쪽 페이지 내에서 원하는 위치에 위젯을 둘 수 있습니다. 이동하기 버튼을 다시 누르면 설정을 저장합니다.</span>
                                        <span>★ 위젯과 스티커의 위치는 DB에 저장해서 새로고침하거나 다시 로그인해도 위치가 바뀌지 않게 했습니다.</span>
                                        <span>★ 기존 상태에선 드래그해도 위젯이 움직이지 않지만, Redux에 이동하기 모드를 boolean으로 저장해서 모드가 켜지면 모든 위젯 컴포넌트에서 드래그 가능하게 바뀝니다. </span>
                                    </div>
                                </div>}
                        </div>}
                        {index1 === 3 && <div className='image2'>
                            <img src={Project2Right} alt='project2'/>
                            {lang === 'English' ? <div className='image2Desc'>
                                <span style={{marginBottom: '0.5rem'}}>Diary (Social Media Theme)</span>
                                <div className='image2DescContent'>
                                        <span>Clicking on the pen button on the Right page opens the diary writing page. Users can give it a title, select a weather, and upload image. The default theme is Social Media allowing image upload, but users can click on the gear settings button to change the theme to Plain Text or turn on the grid on the background. 
                                                The Lock button makes the entry private, and the user's friends can not view the entry. After saving the entry, users can bookmark the entry, change style settings again, like it, or permanently delete it.
                                        </span>
                                        <span>★ Style settings is saved individually to the DB, so Social Media / Plaintext theme and grid background can be applied separately for each entry. </span>
                                        <span>★ Any image files uploaded before saving the entry is temporary presented using URL.createObjectURL, and is saved to the S3 bucket on clicking SAVE. </span>
                                    </div>
                                </div> 
                                : <div className='image2Desc'>
                                    <span style={{marginBottom: '0.5rem'}}>일기장 (SNS 테마)</span>
                                    <div className='image2DescContent'>
                                        <span>오른쪽 페이지의 펜 버튼을 누른 후 일기를 작성할 수 있습니다. 제목을 쓰고, 날씨를 고르고, 사진 추가 버튼을 눌러 사진을 업로드할 수 있습니다. 기본 일기 테마는 사진이 포함된 SNS 스타일이지만, 톱니바퀴를 눌러 메모장 스타일로 변경해서 사진 없이 텍스트만 작성하거나, 흰 배경을 모눈 배경으로 변경 할 수 있습니다. 
                                            자물쇠 버튼을 누르면 일기가 작성자 공개로 바뀌어 친구들이 읽을 수 없게 됩니다. SAVE를 눌러 저장하면 일기를 북마크하거나, 스타일 설정을 변경하거나, 좋아요를 누르거나, 완전히 삭제할 수 있습니다.
                                        </span>
                                        <span>★ 스타일 설정은 일기별로 DB에 저장되어 SNS / 메모장 테마와 모눈 설정은 일기별로 다르게 지정할 수 있습니다. </span>
                                        <span>★ SAVE를 누르기 전에 업로드된 사진은 URL.createObjectURL을 이용해 임시로 나타나게 하고, SAVE를 눌러 후에는 S3 버킷에 저장합니다.</span>
                                    </div>
                                </div>}
                        </div>}
                        {index1 === 4 && <div className='image2'>
                            <img src={Project2Todo} alt='project2'/>
                            {lang === 'English' ? <div className='image2Desc'>
                                <span style={{marginBottom: '0.5rem'}}>Todo Widget & Diary Entries Slider</span>
                                <div className='image2DescContent'>
                                        <span>On the left is an example of editing Todo List widget. Todos can be added, removed, and be checked as done. All widgets can be set invisible by changing the settings.
                                            On the right is what the entry looks like after it's saved and posted. Users can move the slider on the bottom or click on the arrow buttons or directly choose a date on the Calendar widget on the left to view other entries that are written on different dates.
                                        </span>
                                        <span>★ The Todo List is unique to each day so that users can have different goals everyday. </span>
                                        <span>★ Todo list is saved each day with the user id, server retrieves all todo list of different dates with matching user id, and display the todo list of the selected date. </span>
                                        <span>★ The default face on the bottom of the Todo Widget is the frowning face, but it turns into a smiling face when finishing all the todos. </span>
                                    </div>
                                </div> 
                                : <div className='image2Desc'>
                                    <span style={{marginBottom: '0.5rem'}}>투두 리스트 & 일기장 슬라이더</span>
                                    <div className='image2DescContent'>
                                        <span>왼쪽은 6가지 위젯 중 투두 리스트 설정의 예시입니다. 투두를 추가하거나, 체크해서 완료하거나, 삭제할 수 있습니다. 모든 위젯은 설정에서 숨김 설정할 수 있습니다.
                                            오른쪽은 바로 전 예시에서 작성 중이었던 일기장을 저장한 뒤에 모습입니다. 하단의 슬라이더를 움직이거나, 슬라이더 양쪽의 화살표 버튼을 누르거나, 달력 위젯에서 날짜를 선택해 다른 날짜의 일기로 이동할 수 있습니다.
                                        </span>
                                        <span>★ 매일 다른 목표를 새울 수 있게 투두 리스트는 날짜마다 따로 지정할 수 있게 만들었습니다. </span>
                                        <span>★ 투두 리스트는 유저 id와 함께 날짜별로 DB에 저장하고, 유저 id가 동일한 모든 투두 리스트를 가져온 뒤, 선택된 날짜의 투두 리스트를 하나씩 보여주는 식으로 만들었습니다. </span>
                                        <span>★ 투두 리스트 하단의 기본 표정은 오른쪽의 슬픈 표정이지만, 모든 할 일이 체크되면 웃는 얼굴로 바뀝니다. </span>
                                    </div>
                                </div>}
                        </div>}
                        {index1 === 5 && <div className='image2'>
                            <img src={Project2Signup} alt='project2'/>
                            {lang === 'English' ? <div className='image2Desc'>
                                <span style={{marginBottom: '0.5rem'}}>Sign Up</span>
                                <div className='image2DescContent'>
                                        <span>This is what the page looks like after clicking Sign up button when it's in guest mode (not logged in). On confirm, it checks if all fields are entered, if the username is unique, if the password matches the re-entered password. If there is no problem, a message welcoming the new user appears on the bottom. 
                                        </span>
                                        <span>★ It looks through the DB to see if the entered username is unique.</span>
                                        <span>★ Using Bcrpyt, password is hashed before saving to the DB.</span>
                                    </div>
                                </div> 
                                : <div className='image2Desc'>
                                    <span style={{marginBottom: '0.5rem'}}>회원가입</span>
                                    <div className='image2DescContent'>
                                        <span>로그인 전, 게스트 모드에서 회원가입을 눌렀을 때 페이지입니다. 모든 항목을 입력하고 CONFIRM을 누르면 중복된 닉네임 등 입력한 항목을 검사합니다. 모든 항목에서 문제가 없으면 회원가입 성공 메세지가 나타납니다.
                                        </span>
                                        <span>★ DB에서 유저 이름을 확인해 중복된 닉네임이 있는지 체크하고, 비밀번호 길이, 비밀번호와 재입력한 비밀번호 확인이 동일한지 검사합니다. </span>
                                        <span>★ 비밀번호는 bcrypt를 이용해 암호화되어 DB에 저장됩니다. </span>
                                    </div>
                                </div>}
                        </div>}
                        {index1 === 6 && <div className='image2'>
                            <img src={Project2Add} alt='project2'/>
                            {lang === 'English' ? <div className='image2Desc'>
                                <span style={{marginBottom: '0.5rem'}}>Notifications</span>
                                <div className='image2DescContent'>
                                        <span>Users can check notifications by clicking the bell shaped button on the top right of the page. If someone sent the user a friend request, the user can accept or decline the request on the notifications modal. 
                                            On accepting the request, the request sender's name is added to the receiver's friend list and vice versa. A notification that the friend request is accepted is sent to the user who sent the friend request. 
                                            On decline, declined friend request notification is sent to the original sender. Notifications are stored up to the latest 5.
                                        </span>
                                        <span>★ The sender and receiver's id with the friend request are saved in the DB, and are switched places and saved upon the receiver's accept or decline action. </span>
                                        <span>★ After action has been taken by the receiver, accept/decline buttons under the friend request notification are removed.</span>
                                    </div>
                                </div> 
                                : <div className='image2Desc'>
                                    <span style={{marginBottom: '0.5rem'}}>알림창</span>
                                    <div className='image2DescContent'>
                                        <span>페이지 상단 우측 종 모양 알림 버튼을 눌러 알림을 확인할 수 있습니다. 누군가 나에게 친구 요청을 보냈다면 알림창에서 요청을 수락하거나 거절할 수 있습니다. 요청을 수락하면 친구 리스트에서 서로의 이름이 보이고, 상대방에게 요청을 수락했다는 알림을 보냅니다. 거절한다면 상대방에게 친구 요청이 거절됐다는 알림을 보냅니다. 
                                            알림은 최근 5개까지만 보여집니다. 
                                        </span>
                                        <span>★ 보낸 사람의 아이디와 받는 사람의 아이디와 친구 요청 알림을 DB에 저장하고 상대방이 수락이나 거절을 하면, 반대로 기존의 보낸 사람과 받는 사람을 바꿔서 수락/거절 알림을 DB에 저장합니다. </span>
                                        <span>★ 수락/거절 후에는 친구 신청 밑에 있던 기존 수락/거절 버튼을 보이지 않게 합니다.</span>
                                    </div>
                                </div>}
                        </div>}
                        {index1 === 7 && <div className='image2'>
                            <img src={Project2Friend} alt='project2'/>
                            {lang === 'English' ? <div className='image2Desc'>
                                <span style={{marginBottom: '0.5rem'}}>Viewing Friend's Diary</span>
                                <div className='image2DescContent'>
                                        <span>Users can click on the Friend List button on the top right of the page to view their friends list. Clicking on the friend's name navigates to the friend's diary, allowing the user to view their entries and like them. Contents for the entries that are set private by the friend are not visible, but instead shows a message that the entry is private. 
                                            On the left are the user's (not the friend's) widgets, but users can click on a date on the Calendar widget to view the friend's entry on that date. Yellow bookmark with house icon on the far right takes the user back to their own diary on click. 
                                        </span>
                                        <span>★ When a user likes a entry, their id is added to the list of users who liked the entry, and the list is updated on the DB.</span>
                                        <span>★ If the list of users who liked the entry contains the user's id, liking the entry again removes their id from the list in the DB and undo the like. </span>
                                    </div>
                                </div> 
                                : <div className='image2Desc'>
                                    <span style={{marginBottom: '0.5rem'}}>친구의 일기 보기</span>
                                    <div className='image2DescContent'>
                                        <span>페이지 상단 우측에서 친구 버튼을 눌러 친구 목록을 확인하고 친구의 이름을 클릭해서 친구의 일기를 구경하고 좋아요를 누를 수 있습니다. 친구가 비공개한 일기는 내용이 보이지 않고 비공개라는 메세지가 뜹니다. 왼쪽 페이지는 유저의 위젯이지만, 달력에서 날짜를 선택해서 그 날짜에 작성된 친구의 일기를 볼 수 있습니다. 
                                            우측 책갈피 중 집 모양 노란 책갈피를 눌러 다시 내 일기로 돌아올 수 있습니다.
                                        </span>
                                        <span>★ 좋아요를 누르면 유저의 아이디를 좋아요 리스트에 추가하고 DB에서 해당 일기 정보에 업데이트합니다. </span>
                                        <span>★ 좋아요를 누른 유저 리스트에 내 아이디가 있다면, 다시 한번 버튼을 누를시엔 좋아요를 취소하고 DB에서 좋아요를 누른 유저 리스트에서 내 이름을 지웁니다. </span>
                                    </div>
                                </div>}
                        </div>}
                        {index1 === 8 && <div className='image2'>
                            <img src={Project2Search} alt='project2'/>
                            {lang === 'English' ? <div className='image2Desc'>
                                <span style={{marginBottom: '0.5rem'}}>Search With Keyword</span>
                                <div className='image2DescContent'>
                                        <span>Type a keyword to look up and see all diary entries and widgets that contain the keyword. On the right, search option is available to look up by title or content. All sentences containing the keyword are shown in the preview with the title and date of the entry. 
                                            If the sentence is too long, it's cut around the keywords.
                                        </span>
                                        <span>★ Fetches from the DB all entries that have the same owner id as the user id and contain the keyword.</span>
                                        <span>★ On click, change the display date in the Redux store to the date of the clicked entry or widget. </span>
                                    </div>
                                </div> 
                                : <div className='image2Desc'>
                                    <span style={{marginBottom: '0.5rem'}}>키워드 검색</span>
                                    <div className='image2DescContent'>
                                        <span>검색창에 원하는 키워드를 입력해서 키워드를 포함한 일기, 노트, 투두 리스트를 검색할 수 있습니다. 오른쪽 페이지의 Content나 Title을 눌러 내용으로 검색하거나, 제목으로 검색할 수 있습니다. 키워드가 포함된 모든 문장이 미리보기에 뜨고, 문장이 너무 길 경우에는 키워드를 중심으로 앞 뒤로 잘라서 보여집니다. 
                                            검색된 일기 또는 위젯을 클릭하면 해당 날짜로 이동해서 그 날짜에 쓰여진 일기와 모든 위젯을 볼 수 있습니다. 책 모양 책갈피를 눌러서 원래 페이지로 돌아갈 수 있습니다.
                                        </span>
                                        <span>★ DB에서 작성자 id가 유저 id와 동일하면서 키워드를 포함한 모든 일기를 가져옵니다.</span>
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
                                <span>CheeseMe is a personalized and customizable diary application for PC that brings together convenient widgets, diary entries, and social connections all in one place.
                                    I made CheeseMe because while there are other blog-like applications out there, very few offer all those features within a single interface, along with the freedom to creatively decorate your pages. 
                                </span>
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
                                블로그 비슷한 사이트는 많지만, 꾸미는 자유도가 높고 모든 기능이 한 곳에 있는 스케쥴러 사이트는 찾기 어려워 만들게 되었습니다.</span>
                            <div className='descriptionKor2'>
                                <span style={{color: 'cyan'}}>주요 기능</span><span style={{marginBottom: '1rem'}}>로그인, 투두 리스트, 캘린더, 세계 시간, 리마인더, 노트, 일기장, 자유 배치 가능한 위젯 그리드, 원하는 사진으로 제작하는 스티커, 친구 추가</span>
                                <span style={{color: 'cyan'}}>나의 역할</span><span style={{marginBottom: '1rem'}}>디자인, 백엔드, 프론트엔드, 배포</span>
                                <span style={{color: 'cyan'}}>사용 스택</span>
                                <div className='stacks'>
                                    <img alt='project2' src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=black"/>
                                    <img alt='project2' src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=React&logoColor=black"/>
                                    <img alt='project2' src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white"/>
                                    <img alt='project2' src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/> 
                                    <img alt='project2' src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
                                    <img alt='project2' src="https://img.shields.io/badge/mui-007FFF?style=for-the-badge&logo=Mui&logoColor=white"/>
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
                                    <a href="https://github.com/seoeongeueun/cheeseme" rel="noopener noreferrer" target="_blank"><span>GITHUB</span></a>
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
export default Projects2;