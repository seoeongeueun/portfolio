import { useEffect, useState, useRef } from 'react';
import Twinkling from '../icons/twinkling.png';
import Stars from '../icons/stars.png';
import KeyboardContainer from '../containers/KeyboardContainer';
import Projects from './Projects.js';

function About() {
    const outerRef = useRef();

    useEffect(() => {
        const wheelHandler = (e) => {
            e.preventDefault();
            const { deltaY } = e;
            const { scrollTop } = outerRef.current;
            const pageHeight = window.innerHeight;
            if (deltaY > 0) {
                outerRef.current?.scrollTo({
                    top: pageHeight * (Math.floor(scrollTop / pageHeight) + 1),
                    behavior: "smooth",
                });
            } else {
                outerRef.current?.scrollTo({
                    top: pageHeight * (Math.floor(scrollTop / pageHeight) - 1),
                    behavior: "smooth",
                });
            }
        };
        const outerRefCurr = outerRef.current;
        outerRefCurr.addEventListener("wheel", wheelHandler);
        return () => {
            outerRefCurr.removeEventListener("wheel", wheelHandler);
        };
    }, []);

    return(
        <main style={{backgroundImage: `url(${Stars})`}}>
            <div className='twinkling' style={{background: `transparent url(${Twinkling}) repeat top center`}}></div>
            <div ref={outerRef} className='outer'>
                <div className='aboutPage'>
                    <div className='aboutPageIntro'>
                        <p>About Me</p>
                        <span>I am a front end developer who is proficient in JavaScript, HTML, CSS, and Adobe PS6.</span>
                        <span><br/>I love coding, designing, and learning new things!</span>
                    </div>
                </div>
                <Projects/>
            </div>
        </main>
    )
}
export default About;