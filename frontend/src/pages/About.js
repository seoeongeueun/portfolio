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
        
    }, [width, height])

    // useEffect(() => {
    //     if (shoot) {
    //         const animation = document.querySelector('.missile');
    //         animation?.addEventListener("animationend", () => {
    //             setShoot(false);
    //         });
    //     }
    // }, [shoot]);

    useEffect(() => {
        console.log(changeFont)
    }, [changeFont])

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
    }, [titleHit, skillsHit, introHit]);


    useEffect(() => {
        const animation = document.querySelector('.cardTitleHit');
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
    }, [changeFont, titleHit, skillsHit, introHit])

    useEffect(() => {
        let tmp = [...hit];
        let trackMovement = setInterval(() => {
            const element = document.querySelector('.missile');
            if (!titleHit && element?.getBoundingClientRect().top <= title.y + title.h + 30 && element?.getBoundingClientRect().top >=  title.y - 10 && element?.getBoundingClientRect().left >= title.x && element?.getBoundingClientRect().left <= title.x + title.w) {
                onSetScore(score+100);
                setShoot(false);
                setTitleHit(true);
                clearInterval(trackMovement);
            }
            else if (!introHit && element?.getBoundingClientRect().top <= intro.y + intro.h + 30 && element?.getBoundingClientRect().top >=  intro.y - 10 && element?.getBoundingClientRect().left >= intro.x && element?.getBoundingClientRect().left <= intro.x + intro.w) {
                onSetScore(score+100);
                setShoot(false);
                setIntroHit(true);
                clearInterval(trackMovement);
            }
            else if (!skillsHit && element?.getBoundingClientRect().top <= skills.y + skills.h + 30 && element?.getBoundingClientRect().top >=  skills.y - 10 && element?.getBoundingClientRect().left >= skills.x && element?.getBoundingClientRect().left <= skills.x + skills.w) {
                onSetScore(score+100);
                setShoot(false);
                setSkillsHit(true);
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
            else if (hit.filter(e => e.id === 2).length === 0 && element?.getBoundingClientRect().top >= 60 && element?.getBoundingClientRect().left >= 890 && element?.getBoundingClientRect().left <= 960 ) {
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
                {hit.some(e => e.id === 0) ? <img className='boom' src={Boom} alt='boom' style={{left: '290px', top: '200px'}}/> : <img className='monster' src={Monster1} alt='monster' style={{left: '290px', top: '200px', 'WebkitAnimation': 'shake-horizontal 15s cubic-bezier(0.455, 0.030, 0.515, 0.955) infinite both', 
                    animation: 'shake-horizontal 15s cubic-bezier(0.455, 0.030, 0.515, 0.955) 0.2*(1) infinite both'}}/>}
                {hit.some(e => e.id === 1) ? <img className='boom' src={Boom} alt='boom' style={{left: '500px', top: '400px'}}/> : <img className='monster' src={Monster1} alt='monster' style={{left: '500px', top: '400px', 'WebkitAnimation': 'shake-horizontal 15s cubic-bezier(0.455, 0.030, 0.515, 0.955) 1s infinite both', 
                    animation: 'shake-horizontal 15s cubic-bezier(0.455, 0.030, 0.515, 0.955) 0.2*(2) infinite both'}}/>}
                {hit.some(e => e.id === 2) ? <img className='boom' src={Boom} alt='boom' style={{left: '900px', top: '50px'}}/> : <img className='monster' src={Monster1} alt='monster' style={{left: '900px', top: '50px', 'WebkitAnimation': 'shake-horizontal 15s cubic-bezier(0.455, 0.030, 0.515, 0.955) 2s infinite both', 
                    animation: 'shake-horizontal 15s cubic-bezier(0.455, 0.030, 0.515, 0.955) 0.2*(3) infinite both'}}/>}
                {hit.some(e => e.id === 3) ? <img className='boom' src={Boom} alt='boom' style={{left: width-150, top: height-300}}/> : <img className='monster' src={Monster1} alt='monster' style={{left: width-150, top: height-300, 'WebkitAnimation': 'shake-horizontal 15s cubic-bezier(0.455, 0.030, 0.515, 0.955) 1.5s infinite both', 
                    animation: 'shake-horizontal 15s cubic-bezier(0.455, 0.030, 0.515, 0.955) 0.2*(3) infinite both'}}/>}
                {hit.some(e => e.id === 4) ? <img className='boom' src={Boom} alt='boom' style={{left: width-500, top: height-500}}/> : <img className='monster' src={Monster1} alt='monster' style={{left: width-500, top: height-500, 'WebkitAnimation': 'shake-horizontal 15s cubic-bezier(0.455, 0.030, 0.515, 0.955) 2.5s infinite both', 
                    animation: 'shake-horizontal 15s cubic-bezier(0.455, 0.030, 0.515, 0.955) 0.2*(3) infinite both'}}/>}
                {shoot && <div key='missile' className='missile' style={{left: mouseX+16, top: mouseY-30}}/>}
                <div className='aboutPageIntro' style={{marginTop: shoot && '-35px'}}>
                    {titleHit ? <span className={changeFont.some(e => e.id === 'aboutMe') ? 'cardTitleChange' : 'cardTitleHit'} style={{margin: '1rem 0 1rem 2rem'}} >About Me</span> : <span id='aboutMe' className='cardTitle' style={{margin: '1rem 0 1rem 2rem'}}>About Me</span>}
                    <div className='otherPageLang'>
                        <button onClick={() => setLang('Korean')} disabled={lang === 'Korean'}>한국어</button>
                        <button onClick={() => setLang('English')} disabled={lang === 'English'}>ENGLISH</button>
                    </div>
                </div>
                <div className='aboutIntroduction'>
                    <div className='aboutCardContainer'>
                        <div className='aboutCard'>
                            <div className='aboutCardImageContainer'>
                                <img className='myPic' alt='me' src={Me}/>
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
                        <div className='aboutIntroductionText' style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', minHeight: '20rem'}}>
                            {introHit ? <span className={changeFont.some(e => e.id === 'intro') ? 'cardTitleChange' : 'cardTitleHit'}>Introduction</span> : <span className='cardTitle' id='intro'>Introduction</span>}
                            <div className='textContent' style={{marginTop: '1rem'}}>
                                <span>I'm a frontend developer who is passionate about blending functionality and aesthetics. </span>
                                <span>With my creative ideas and attention to subtle details, I hope to make the user interface visually appealing, intuitive, and interesting. </span><br></br>
                                <span>Feel free to explore my portfolio to see examples of my work, and reach out if you have any questions!</span>
                            </div>
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
                    {help && <span style={{marginTop: '2rem', color: 'cyan', display: 'block',textAlign: 'center', fontSize: '3rem', fontFamily: 'DGM'}}>CLICK ANYWHERE TO FIRE!</span>}
                </div>
                {!help && <div className='projectFooter' style={{width: '100vw'}}>
                        <div className='scoreInfo'>
                            <span className='score' style={{fontFamily: 'DGM'}}>SCORE</span>
                            <span style={{color: 'cyan', marginLeft: '1rem', fontFamily: 'DGM'}}>{score}</span>
                        </div>
                        <div className='livesInfo'>
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