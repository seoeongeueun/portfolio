import { useEffect, useState } from "react";
import Twinkling from "../icons/twinkling.png";
import Stars from "../icons/stars.png";
import Cherry from "../icons/orange.png";
import Grape from "../icons/banana.png";
import AlienCyan from "../icons/alien-cyan.png";
import Strawberry from "../icons/strawberry.png";
import Cheese from "../icons/dollar.png";
import Project3Main from "../images/project3-main.png";
import Project3Contact from "../images/project3-contact.png";
import Project3About from "../images/project3-about.png";
import Project3Other from "../images/project3-other.png";
import Project3Project from "../images/project3-project.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MouseIcon from "@mui/icons-material/Mouse";
import audioControls from "../modules/audioControls.js";

function Projects3({
  score,
  life,
  onSetScore,
  onSetLife,
  lang,
  setLang,
  onSetMenu,
}) {
  const [showFruit2, setShowFruit2] = useState(true);
  const [showFruit4, setShowFruit4] = useState(true);
  const [showFruit5, setShowFruit5] = useState(true);
  const [clicked, setClicked] = useState("");
  const [showScore, setShowScore] = useState(false);
  const [showCheese, setShowCheese] = useState(true);
  const [index1, setIndex1] = useState(0);
  const [found, setFound] = useState(0);

  const project1 = [
    Project3Main,
    Project3About,
    Project3Project,
    Project3Other,
    Project3Contact,
  ];

  const handleClickFruit = (e) => {
    if (e === "cherry") {
      setShowFruit2(false);
      setFound(found + 1);
    }
    if (e === "grape") {
      setShowFruit4(false);
      setFound(found + 1);
    }
    if (e === "strawberry") {
      setShowFruit5(false);
      setFound(found + 1);
    }
    onSetScore(score + 100);
    setShowScore(true);
    setClicked(e);
    audioControls.play("coin");

    setInterval(() => {
      setShowScore(false);
      setClicked("");
      audioControls.pause("coin");
    }, 800);
  };

  const handleClickThunder = (e) => {
    if (e === "cheese") setShowCheese(false);
    audioControls.play("hurt");
    if (life > 0) onSetLife(life - 1);
    else onSetLife(0);
    setInterval(() => {
      audioControls.pause("hurt");
    }, 400);
  };

  return (
    <main style={{ backgroundImage: `url(${Stars})` }}>
      <div
        className="twinkling"
        style={{
          background: `transparent url(${Twinkling}) repeat top center`,
        }}
      ></div>
      <div className="projectPage">
        <div className="projectPageIntro">
          <p>PROJECT 3</p>
          <div className="otherPageLang">
            <button
              onClick={() => setLang(lang === "Korean" ? "English" : "Korean")}
              style={{ opacity: lang === "Korean" && "0.5" }}
            >
              한국어
            </button>
            <button
              onClick={() => setLang(lang === "English" ? "Korean" : "English")}
              style={{ opacity: lang === "English" && "0.5" }}
            >
              ENGLISH
            </button>
          </div>
        </div>
        <div className="project">
          <div className="pacBoy" style={{ top: "-15px" }} />
          <div className="projectImage2">
            {lang === "English" ? (
              <span className="tip">
                <MouseIcon
                  sx={{ fontSize: "1rem", color: "white", marginRight: "5px" }}
                />
                HOVER OVER IMAGE TO READ ABOUT EACH PAGE
              </span>
            ) : (
              <span className="tip">
                <MouseIcon
                  sx={{ fontSize: "1rem", color: "white", marginRight: "5px" }}
                />
                마우스를 이미지에 올려 페이지 설명 읽기
              </span>
            )}
            {index1 === 0 && (
              <div className="image3">
                <img src={Project3Main} alt="project2" />
                {lang === "English" ? (
                  <div className="image3Desc">
                    <span style={{ marginBottom: "0.3rem" }}>Home Page</span>
                    <div className="image3DescContent">
                      <span>
                        This homepage is designed to look like a retro game
                        start screen. You can click on the menu, press the
                        up/down arrow keys on the actual keyboard, or click on
                        the arrow keys on the mini keyboard to navigate the
                        menu. The mini keyboard is clickable and operates in the
                        same way as a real keyboard. 1500ms delay after the
                        introduction animation, you can test the keyboard.
                      </span>
                      <span>
                        ★ Monster icon has a keyframe animation that executes
                        first when user selects a menu, and using setInterval,
                        actual navigation of page occurs few seconds after.
                      </span>
                      <span>
                        ★ All menu pages are divided into section tags with
                        100vh size, and scroll-snap property allows to
                        transition pages on mouse wheel scroll.
                      </span>
                      <span>
                        ★ When a menu is selected, page transition is made using
                        scrollTo function with the order of the menu multiplied
                        by widow.innerHeight.
                      </span>
                      <br />
                    </div>
                  </div>
                ) : (
                  <div className="image3Desc">
                    <span style={{ marginBottom: "0.3rem" }}>홈페이지</span>
                    <div className="image3DescContent">
                      <span>
                        레트로 게임 시작 화면처럼 디자인한 홈페이지입니다.
                        마우스로 메뉴를 클릭하거나, 실제 키보드 위/아래 화살표를
                        누르거나, 화면 속 미니 키보드의 화살표를 클릭해서 메뉴를
                        이동할 수 있습니다. 미니 키보드는 키를 클릭하는 방식이며
                        실제 키보드와 같은 방식으로 작동하고 My name is 소개
                        메세지 애니메이션이 재생된 뒤 1500 ms 후 키보드를
                        테스트할 수 있는 화면으로 전환됩니다.{" "}
                      </span>
                      <span>
                        ★ 몬스터에 keyframe 애니메이션을 적용해 유저가 메뉴를
                        선택하면 점프 애니메이션을 재생하고, setInterval로 일정
                        시간이 지나면 메뉴를 이동합니다.
                      </span>
                      <span>
                        ★ 모든 메뉴 페이지는 section 태그로 나눠 100vh 크기로
                        만들고, scroll-snap 속성을 사용해 마우스 스크롤 시에
                        페이지가 전환됩니다.{" "}
                      </span>
                      <span>
                        ★ 메뉴를 선택하면 해당 메뉴의 순서와
                        window.innerHeight를 곱하고 scrollTo 함수를 사용해서
                        페이지를 이동합니다.
                      </span>
                    </div>
                  </div>
                )}
              </div>
            )}
            {index1 === 1 && (
              <div className="image3">
                <img src={Project3About} alt="project2" />
                {lang === "English" ? (
                  <div className="image3Desc">
                    <span style={{ marginBottom: "0.3rem" }}>
                      About Me Page
                    </span>
                    <div className="image3DescContent">
                      <span>
                        This introduction page is a shooting game that fires
                        missiles on click. When a text target is hit, lights
                        turn off and it become pixelated. Monster targets are
                        destoryed on hit.
                      </span>
                      <span>
                        ★ Mouse click makes the missile div visible and starts a
                        keyframe animation that moves vertically from the x, y
                        position of the mouse.
                      </span>
                      <span>
                        ★ ResizeObserver and getBoundingClientRect are used to
                        get targets positions even when the screen size changes.
                      </span>
                      <span>
                        ★ QuerySelector gets the coordinates of the moving
                        missile, and the target gets hidden when the its
                        coordinates overlap with the missile's coordinates.{" "}
                      </span>
                      <span>
                        ★ Animationend eventlistener added to the animation
                        hides the missle div when the animation ends. If there
                        is lag, setInterval hides the missile after 900ms from
                        the initial launch.
                      </span>
                      <br />
                    </div>
                  </div>
                ) : (
                  <div className="image3Desc">
                    <span style={{ marginBottom: "0.3rem" }}>
                      About Me 페이지
                    </span>
                    <div className="image3DescContent">
                      <span>
                        클릭으로 미사일을 쏘는 슈팅 게임을 포함한 소개
                        페이지입니다. 마우스를 클릭하면 게임이 시작되고 몬스터와
                        글씨를 포함한 총 9개의 타겟이 있습니다. 미사일을 맞추면
                        몬스터는 파괴되고, 글씨는 네온사인이 꺼지고
                        픽셀화됩니다.
                      </span>
                      <span>
                        ★ 마우스 클릭 시 미사일 div를 보이게 하고 마우스 x, y
                        좌표에서부터 수직으로 이동하는 keyframe 애니메이션과
                        효과음을 재생합니다.{" "}
                      </span>
                      <span>
                        ★ ResizeObserver와 getBoundingClientRect를 사용해 화면
                        크기가 바뀌더라도 타겟의 위치를 가져올 수 있게 했습니다.{" "}
                      </span>
                      <span>
                        ★ querySelector를 사용해 이동하는 미사일의 좌표를
                        가져오고 미사일과 타겟의 좌표가 겹치면 해당 타겟이
                        파괴됩니다.{" "}
                      </span>
                      <span>
                        ★ 애니메이션에 animationend eventlistener를 추가해서
                        애니메이션이 끝나면 미사일 div를 숨기고, 렉에 걸릴
                        경우엔 setinterval을 사용하여 처음 발사 후 900ms가
                        지나면 미사일을 숨깁니다.{" "}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            )}
            {index1 === 2 && (
              <div className="image3">
                <img src={Project3Project} alt="project2" />
                {lang === "English" ? (
                  <div className="image3Desc">
                    <span style={{ marginBottom: "0.3rem" }}>Project Page</span>
                    <div className="image3DescContent">
                      <span>
                        This is a project introduction page that includes a
                        mini-game where points are earned by clicking on fruit
                        icons. Users can navigate to previous/next images by
                        clicking on the arrow buttons at the bottom of the
                        image, and hover over the image to read the
                        descriptions. URL, GitHub buttons navigate to the
                        corresponding website.
                      </span>
                      <span>
                        ★ I made mouth open/close and translate X across the
                        screen animations to make the pacman move along the
                        border.
                      </span>
                      <span>
                        ★ Score is displayed and disappears after a few seconds
                        when a fruit is clicked. If the user clicks on an object
                        that is not a fruit, one life is deducted and sound
                        effect is played.
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="image3Desc">
                    <span style={{ marginBottom: "0.3rem" }}>
                      Projects 페이지
                    </span>
                    <div className="image3DescContent">
                      <span>
                        과일 아이콘을 눌러 점수를 얻는 미니 게임을 포함한
                        프로젝트 소개 페이지입니다. 이미지 하단 화살표를 눌러
                        이전/다음 이미지로 넘길 수 있고, 마우스를 올려 설명을
                        읽을 수 있습니다. 배포 주소, 깃허브 버튼 등을 눌러 해당
                        웹사이트로 이동할 수 있습니다.
                      </span>
                      <span>
                        ★ 입을 여닫는 애니메이션과 움직이는 애니메이션을 만들어
                        상단 팩맨 모양이 프로젝트 프레임을 따라 움직이게
                        만들었습니다.{" "}
                      </span>
                      <span>
                        ★ 과일을 클릭하면 점수가 보이게 하고 효과음을 재생하고
                        일정 시간 뒤에 사라지게 만들고, 과일이 아닌 사물을
                        클릭하면 남은 목숨을 깎고 효과음을 재생합니다.{" "}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            )}
            {index1 === 3 && (
              <div className="image3">
                <img src={Project3Other} alt="project2" />
                {lang === "English" ? (
                  <div className="image3Desc">
                    <span style={{ marginBottom: "0.3rem" }}>Other Page</span>
                    <div className="image3DescContent">
                      <span>
                        This is gameboy made using only CSS. Clicking on the
                        switch on the header turns on the gameboy. After a sound
                        effect and a loading message, images appear on the
                        screen. Any part of the buttons can be clicked to view
                        next image, and all button work the same in case the
                        screen is too small to display the entire shape of the
                        buttons. Pressing arrow keys on a physical keyboard also
                        shows previous/next images.
                      </span>
                      <span>
                        ★ Box-shadow and outline were used to add detailed
                        shadows and lighting to the gameboy.
                      </span>
                      <span>
                        ★ Keydown eventlistner detects key press on the physical
                        keyboard and allows users to view images using their
                        keyboard.
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="image3Desc">
                    <span style={{ marginBottom: "0.3rem" }}>Other 페이지</span>
                    <div className="image3DescContent">
                      <span>
                        CSS만으로 만든 게임기입니다. 게임기 상단 스위치를
                        클릭해서 전원을 켤 수 있고, 효과음과 함께 로딩 후
                        이미지가 나타납니다. 게임기 버튼을 클릭해서 다음
                        이미지를 볼 수 있고, 화면이 작아서 버튼이 다 보이지 않을
                        경우를 대비해 모든 버튼은 동일하게 다음 이미지를
                        보여주게 만들었습니다. 또는 유저 키보드의 좌우 화살표
                        키를 눌러서 이전/다음 이미지를 볼 수 있습니다.
                      </span>
                      <span>
                        ★ Box-shadow와 outline을 사용해 디테일한 명암을
                        넣었습니다.
                      </span>
                      <span>
                        ★ Keydown eventlistener를 적용해 키보드 좌우 화살표 키를
                        눌렀을 때도 이미지를 전환하게 만들었습니다.
                      </span>
                    </div>
                  </div>
                )}
              </div>
            )}
            {index1 === 4 && (
              <div className="image3">
                <img src={Project3Contact} alt="project2" />
                {lang === "English" ? (
                  <div className="image3Desc">
                    <span style={{ marginBottom: "0.3rem" }}>Contact Page</span>
                    <div className="image3DescContent">
                      <span>
                        This contacts page is made to look like a leaderboard
                        page of an arcade game. This is what the screen looks
                        like after user registered their initial and their
                        score. The spinning coin appears after, and it navigates
                        back to home page on click.
                      </span>
                      <span>
                        ★ User's current score and remaining lives are retrieved
                        from Redux store.
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="image3Desc">
                    <span style={{ marginBottom: "0.3rem" }}>
                      Contact 페이지
                    </span>
                    <div className="image3DescContent">
                      <span>
                        레트로 게임의 순위표처럼 디자인한 연락처 페이지입니다.
                        세 글자 이니셜을 입력하고 ENT를 클릭해서 미니 게임
                        점수를 올린 뒤 모습입니다. 돌아가는 코인을 클릭하면 다시
                        홈페이지로 돌아갑니다.
                      </span>
                      <span>
                        ★ 유저의 현재 점수와 남은 목숨 상태를 Redux 스토어에서
                        가져옵니다.
                      </span>
                      <span>
                        ★ 깃허브와 링크드인 아이콘을 눌러 해당 페이지로 이동할
                        수 있습니다.
                      </span>
                    </div>
                  </div>
                )}
              </div>
            )}
            <div className="projectImageButtons">
              <ArrowBackIosIcon
                sx={{
                  marginLeft: "0.6rem",
                  fontSize: "1.2rem",
                  color: "black",
                  cursor: "pointer",
                  marginBottom: "2px",
                }}
                onClick={() =>
                  setIndex1(index1 > 0 ? index1 - 1 : project1.length - 1)
                }
              />
              <span>
                {index1 + 1}/{project1.length}
              </span>
              <ArrowForwardIosIcon
                sx={{
                  fontSize: "1.2rem",
                  color: "black",
                  cursor: "pointer",
                  marginBottom: "2px",
                  marginRight: "0.3rem",
                }}
                onClick={() =>
                  setIndex1(index1 < project1.length - 1 ? index1 + 1 : 0)
                }
              />
            </div>
          </div>
          <div className="projectLower">
            <div className="projectName">
              <div className="projectTitle">
                <span>PORTFOLIO</span>
                {showCheese && (
                  <img
                    className="cheese"
                    src={Cheese}
                    alt="cheese"
                    style={{ width: "30px", height: "30px" }}
                    onClick={() => handleClickThunder("cheese")}
                  />
                )}
              </div>
              {lang === "English" ? (
                <span className="projectTitleDetail">1 Person Project</span>
              ) : (
                <span className="projectTitleDetail">1인 개인 프로젝트</span>
              )}
            </div>
            <div className="projectDetail">
              {lang === "English" && (
                <div className="descriptionKor">
                  <span>
                    This portfolio is a frontend project to implement different
                    ideas I had and try out various functions. The main
                    inspiration is retro arcade games, with each page featuring
                    its own concept inspired by different arcade games.
                  </span>
                  <div className="descriptionKor2">
                    <span style={{ color: "cyan" }}>Major Features</span>
                    <span style={{ marginBottom: "1rem" }}>
                      Mini CSS keyboard, audio sound effects, scrollable
                      sections, shooting game, keyframe animations, pure CSS
                      gameboy
                    </span>
                    <span style={{ color: "cyan" }}>My Roles</span>
                    <span style={{ marginBottom: "1rem" }}>
                      Design, Frontend, Deployment
                    </span>
                    <span style={{ color: "cyan" }}>Stacks Used</span>
                    <div className="stacks">
                      <img
                        alt="project2"
                        src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
                      />
                      <img
                        alt="project2"
                        src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"
                      />
                      <img
                        alt="project2"
                        src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white"
                      />
                      <img
                        alt="project2"
                        src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
                      />
                      <img
                        alt="project2"
                        src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                      />
                      <img
                        alt="project2"
                        src="https://img.shields.io/badge/mui-007FFF?style=for-the-badge&logo=Mui&logoColor=white"
                      />
                      <img
                        alt="project2"
                        src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"
                      />
                      <img
                        alt="project2"
                        src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=Netlify&logoColor=white"
                      />
                    </div>
                  </div>
                </div>
              )}
              {lang === "Korean" && (
                <div className="descriptionKor">
                  <span>
                    다양한 아이디어를 구현 해보고, 새로운 기능을 시도하기 위해
                    만든 프론트엔드 프로젝트이자 포트폴리오입니다. 메인 테마는
                    레트로 아케이드 게임이며, 각 페이지는 각자 다른 게임에서
                    영감을 받아 디자인 했습니다.
                  </span>
                  <div className="descriptionKor2">
                    <span style={{ color: "cyan" }}>주요 기능</span>
                    <span style={{ marginBottom: "1rem" }}>
                      미니 키보드, 오디오 효과음, 스크롤 가능한 페이지, 슈팅
                      게임, Keyframe 애니메이션, CSS 게임기
                    </span>
                    <span style={{ color: "cyan" }}>나의 역할</span>
                    <span style={{ marginBottom: "1rem" }}>
                      디자인, 프론트엔드, 배포
                    </span>
                    <span style={{ color: "cyan" }}>사용 스택</span>
                    <div className="stacks">
                      <img
                        alt="project2"
                        src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=black"
                      />
                      <img
                        alt="project2"
                        src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=React&logoColor=black"
                      />
                      <img
                        alt="project2"
                        src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white"
                      />
                      <img
                        alt="project2"
                        src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
                      />
                      <img
                        alt="project2"
                        src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                      />
                      <img
                        alt="project2"
                        src="https://img.shields.io/badge/mui-007FFF?style=for-the-badge&logo=Mui&logoColor=white"
                      />
                      <img
                        alt="project2"
                        src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"
                      />
                      <img
                        alt="project2"
                        src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=Netlify&logoColor=white"
                      />
                    </div>
                  </div>
                </div>
              )}
              <div className="descriptionButtons">
                <div className="description">
                  {showFruit2 && (
                    <img
                      className="cherry"
                      src={Cherry}
                      alt="cherry"
                      style={{
                        width: "30px",
                        height: "35px",
                        display: showFruit2,
                        position: "relative",
                      }}
                      onClick={() => handleClickFruit("cherry")}
                    />
                  )}
                  {showScore && clicked === "cherry" && (
                    <span style={{ color: "cyan" }}>{score}</span>
                  )}
                  <a
                    href="https://seongeunpark.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span>URL</span>
                  </a>
                </div>
                <div className="description">
                  {showFruit5 && (
                    <img
                      className="strawberry"
                      src={Strawberry}
                      alt="strawberry"
                      style={{ width: "30px", height: "30px" }}
                      onClick={() => handleClickFruit("strawberry")}
                    />
                  )}
                  <a
                    href="https://github.com/seoeongeueun/portfolio"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span>GITHUB</span>
                  </a>
                </div>
                <div className="description">
                  {showFruit4 && (
                    <img
                      className="grape"
                      src={Grape}
                      alt="grape"
                      style={{
                        width: "30px",
                        height: "35px",
                        display: showFruit2,
                        position: "relative",
                      }}
                      onClick={() => handleClickFruit("grape")}
                    />
                  )}
                  {showScore && clicked === "grape" && (
                    <span style={{ color: "cyan" }}>{score}</span>
                  )}
                  <a
                    href="https://github.com/seoeongeueun/react-keyboard"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span>KEYBOARD</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="projectFooter">
          <div className="scoreInfo">
            <span className="score">SCORE</span>
            <span style={{ color: "cyan", marginLeft: "1rem" }}>{score}</span>
          </div>
          <span
            style={{
              marginLeft: "7rem",
              fontSize: "1.3rem",
              marginTop: "0.5rem",
            }}
          >
            {found}/3 FRUITS
          </span>
          <div className="livesInfo">
            <span className="lives">LIVES</span>
            {[...Array(life).keys()].map((item, index) => (
              <img
                src={AlienCyan}
                key={index}
                alt="alienCyan"
                className="alienCyan"
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
export default Projects3;
