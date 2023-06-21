import { useEffect, useState, useRef } from 'react';
import Twinkling from '../icons/twinkling.png';
import Stars from '../icons/stars.png';
import KeyboardContainer from '../containers/KeyboardContainer';
import Projects from './Projects.js';
import { useSelector, useDispatch } from 'react-redux';
import AlienCyan from '../icons/alien-cyan.png';

function Contact() {
    const { score, life } = useSelector(state => ({
        score: state.score.score,
        life: state.score.life
    }));

    return(
        <main style={{backgroundImage: `url(${Stars})`}}>
            <div className='twinkling' style={{background: `transparent url(${Twinkling}) repeat top center`}}></div>
            <div className='contactPage'>
                <div className='contactPageIntro'>
                    <span class="contactTitle">CONTACT</span>
                    <span className='contactDesc'>CONNECT WITH ME!</span>
                    <div className='scoreboard'>
                        <div className='boardTitle'>
                            <span>NAME</span>
                            <div className='boardContent'>
                                <span>SEONGEUN PARK</span>
                                <span className='cursor'>|</span>
                            </div>
                        </div>
                        <div className='boardTitle'>
                            <span>SCORE</span>
                            <div className='boardContent'>
                                <span>SEONGEUN9901@GMAIL.COM</span>
                                <span>{score}</span>
                            </div>
                        </div>
                        <div className='boardTitle'>
                            <span>LIVES</span>
                            <div className='boardContent'>
                                <span>g</span>
                                {[...Array(life).keys()].map((item) => (
                                <img src={AlienCyan} alt='alienCyan' className='alienCyan'/>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </main>
    )
}
export default Contact;