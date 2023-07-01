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
                {hit.some(e => e.id === 0) ? <img className='boom' src={Boom} alt='boom' style={{left: '290px', top: '200px'}}/> : <StarIcon sx={{zIndex: '3', position: 'absolute', fontSize: '40px', left: '290px', top: '200px'}}/>}
                {hit.some(e => e.id === 1) ? <img className='boom' src={Boom} alt='boom' style={{left: '500px', top: '400px'}}/> : <StarIcon sx={{zIndex: '3', position: 'absolute', fontSize: '40px', left: '500px', top: '400px'}}/>}
                {hit.some(e => e.id === 2) ? <img className='boom' src={Boom} alt='boom' style={{left: '900px', top: '50px'}}/> : <StarIcon sx={{zIndex: '3', position: 'absolute', fontSize: '40px', left: '900px', top: '50px'}}/>}
                {hit.some(e => e.id === 3) ? <img className='boom' src={Boom} alt='boom' style={{left: width-150, top: height-300}}/> : <StarIcon sx={{zIndex: '3', position: 'absolute', fontSize: '40px', left: width-150, top: height-300}}/>}
                {hit.some(e => e.id === 4) ? <img className='boom' src={Boom} alt='boom' style={{left: width-500, top: height-500}}/> : <StarIcon sx={{zIndex: '3', position: 'absolute', fontSize: '40px', left: width-500, top: height-500}}/>}
                {shoot && <div key='missile' className='missile' style={{left: mouseX+16, top: mouseY-30}} />}
                <div className='otherPageIntro' style={{marginTop: shoot && '-23px'}}>
                    {titleHit ? <p className='titleHitcard'>About Me</p> : <span className='cardTitle' style={{margin: '2rem 0 1rem 4rem'}}>About Me</span>}
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
                                    <span style={{color: 'cyan'}}>NAME</span>
                                    {lang === 'English' ? <span>Seongeun Park</span> : <span>박성은</span>}
                                </div>
                                <div className='detailCategory'>
                                    <span style={{color: 'cyan'}}>AGE</span>
                                    <span>1999.01.25</span>
                                </div>
                                <div className='detailCategory'>
                                    <span style={{color: 'cyan'}}>EDU</span>
                                    {lang === 'English' ? <span>Stony Brook University</span> : <span>뉴욕주립대학교</span>}
                                </div>
                                <div className='detailCategory'>
                                    <span style={{color: 'cyan'}}>MAJOR</span>
                                    {lang === 'English' ? <span>Computer Science</span> : <span>컴퓨터공학부</span>}
                                </div>
                            </div>
                        </div>
                        <dic className='aboutCard' style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', minHeight: '20rem'}}>
                            <span className='cardTitle'>Timeline</span>
                            <div className='timeline'>
                                <div className='timelineSection'>
                                    <div className='timelineStick'/>
                                    <div className='sectionDetail'>
                                        <span>2020</span>
                                        <div className='line'/>
                                        {lang === 'English' ? <span style={{marginTop: '7px'}}>Intern</span> : <span style={{marginTop: '10px'}}>학부생</span>}
                                        {lang === 'English' ? <span>Intern</span> : <span>조교</span>}
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
                        </dic>
                    </div>
                    <div className='aboutIntroductionText'>
                        <span className='cardTitle' style={{marginBottom: '5rem !important'}}>Introduction<br></br></span>
                        <span>Hello! I'm a frontend developer who is passionate about blending functionality and aesthetics. While I've worked on both frontend and backend development, my attention to subtle details and my passion for crafting delightful user interactions have driven me to pursue a frontend development career. </span>
                        <span>I like designing and I've experience in using designing tools like Figma and Photoshop. With my creative ideas, I hope to make the user interface visually appealing, intuitive, and interesting. </span><br></br>
                        <span>Feel free to explore my portfolio to see examples of my work, and don't hesitate to reach out if you have any questions!</span>
                    </div>
                    {help && <span style={{marginTop: '5rem', color: 'cyan', display: 'block',textAlign: 'center', fontSize: '3rem', fontFamily: 'DGM'}}>CLICK ANYWHERE TO FIRE!</span>}
                </div>
                {!help && <div className='projectFooter'>
                        <div className='scoreInfo'>
                            <span className='score' style={{fontFamily: 'DGM'}}>SCORE</span>
                            <span style={{color: 'cyan', marginLeft: '1rem', fontFamily: 'DGM'}}>{score}</span>
                        </div>
                        <div className='livesInfo'>
                            <span className='lives' style={{fontFamily: 'DGM'}}>LIVES</span>
                            {[...Array(life).keys()].map((item) => (
                                <img src={AlienCyan} alt='alienCyan' className='alienCyan'/>
                            ))}
                        </div>
                </div>}
            </div>
        </main>
    )
}
export default About;