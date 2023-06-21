import { useEffect, useState, useRef } from 'react';
import Twinkling from '../icons/twinkling.png';
import Stars from '../icons/stars.png';
import KeyboardContainer from '../containers/KeyboardContainer';
import Projects from './Projects.js';

function Contact() {

    return(
        <main style={{backgroundImage: `url(${Stars})`}}>
            <div className='twinkling' style={{background: `transparent url(${Twinkling}) repeat top center`}}></div>
            <div className='contactPage'>
                <div className='contactPageIntro'>
                    <span class="contactTitle">CONTACT</span>
                    <div className='scoreboard'>
                        <div className='boardTitle'>
                            <span>NAME</span>
                            <div className='boardContent'>
                                <span className='cursor'>|</span>
                            </div>
                        </div>
                        <div className='boardTitle'>
                            <span>SCORE</span>
                            <div className='boardContent'>
                                <span></span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </main>
    )
}
export default Contact;