import { useEffect, useState } from 'react';
import Twinkling from '../icons/twinkling.png';
import Stars from '../icons/stars.png';
import Ufo from '../icons/ufo2.png';
import Boom from '../icons/boom.png';
import Monster1 from '../icons/monster1.png';
import Zap from "../music/zap_c_07-82067.mp3";
import AlienCyan from "../icons/alien-cyan.png";
import Me from '../icons/me.png';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import Photoshop from '../svg/adobephotoshop-color.svg';
import Javascript from '../svg/javascript-color.svg';
import Python from '../svg/python-color.svg';
import ReactIcon from '../svg/react-color.svg';
import CssIcon from '../svg/css3-color.svg';
import HtmlIcon from '../svg/html5-color.svg';
import MongodbIcon from '../svg/mongodb-color.svg';
import ReduxIcon from '../svg/redux-color.svg';
import NodeIcon from '../svg/nodedotjs-color.svg';
import Amazons3 from '../svg/amazons3-color.svg';
import ExpressIcon from '../svg/express-color.svg';
import KeyboardDoubleArrowDownRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowDownRounded';

function About({score, life, onSetScore, onSetLife, lang, setLang}) {
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    const [shoot, setShoot] = useState(false);
    const [audio1] = useState(new Audio(Zap));
    const [hit, setHit] = useState([]);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [help, setHelp] = useState(true);
    const [changeFont, setChangeFont] = useState([]);
    const [intro, setIntro] = useState({});
    const [title, setTitle] = useState({});
    const [skills, setSkills] = useState({});
    const [pic, setPic] = useState({});
    const [picHit, setPicHit] = useState(false);
    const [titleHit, setTitleHit] = useState(false);
    const [introHit, setIntroHit] = useState(false);
    const [skillsHit, setSkillsHit] = useState(false);



    useEffect(() => {
        let element = document.getElementById('intro')
        if (element) {
            let info = {x: element.getBoundingClientRect().x, y: element.getBoundingClientRect().y, w: element.getBoundingClientRect().width, h: element.getBoundingClientRect().height}
            setIntro(info);
        }
        let element2 = document.getElementById('skills')
        if (element2) {
            let info = {x: element2.getBoundingClientRect().x, y: element2.getBoundingClientRect().y, w: element2.getBoundingClientRect().width, h: element2.getBoundingClientRect().height}
            setSkills(info);
        }
        let element3 = document.getElementById('aboutMe')
        if (element3) {
            let info = {x: element3.getBoundingClientRect().x, y: element3.getBoundingClientRect().y, w: element3.getBoundingClientRect().width, h: element3.getBoundingClientRect().height}
            setTitle(info);
        }
        let element4 = document.getElementById('pic')
        if (element4) {
            let info = {x: element4.getBoundingClientRect().x, y: element4.getBoundingClientRect().y, w: element4.getBoundingClientRect().width, h: element4.getBoundingClientRect().height}
            setPic(info);
        }
        
    }, [width, height]);

    useEffect(() => {
        const animation = document.querySelector('.cardTitleHit');
        if (titleHit) {
            if (changeFont.filter(e => e.id === 'aboutMe').length === 0) {
                animation?.addEventListener("animationend", () => {
                    setChangeFont([...changeFont, {id: 'aboutMe', change: true}]);
                });
            } 
        } 
        if (introHit) {
            if (changeFont.filter(e => e.id === 'intro').length === 0) {
                const animation = document.querySelector('.cardTitleHit');
                animation?.addEventListener("animationend", () => {
                    setChangeFont([...changeFont, {id: 'intro', change: true}]);
                });              
            }
        }
        if (skillsHit) {
            if (changeFont.filter(e => e.id === 'skills').length === 0) {
                const animation = document.querySelector('.cardTitleHit');
                animation?.addEventListener("animationend", () => {
                    setChangeFont([...changeFont, {id: 'skills', change: true}]);
                });
            }
        }
        if (picHit) {
            if (changeFont.filter(e => e.id === 'pic').length === 0) {
                const animation2 = document.querySelector('.picHit');
                animation2?.addEventListener("animationend", () => {
                    setChangeFont([...changeFont, {id: 'pic', change: true}]);
                });
            }
        }
    }, [titleHit, skillsHit, introHit, picHit]);


    useEffect(() => {
        const animation = document.querySelector('.cardTitleHit');
        const animation2 = document.querySelector('.picHit');
        if (changeFont.some(e => e.id === 'aboutMe')) {
            animation?.removeEventListener("animationend", () => {
                setChangeFont([...changeFont, {id: 'aboutMe', change: true}]);
            });
        }
        if (changeFont.some(e => e.id === 'intro')) {
            animation?.removeEventListener("animationend", () => {
                setChangeFont([...changeFont, {id: 'intro', change: true}]);
            });
        }
        if (changeFont.some(e => e.id === 'skills')) {
            animation?.removeEventListener("animationend", () => {
                setChangeFont([...changeFont, {id: 'skills', change: true}]);
            });
        }
        if (changeFont.some(e => e.id === 'pic')) {
            animation2?.removeEventListener("animationend", () => {
                setChangeFont([...changeFont, {id: 'pic', change: true}]);
            });
        }
    }, [changeFont, titleHit, skillsHit, introHit, picHit])

    useEffect(() => {
        let tmp = [...hit];
        let trackMovement = setInterval(() => {
            const element = document.querySelector('.missile');
            if (!titleHit && element?.getBoundingClientRect().top <= title.y + title.h && element?.getBoundingClientRect().top >=  title.y - 10 && element?.getBoundingClientRect().left >= title.x - 20 && element?.getBoundingClientRect().left <= title.x + title.w + 20) {
                onSetScore(score+100);
                setShoot(false);
                setTitleHit(true);
                clearInterval(trackMovement);
            }
            else if (!introHit && element?.getBoundingClientRect().top <= intro.y + intro.h && element?.getBoundingClientRect().top >=  intro.y - 10 && element?.getBoundingClientRect().left >= intro.x - 20&& element?.getBoundingClientRect().left <= intro.x + intro.w + 20) {
                onSetScore(score+100);
                setShoot(false);
                setIntroHit(true);
                clearInterval(trackMovement);
            }
            else if (!skillsHit && element?.getBoundingClientRect().top <= skills.y + skills.h && element?.getBoundingClientRect().top >=  skills.y - 10 && element?.getBoundingClientRect().left >= skills.x - 20&& element?.getBoundingClientRect().left <= skills.x + skills.w + 20) {
                onSetScore(score+100);
                setShoot(false);
                setSkillsHit(true);
                clearInterval(trackMovement);
            }
            else if (!picHit && element?.getBoundingClientRect().top <= pic.y + pic.h + 30 && element?.getBoundingClientRect().top >=  pic.y - 10 && element?.getBoundingClientRect().left >= pic.x - 30 && element?.getBoundingClientRect().left <= pic.x + pic.w + 30) {
                onSetScore(score+100);
                setShoot(false);
                setPicHit(true);
                clearInterval(trackMovement);
            }
            else if (hit.filter(e => e.id === 0).length === 0 && element?.getBoundingClientRect().top <= 300  && element?.getBoundingClientRect().top >= 140 && element?.getBoundingClientRect().left >= 280 && element?.getBoundingClientRect().left <=350) {
                setShoot(false);
                tmp.push({ id: 0, hit: true });
                setHit(tmp);
                onSetScore(score+100);
                clearInterval(trackMovement);
            }
            else if (hit.filter(e => e.id === 1).length === 0 && element?.getBoundingClientRect().top <= 500 && element?.getBoundingClientRect().top >= 260 && element?.getBoundingClientRect().left >= 490 && element?.getBoundingClientRect().left <= 570) {
                setShoot(false);
                tmp.push({ id: 1, hit: true });
                setHit(tmp);
                onSetScore(score+100);
                clearInterval(trackMovement);
            }
            else if (hit.filter(e => e.id === 2).length === 0 && element?.getBoundingClientRect().top >= 60 && element?.getBoundingClientRect().left <= 960 && element?.getBoundingClientRect().left >= 880) {
                setShoot(false);
                tmp.push({ id: 2, hit: true });
                setHit(tmp);
                onSetScore(score+100);
                clearInterval(trackMovement);
            }
            else if (hit.filter(e => e.id === 3).length === 0 && element?.getBoundingClientRect().top <= height-300+100 && element?.getBoundingClientRect().top >=  height-400 && element?.getBoundingClientRect().left >= width-170 && element?.getBoundingClientRect().left <= width-70) {
                setShoot(false);
                tmp.push({ id: 3, hit: true });
                setHit(tmp);
                onSetScore(score+100);
                clearInterval(trackMovement);
            }
            else if (hit.filter(e => e.id === 4).length === 0 && element?.getBoundingClientRect().top <= height-500+100 && element?.getBoundingClientRect().top >=  height-600 && element?.getBoundingClientRect().left >= width-520 && element?.getBoundingClientRect().left <= width-450) {
                setShoot(false);
                tmp.push({ id: 4, hit: true });
                setHit(tmp);
                onSetScore(score+100);
                clearInterval(trackMovement);
            }
            else if (element?.getBoundingClientRect().bottom <= 50) {
                setShoot(false);
                clearInterval(trackMovement);
            }
            
        }, [100]);
        return () => {
            clearInterval(trackMovement);
        };
    }, [mouseX, mouseY, hit, shoot, changeFont, intro]);

    useEffect(() => {
        const resizeObserver = new ResizeObserver((event) => {
            window.requestAnimationFrame(() => {
                if (!Array.isArray(event) || !event.length) {
                  return;
                }
                setWidth(event[0].contentBoxSize[0].inlineSize);
                const bodyRef = document.getElementById("aboutPage");
                if (bodyRef){
                    setHeight(bodyRef.clientHeight)

                }
            });
        });
        resizeObserver.observe(document.getElementById("aboutPage"));
    });

    const handleMouseClick = (e) => {
        if (help) setHelp(false);
        setMouseX(e.clientX);
        setMouseY(e.clientY);
    };

    return(
        <main style={{backgroundImage: `url(${Stars})`}}>
            <div className='twinkling' style={{background: `transparent url(${Twinkling}) repeat top center`}}></div>
            <div id='aboutPage' className='aboutPage' onClick={(e) => {audio1.play(); setShoot(true); handleMouseClick(e)}} style={{ cursor: "url(" + Ufo + "), auto"}}>
                {hit.some(e => e.id === 0) ? <img className='boom' src={Boom} alt='boom' style={{left: '290px', top: '200px'}}/> : !help && <img className='monster' src={Monster1} alt='monster' style={{left: '290px', top: '200px', 'WebkitAnimation': 'shake-horizontal 15s cubic-bezier(0.455, 0.030, 0.515, 0.955) infinite both', 
                    animation: 'shake-horizontal 15s cubic-bezier(0.455, 0.030, 0.515, 0.955) 0.2*(1) infinite both'}}/>}
                {hit.some(e => e.id === 1) ? <img className='boom' src={Boom} alt='boom' style={{left: '500px', top: '400px'}}/> : !help && <img className='monster' src={Monster1} alt='monster' style={{left: '500px', top: '400px', 'WebkitAnimation': 'shake-horizontal 15s cubic-bezier(0.455, 0.030, 0.515, 0.955) 1s infinite both', 
                    animation: 'shake-horizontal 15s cubic-bezier(0.455, 0.030, 0.515, 0.955) 0.2*(2) infinite both'}}/>}
                {hit.some(e => e.id === 2) ? <img className='boom' src={Boom} alt='boom' style={{left: '900px', top: '50px'}}/> : !help && <img className='monster' src={Monster1} alt='monster' style={{left: '900px', top: '50px', 'WebkitAnimation': 'shake-horizontal 15s cubic-bezier(0.455, 0.030, 0.515, 0.955) 2s infinite both', 
                    animation: 'shake-horizontal 15s cubic-bezier(0.455, 0.030, 0.515, 0.955) 0.2*(3) infinite both'}}/>}
                {hit.some(e => e.id === 3) ? <img className='boom' src={Boom} alt='boom' style={{left: width-150, top: height-300}}/> : !help && <img className='monster' src={Monster1} alt='monster' style={{left: width-150, top: height-300, 'WebkitAnimation': 'shake-horizontal 15s cubic-bezier(0.455, 0.030, 0.515, 0.955) 1.5s infinite both', 
                    animation: 'shake-horizontal 15s cubic-bezier(0.455, 0.030, 0.515, 0.955) 0.2*(3) infinite both'}}/>}
                {hit.some(e => e.id === 4) ? <img className='boom' src={Boom} alt='boom' style={{left: width-500, top: height-500}}/> : !help && <img className='monster' src={Monster1} alt='monster' style={{left: width-500, top: height-500, 'WebkitAnimation': 'shake-horizontal 15s cubic-bezier(0.455, 0.030, 0.515, 0.955) 2.5s infinite both', 
                    animation: 'shake-horizontal 15s cubic-bezier(0.455, 0.030, 0.515, 0.955) 0.2*(3) infinite both'}}/>}
                {shoot && <div key='missile' className='missile' style={{left: mouseX+16, top: mouseY-30}}/>}
                <div className='aboutPageIntro'>
                    {titleHit ? <span className={changeFont.some(e => e.id === 'aboutMe') ? 'cardTitleChange' : 'cardTitleHit'} style={{margin: '1rem 0 1rem 1rem', fontSize: '4rem'}} >About Me</span> : <span id='aboutMe' className='cardTitle' style={{margin: '1rem 0 1rem 1rem', fontSize: '4rem'}}>About Me</span>}
                    <div className='otherPageLang'>
                        <button onClick={() => setLang('Korean')} disabled={lang === 'Korean'}>한국어</button>
                        <button onClick={() => setLang('English')} disabled={lang === 'English'}>ENGLISH</button>
                    </div>
                </div>
                <div className='aboutIntroduction' style={{marginTop: !help && '0rem'}}>
                    <div className='aboutCardContainer'>
                        <div className='aboutCard'>
                            <div className='aboutCardImageContainer'>
                                {picHit ? <img className={changeFont.some(e => e.id === 'pic') ? 'picChange' : 'picHit'} alt='me' src={Me}/> : <img className='myPic' id='pic' alt='me' src={Me}/>}
                                <div className='ring'/>
                            </div>
                            <div className='detailCategoryContainer'>
                                <div className='detailCategory'>
                                    <SentimentSatisfiedAltOutlinedIcon className='categoryIcon' sx={{fontSize: '1.5rem', color: 'cyan'}}/>
                                    {lang === 'English' ? <span>Seongeun Park</span> : <span>박성은</span>}
                                </div>
                                <div className='detailCategory'>
                                    <CakeOutlinedIcon className='categoryIcon' sx={{fontSize: '1.5rem', color: 'cyan'}}/>
                                    <span>1999.01.25</span>
                                </div>
                                <div className='detailCategory'>
                                    <SchoolOutlinedIcon className='categoryIcon' sx={{fontSize: '1.5rem', color: 'cyan'}}/>
                                    {lang === 'English' ? <span>Stony Brook University</span> : <span>뉴욕주립대학교</span>}
                                </div>
                                <div className='detailCategory'>
                                    <DesktopWindowsOutlinedIcon className='categoryIcon' sx={{fontSize: '1.5rem', color: 'cyan'}}/>
                                    {lang === 'English' ? <span>Computer Science</span> : <span>컴퓨터공학부</span>}
                                </div>
                            </div>
                        </div>
                        <div className='aboutIntroductionText'>
                            {introHit ? <span className={changeFont.some(e => e.id === 'intro') ? 'cardTitleChange' : 'cardTitleHit'}>Introduction</span> : <span className='cardTitle' id='intro'>Introduction</span>}
                            {lang === 'English' ? <div className='textContent' style={{marginTop: !introHit ? '1.5rem' : '1rem'}}>
                                <span>Hello, I'm a frontend developer who is passionate about blending functionality and aesthetics. </span>
                                <span>With my creative ideas and attention to subtle details, I hope to make the user interface visually appealing, intuitive, and interesting. </span>
                                <span>Feel free to explore my portfolio to see examples of my work, and reach out if you have any questions!</span>
                            </div>
                            : <div className='textContent' style={{marginTop: !introHit ? '1.5rem' : '1rem'}}>
                                <span>안녕하세요. 저는 성능과 시각적으로 흥미로운 인터페이스의 밸런스를 추구하는 프론트엔드 개발자입니다. </span>
                                <span>창의적인 아이디어와 디테일함으로 유저 인터페이스를 흥미롭고, 직관적으로 만들기 위해 노력합니다. </span><br></br>
                                <span>이 포트폴리오는 제 프로젝트를 소개하고, 다양한 기능을 테스트하기 위해 만들었습니다.</span>
                            </div>}
                        </div>
                    </div>
                    <div className='aboutPageSkills'>
                        {skillsHit ? <span className={changeFont.some(e => e.id === 'skills') ? 'cardTitleChange' : 'cardTitleHit'}>Skills</span> : <span className='cardTitle' id='skills'>Skills</span>}
                        <div className='skillsIcon'>
                            <div className='icon'>
                                <img alt='Javascript' src={Javascript}/>
                                <span style={{top: '25%', left: '12%'}}>JAVA<br></br>SCRIPT</span>
                            </div>
                            <div className='icon'>
                                <img alt='Python' src={Python}/>
                                <span style={{left: '12%'}}>PYTHON</span>
                            </div>
                            <div className='icon'>
                                <img alt='React' src={ReactIcon}/>
                                <span>REACT</span>
                            </div>
                            <div className='icon'>
                                <img alt='Redux' src={ReduxIcon}/>
                                <span>REDUX</span>
                            </div>
                            <div className='icon'>
                                <img alt='Nodejs' src={NodeIcon}/>
                                <span style={{top: '30%', left: '25%'}}>NODE<br></br>JS</span>
                            </div>
                            <div className='icon'>
                                <img alt='html5' src={HtmlIcon}/>
                                <span>HTML5</span>
                            </div>
                            <div className='icon'>
                                <img alt='Css' src={CssIcon}/>
                                <span style={{left: '30%'}}>CSS</span>
                            </div>
                            <div className='icon'>
                                <img alt='Mongodb' src={MongodbIcon}/>
                                <span style={{top: '25%', left: '18%'}}>MONGO<br></br>DB</span>
                            </div>
                            <div className='icon'>
                                <img alt='Express' src={ExpressIcon}/>
                                <span style={{left: '6%'}}>EXPRESS</span>
                            </div>
                            <div className='icon'>
                                <img alt='Amazons3' src={Amazons3}/>
                                <span style={{top: '30%', left: '12%'}}>AMAZON<br></br>S3</span>
                            </div>
                            <div className='icon'>
                                <img alt='Photoshop' src={Photoshop}/>
                                <span style={{top: '27%', left: '20%'}}>Photo<br></br>SHOP</span>
                            </div>
                        </div>
                    </div>
                    {!help && <div className='scrollHelp'>
                        {lang == 'English' ? <span>SCROLL DOWN TO VIEW</span> : <span>스크롤해서 더보기</span>}
                        <KeyboardDoubleArrowDownRoundedIcon className='downArrow' sx={{fontSize: '2rem'}}/>
                    </div>}
                </div>
                {help ? <div className='help'>
                            <span>CLICK ANYWHERE TO FIRE!</span>
                            <span style={{fontSize: '2rem', color: 'white'}}>0/9 TARGETS</span>
                        </div>
                    : <div className='projectFooter' style={{width: '97vw'}}>
                        <div className='scoreInfo'>
                            <span className='score' style={{fontFamily: 'DGM'}}>SCORE</span>
                            <span style={{color: 'cyan', marginLeft: '1rem', fontFamily: 'DGM'}}>{score}</span>
                        </div>
                        <span style={{marginLeft: '9rem'}}>{changeFont.length + hit.length}/9 TARGETS</span>
                        <div className='livesInfo' style={{marginRight: '1rem'}}>
                            <span className='lives' style={{fontFamily: 'DGM'}}>LIVES</span>
                            {[...Array(life).keys()].map((item, index) => (
                                <img src={AlienCyan} key={index} alt='alienCyan' className='alienCyan'/>
                            ))}
                        </div>
                </div>}
            </div>
        </main>
    )
}
export default About;