import { useEffect, useState, useRef } from 'react';
import Twinkling from '../icons/twinkling.png';
import Stars from '../icons/stars.png';
import Ufo from '../icons/ufowhite (1) (1).png';

function About(props) {
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    const [shoot, setShoot] = useState(false);
    const elementRef = useRef(null);

    const cursorStyle = {
        cursor: `${Ufo}, auto`,
        width: '32px',
        height: '32px',
    };

    const handleMouseClick = (e) => {
        if (!shoot) setShoot(true);
        setMouseX(e.clientX);
        setMouseY(e.clientY);
    };

    useEffect(() => {
        setInterval(() => {
            const element = document.querySelector('.missile');
            if (shoot && element?.getBoundingClientRect().bottom <= 30) {
                setShoot(false);
            }
        }, [1000]); 
    });

    useEffect(() => {
    }, [mouseX, mouseY])

    return(
        <main style={{backgroundImage: `url(${Stars})`}}>
            <div className='twinkling' style={{background: `transparent url(${Twinkling}) repeat top center`}}></div>
            <div className='aboutPage' onClick={(e) => handleMouseClick(e)} style={{ cursor: "url(" + Ufo + "), default"}}>
                {shoot && <div className='missile' style={{left: mouseX+12, top: mouseY-30}} />}
                <div className='otherPageIntro' style={{marginTop: shoot && '-30px'}}>
                    <p>About Me</p>
                    <div className='otherPageLang'>
                        <button onClick={() => props.setLang('Korean')} disabled={props.lang === 'Korean'}>한국어</button>
                        <button onClick={() => props.setLang('English')} disabled={props.lang === 'English'}>ENGLISH</button>
                    </div>
                </div>
                <div className='aboutIntroduction'>
                        <span>I am a frontend developer who is passionate about blending functionality and aesthetics. While I have experience in both frontend and backend development, my attention to subtle details and my passion for crafting delightful user interactions have driven me to pursue a frontend development career. </span>
                        <span>I like designing and I am proficient in using designing tools like Figma and Photoshop. With my creative ideas, I hope to make the the user interface visually appealing, intuitive, and interesting. </span>
                        <span>Feel free to explore my portfolio to see examples of my work, and don't hesitate to reach out if you have any questions!</span>
                </div>
            </div>
        </main>
    )
}
export default About;