import { useEffect, useState } from 'react';
import Twinkling from '../icons/twinkling.png';
import Stars from '../icons/stars.png';
import KeyboardContainer from '../containers/KeyboardContainer';

function About() {

    return(
        <main style={{backgroundImage: `url(${Stars})`}}>
            <div className='twinkling' style={{background: `transparent url(${Twinkling}) repeat top center`}}></div>
            <div className='aboutPage'>
                <div className='aboutPageIntro'>
                    <p>Seongeun Park</p>
                    <span>I am a full stack developer who is passionate about asethetics and designs. I am proficient in JavaScript, HTML, CSS, and Adobe CC. I love coding, designing, and learning new things!</span>
                </div>
            </div>
        </main>
    )
}
export default About;