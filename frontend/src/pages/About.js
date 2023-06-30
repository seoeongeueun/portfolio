import { useEffect, useState } from 'react';
import Twinkling from '../icons/twinkling.png';
import Stars from '../icons/stars.png';
import Ufo from '../icons/ufo2.png';
import Boom from '../icons/boom.png';
import Monster1 from '../icons/monster1.png';
import Zap from "../music/zap_c_07-82067.mp3";
import AlienCyan from "../icons/alien-cyan.png";
import School from "../icons/Stony_Brook_University_seal.png";

function About({score, life, onSetScore, onSetLife, lang, setLang}) {
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    const [shoot, setShoot] = useState(false);
    const [audio1] = useState(new Audio(Zap));
    const [hit, setHit] = useState([]);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    const handleMouseClick = (e) => {
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
    }, [shoot])

    useEffect(() => {
        let tmp = [...hit];
        let trackMovement = setInterval(() => {
            const element = document.querySelector('.missile');
            if (hit.filter(e => e.id === 0).length === 0 && element?.getBoundingClientRect().top <= 300  && element?.getBoundingClientRect().top >= 150 && element?.getBoundingClientRect().left >= 190 && element?.getBoundingClientRect().left <=260) {
                setShoot(false);
                tmp.push({ id: 0, hit: true });
                setHit(tmp);
                onSetScore(score+100);
                clearInterval(trackMovement);
            }
            else if (hit.filter(e => e.id === 1).length === 0 && element?.getBoundingClientRect().top <= 500 && element?.getBoundingClientRect().top >= 350 && element?.getBoundingClientRect().left >= 390 && element?.getBoundingClientRect().left <= 470) {
                setShoot(false);
                tmp.push({ id: 1, hit: true });
                setHit(tmp);
                onSetScore(score+100);
                clearInterval(trackMovement);
            }
            else if (hit.filter(e => e.id === 2).length === 0 && element?.getBoundingClientRect().top <= 150 && element?.getBoundingClientRect().top >= 20 && element?.getBoundingClientRect().left >= 890 && element?.getBoundingClientRect().left <= 960 ) {
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
                {hit.some(e => e.id === 0) ? <img className='boom' src={Boom} alt='boom' style={{left: '200px', top: '200px'}}/> : <img className='monster' src={Monster1} alt='monster1' style={{left: '200px', top: '200px'}}/>}
                {hit.some(e => e.id === 1) ? <img className='boom' src={Boom} alt='boom' style={{left: '400px', top: '400px'}}/> : <img className='monster' src={Monster1} alt='monster1' style={{left: '400px', top: '400px'}}/>}
                {hit.some(e => e.id === 2) ? <img className='boom' src={Boom} alt='boom' style={{left: '900px', top: '50px'}}/> : <img className='monster' src={Monster1} alt='monster1' style={{left: '900px', top: '50px'}}/>}
                {hit.some(e => e.id === 3) ? <img className='boom' src={Boom} alt='boom' style={{left: width-150, top: height-300}}/> : <img className='monster' src={Monster1} alt='monster1' style={{left: width-150, top: height-300}}/>}
                {shoot && <div key='missile' className='missile' style={{left: mouseX+16, top: mouseY-30}} />}
                <div className='otherPageIntro' style={{marginTop: shoot && '-30px'}}>
                    <p>About Me</p>
                    <div className='otherPageLang'>
                        <button onClick={() => setLang('Korean')} disabled={lang === 'Korean'}>한국어</button>
                        <button onClick={() => setLang('English')} disabled={lang === 'English'}>ENGLISH</button>
                    </div>
                </div>
                <div className='aboutIntroduction'>
                        <span>I am a frontend developer who is passionate about blending functionality and aesthetics. While I have worked on both frontend and backend development, my attention to subtle details and my passion for crafting delightful user interactions have driven me to pursue a frontend development career. </span>
                        <span>I like designing and I have experience in using designing tools like Figma and Photoshop. With my creative ideas, I hope to make the user interface visually appealing, intuitive, and interesting. </span>
                        <span>Feel free to explore my portfolio to see examples of my work, and don't hesitate to reach out if you have any questions!</span>
                </div>
                <div className='aboutCard'>
                    <img alt='school' src={School}/>
                    <span>Bachelor's Degree in Computer Science at Stony Brook University</span>
                </div>
                <div className='projectFooter'>
                        <div className='scoreInfo'>
                            <span className='score'>SCORE</span>
                            <span style={{color: 'cyan', marginLeft: '1rem'}}>{score}</span>
                        </div>
                        <div className='livesInfo'>
                            <span className='lives'>LIVES</span>
                            {[...Array(life).keys()].map((item) => (
                                <img src={AlienCyan} alt='alienCyan' className='alienCyan'/>
                            ))}
                        </div>
                </div>
            </div>
        </main>
    )
}
export default About;