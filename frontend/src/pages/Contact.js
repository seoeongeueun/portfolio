import { useEffect, useState, useRef } from 'react';
import Twinkling from '../icons/twinkling.png';
import Stars from '../icons/stars.png';
import KeyboardContainer from '../containers/KeyboardContainer';
import Projects from './Projects.js';
import { useSelector, useDispatch } from 'react-redux';
import AlienCyan from '../icons/alien-cyan.png';
import Zap from "../music/zap_c_07-82067.mp3"

function Contact() {
    const [name, setName] = useState('');
    const [change, setChange] = useState(false);
    const [audio, setAudio] = useState(new Audio(Zap));
    const { score, life } = useSelector(state => ({
        score: state.score.score,
        life: state.score.life
    }));

    useEffect(() => {
        if (name.length > 3 ) {
            setName(name.substring(0,3));
        }
    }, [name])

    return(
        <main style={{backgroundImage: `url(${Stars})`}}>
            <div className='twinkling' style={{background: `transparent url(${Twinkling}) repeat top center`}}></div>
            <div className='contactPage'>
                <div className='contactPageIntro'>
                    <span class="contactTitle">CONTACT</span>
                    <span className='contactDesc'>CONNECT WITH ME!</span>
                    <div className='scoreboard'>
                        <div className='bestPlayer'>
                            <span style={{marginBottom: '1rem'}}>NEW SCORE</span>
                            <div className='playerSpec'>
                                <div className='boardTitle'>
                                    <div className='boardContent'>
                                        {change ? <span>{name}</span> : <span>SEONGEUN PARK</span>}
                                    </div>
                                </div>
                                <div className='boardTitle'>
                                    <div className='boardContent'>
                                        {change ? <span>{score}</span> : <span>SEONGEUN9901@GMAIL.COM</span>}
                                    </div>
                                </div>
                                <div className='boardTitle'>
                                    <div className='boardContent'>
                                        {change ? <span>{[...Array(life).keys()].map((item) => (
                                        <img src={AlienCyan} alt='alienCyan' className='alienCyan'/>
                                        ))}</span> : <span>??</span>}
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className='plyers'>
                            <div className='playerSpec'>
                                <div className='boardTitle'>
                                    <span style={{marginBottom: '1rem'}}>NAME</span>
                                    <div className='boardContent'>
                                        {change && <span>SEONGEUN PARK</span>}
                                        <span>JKP</span>
                                        <div className='currentName'>
                                            <span style={name[0] && {color: 'cyan', marginRight: '0'}}>{name[0] ? name[0] : '_'}</span>
                                            <span style={name[1] && {color: 'cyan', marginRight: '0'}}>{name[1] ? name[1] : '_'}</span>
                                            <span style={name[2] && {color: 'cyan', marginRight: '0'}}>{name[2] ? name[2] : '_'}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='boardTitle'>
                                    <span style={{marginBottom: '1rem'}}>SCORE</span>
                                    <div className='boardContent'>
                                        {change && <span>SEONGEUN9901@GMAIL.COM</span>}
                                        <span>300</span>
                                        <span style={{color: 'cyan'}}>{score}</span>
                                    </div>
                                </div>
                                <div className='boardTitle'>
                                    <span style={{marginBottom: '1rem'}}>LIVES</span>
                                    <div className='boardContent'>
                                        {change && <span>???</span>}
                                        <span>{[...Array(2).keys()].map((item) => (
                                        <img src={AlienCyan} alt='alienCyan' className='alienCyan'/>
                                        ))}</span>
                                        <span>{[...Array(life).keys()].map((item) => (
                                        <img src={AlienCyan} alt='alienCyan' className='alienCyan'/>
                                        ))}</span>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        {!change && <div className='scoardboardName'>
                            <div className='nameLine1'>
                                <span onClick={() => setName(name+'A')}>A</span>
                                <span onClick={() => setName(name+'B')}>B</span>
                                <span onClick={() => setName(name+'C')}>C</span>
                                <span onClick={() => setName(name+'D')}>D</span>
                                <span onClick={() => setName(name+'E')}>E</span>
                                <span onClick={() => setName(name+'F')}>F</span>
                            </div>
                            <div className='nameLine1'>
                                <span onClick={() => setName(name+'G')}>G</span>
                                <span onClick={() => setName(name+'H')}>H</span>
                                <span onClick={() => setName(name+'I')}>I</span>
                                <span onClick={() => setName(name+'J')}>J</span>
                                <span onClick={() => setName(name+'K')}>K</span>
                                <span onClick={() => setName(name+'L')}>L</span>
                            </div>
                            <div className='nameLine1'>
                                <span onClick={() => setName(name+'M')}>M</span>
                                <span onClick={() => setName(name+'N')}>N</span>
                                <span onClick={() => setName(name+'O')}>O</span>
                                <span onClick={() => setName(name+'P')}>P</span>
                                <span onClick={() => setName(name+'Q')}>Q</span>
                                <span onClick={() => setName(name+'R')}>R</span>
                            </div>
                            <div className='nameLine1'>
                                <span onClick={() => setName(name+'S')}>S</span>
                                <span onClick={() => setName(name+'T')}>T</span>
                                <span onClick={() => setName(name+'U')}>U</span>
                                <span onClick={() => setName(name+'V')}>V</span>
                                <span onClick={() => setName(name+'W')}>W</span>
                                <span onClick={() => setName(name+'X')}>X</span>
                            </div>
                            <div className='nameLine1'>
                                <span onClick={() => setName(name+'Y')}>Y</span>
                                <span onClick={() => setName(name+'Z')}>Z</span>
                                <span onClick={() => setName(name.substring(0, name.length - 1))}>DEL</span>
                                {name?.length === 3 ? <span onClick={() => {setChange(true); audio.play();}}>ENT</span>
                                : <span>ENT</span>}
                                
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Contact;