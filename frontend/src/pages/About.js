import { useEffect, useState } from 'react';
import Twinkling from '../icons/twinkling.png';
import Stars from '../icons/stars.png';
import Ufo from '../icons/ufo2.png';
import Boom from '../icons/boom.png';
import Monster1 from '../icons/monster1.png';
import Zap from "../music/zap_c_07-82067.mp3";
import AlienCyan from "../icons/alien-cyan.png";
import School from "../icons/Stony_Brook_University_seal.png";
import Me from '../icons/me.png';
import StarIcon from '@mui/icons-material/Star';
import BlurOnIcon from '@mui/icons-material/BlurOn';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import AndroidOutlinedIcon from '@mui/icons-material/AndroidOutlined';

function About({score, life, onSetScore, onSetLife, lang, setLang}) {
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    const [shoot, setShoot] = useState(false);
    const [audio1] = useState(new Audio(Zap));
    const [hit, setHit] = useState([]);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [titleHit, setTitleHit] = useState(false);
    const [help, setHelp] = useState(true);
    const [changeFont, setChangeFont] = useState([]);

    const handleMouseClick = (e) => {
        if (help) setHelp(false);
        setMouseX(e.clientX);
        setMouseY(e.clientY);
    };

    useEffect(() => {
        if (shoot) {
            const animation = document.querySelector('.missile');
            animation?.addEventListener("animationend", () => {
                setShoot(false);
            });
        }
    }, [shoot]);

    useEffect(() => {
        if (titleHit) {
            const animation = document.querySelector('.cardTitleHit');
            animation?.addEventListener("animationend", () => {
                setChangeFont([...changeFont, {id: 'aboutMe', change: true}]);
                console.log('donee')
            });
        }
    }, [titleHit, changeFont]);

    useEffect(() => {
        console.log(changeFont)
    }, [changeFont])

    useEffect(() => {
        let tmp = [...hit];
        let trackMovement = setInterval(() => {
            const element = document.querySelector('.missile');
            if (!titleHit && element?.getBoundingClientRect().top <= 50 && element?.getBoundingClientRect().left >= 10 && element?.getBoundingClientRect().left <= 300) {
                onSetScore(score+100);
                setShoot(false);
                setTitleHit(true);
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
            else if (hit.filter(e => e.id === 2).length === 0 && element?.getBoundingClientRect().top <= 150 && element?.getBoundingClientRect().top >= 80 && element?.getBoundingClientRect().left >= 890 && element?.getBoundingClientRect().left <= 960 ) {
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
    }, [mouseX, mouseY, hit, shoot]);

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
                <div className='otherPageIntro' style={{marginTop: shoot && '-34px'}}>
                    {titleHit ? <span className='cardTitleHit' style={{margin: '1rem 0 1rem 4rem', fontSize: '4rem', fontFamily: changeFont.some(e => e.id === 'aboutMe') && 'DGM', textShadow: changeFont.some(e => e.id === 'aboutMe') && 'none'}}>About Me</span> : <span className='cardTitle' style={{margin: '1rem 0 1rem 4rem', fontSize: '4rem'}}>About Me</span>}
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
                        <div className='aboutCard' style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', minHeight: '20rem'}}>
                            <span className='cardTitle'>Timeline</span>
                            <div className='timeline'>
                                <div className='timelineSection'>
                                    <div className='timelineStick'/>
                                    <div className='sectionDetail'>
                                        <span>2020</span>
                                        <div className='line'/>
                                        {lang === 'English' ? <span style={{marginTop: '7px'}}>Teaching</span> : <span style={{marginTop: '10px'}}>학부생</span>}
                                        {lang === 'English' ? <span>Assistant</span> : <span>조교</span>}
                                    </div>
                                </div>
                                <div className='timelineSection2' >
                                    <div className='timelineStick2'/>
                                    <div className='sectionDetail2'>
                                        <span>2022</span>
                                        <div className='line2'/>
                                        {lang === 'English' ? <span style={{marginTop: '7px'}}>Intern</span> : <span style={{marginTop: '10px'}}>인턴</span>}
                                        {lang === 'English' ? <span>Full stack</span> : <span>풀스택</span>}
                                        {lang === 'English' ? <span>Developer</span> : <span>개발자</span>}
                                    </div>
                                </div>
                                <div className='timelineSection' style={{left: '50%'}}>
                                    <div className='timelineStick'/>
                                    <div className='sectionDetail'>
                                        <span>2022</span>
                                        <div className='line'/>
                                        {lang === 'English' ? <span style={{marginTop: '7px'}}>Graduation</span> : <span style={{marginTop: '10px'}}>졸업</span>}
                                    </div>
                                </div>
                                <div className='timelineSection2' style={{left: '75%'}}>
                                    <div className='timelineStick2'/>
                                    <div className='sectionDetail2'>
                                        <span>2023</span>
                                        <div className='line2'/>
                                        {lang === 'English' ? <span style={{marginTop: '7px'}}>Finished</span> : <span style={{marginTop: '10px'}}>프로젝트2</span>}
                                        {lang === 'English' ? <span>Project2</span> : <span>& 프로젝트3</span>}
                                        {lang === 'English' ? <span>& Project 3</span> : <span>완료</span>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='aboutIntroductionText'>
                        <span className='cardTitle'>Introduction<br></br></span>
                        <div className='textContent' style={{marginTop: '1rem'}}>
                            <span>Hello! I'm a frontend developer who is passionate about blending functionality and aesthetics. While I've worked on both frontend and backend development, my attention to subtle details and my passion for crafting delightful user interactions have driven me to pursue a frontend development career. </span>
                            <span>With my creative ideas, I hope to make the user interface visually appealing, intuitive, and interesting. </span><br></br>
                            <span>Feel free to explore my portfolio to see examples of my work, and don't hesitate to reach out if you have any questions!</span>
                        </div>
                    </div>
                    {help && <span style={{marginTop: '2rem', color: 'cyan', display: 'block',textAlign: 'center', fontSize: '3rem', fontFamily: 'DGM'}}>CLICK ANYWHERE TO FIRE!</span>}
                </div>
                {!help && <div className='projectFooter'>
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