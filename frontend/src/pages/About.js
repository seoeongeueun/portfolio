import { useEffect, useState} from 'react';
import Twinkling from '../icons/twinkling.png';
import Stars from '../icons/stars.png';

function About() {

    return(
        <main style={{backgroundImage: `url(${Stars})`}}>
            <div className='twinkling' style={{background: `transparent url(${Twinkling}) repeat top center`}}></div>
            <div className='otherPage'>
                <div className='otherPageIntro'>
                    <p>About Me</p>
                    <span>I am a front end developer who is proficient in JavaScript, HTML, CSS, and Adobe PS6.</span>
                    <span><br/>I love coding, designing, and learning new things!</span>
                </div>
            </div>
        </main>
    )
}
export default About;