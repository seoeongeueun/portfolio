import { useEffect, useState } from 'react';
import Twinkling from '../icons/twinkling.png';
import Stars from '../icons/stars.png';
import GithubIcon from '../icons/github.png';
import LinkedInIcon from '../icons/linkedin.png'; 
import { useSelector } from 'react-redux';
import AlienCyan from '../icons/alien-cyan.png';
import audioControls from '../modules/audioControls.js';

function Contact(props) {
    const [name, setName] = useState('');
    const [change, setChange] = useState(false);
    const [reload, setReload] = useState(false);
    const { score, life } = useSelector(state => ({
        score: state.score.score,
        life: state.score.life
    }));
    const [click, setClick] = useState(false);

    useEffect(() => {
        if (props.current === 5) {
            setChange(false);
            setName('');
            setReload(true);
        } else {
            setReload(false)
        }
    }, [props.current]);

    useEffect(() => {
        if (name.length > 3 ) {
            setName(name.substring(0,3));
        }
    }, [name]);

    useEffect(() => {
        if (click) {
            setTimeout(() => {
                audioControls.play('drop');
            }, 1800);
            setTimeout(() => {
                window.location.reload(false);
                audioControls.pause('drop');
            }, 3500);
        }
    }, [click])

    return(
        <main style={{backgroundImage: `url(${Stars})`}} key={props.current === 5 ? reload ? 2 : 1 : 2}>
            <div className='twinkling' style={{background: `transparent url(${Twinkling}) repeat top center`}}></div>
            <div className='contactPage'>
                <div className='contactPageIntro'>
                    <span className="contactTitle">CONTACT</span>
                    <span className='contactDesc'>CONNECT WITH ME!</span>
                    <div className='scoreboard'>
                        <div className='bestPlayer'>
                            {change ? <span style={{marginBottom: '1rem'}}>NEW SCORE</span> : <span style={{marginBottom: '1rem'}}>MY INFO</span>}
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
                                        {change ? <span>{[...Array(life).keys()].map((item, index) => (
                                            <img key={index} src={AlienCyan} alt='alienCyan' className='alienCyan'/>
                                        ))}</span>
                                            : <span><a href="https://github.com/seoeongeueun" target="_blank" rel="noreferrer"><img src={GithubIcon} alt='github' style={{cursor: 'pointer', marginTop: '5px'}}/></a>
                                            <a href="https://www.linkedin.com/in/seongeun-park-43b73a195/" target="_blank" rel="noreferrer"><img src={LinkedInIcon} alt='linkedin' style={{cursor: 'pointer', marginTop: '5px'}}/></a></span>}
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className='players'>
                            <div className='playerSpec'>
                                <div className='boardTitle'>
                                    <span style={{marginBottom: '1rem'}}>NAME</span>
                                    <div className='boardContent'>
                                        {change && <span>SEONGEUN PARK</span>}
                                        <span>JKP</span>
                                        <div className='currentName'>
                                            <span style={name[0] && {color: !change && 'cyan', marginRight: '0'}}>{name[0] ? name[0] : '_'}</span>
                                            <span style={name[1] && {color: !change && 'cyan', marginRight: '0'}}>{name[1] ? name[1] : '_'}</span>
                                            <span style={name[2] && {color: !change && 'cyan', marginRight: '0'}}>{name[2] ? name[2] : '_'}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='boardTitle'>
                                    <span style={{marginBottom: '1rem'}}>SCORE</span>
                                    <div className='boardContent'>
                                        {change && <span>SEONGEUN9901@GMAIL.COM</span>}
                                        <span>300</span>
                                        <span style={{color: !change && 'cyan'}}>{score}</span>
                                    </div>
                                </div>
                                <div className='boardTitle'>
                                    <span style={{marginBottom: '1rem'}}>LIVES</span>
                                    <div className='boardContent'>
                                        {change && <span><a href="https://github.com/seoeongeueun" target="_blank" rel="noreferrer"><img src={GithubIcon} alt='github' style={{cursor: 'pointer', marginTop: '5px'}}/></a>
                                            <a href="https://www.linkedin.com/in/seongeun-park-43b73a195/" target="_blank" rel="noreferrer"><img src={LinkedInIcon} alt='linkedin' style={{cursor: 'pointer', marginTop: '5px'}}/></a></span>}
                                        <span>{[...Array(2).keys()].map((item, index) => (
                                        <img src={AlienCyan} key={index} alt='alienCyan' className='alienCyan'/>
                                        ))}</span>
                                        <span>{[...Array(life).keys()].map((item, index) => (
                                        <img src={AlienCyan} key={index} alt='alienCyan' className='alienCyan'/>
                                        ))}</span>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                            {!change && <div className='scoreboardName'>
                                <span>YOUR INITIAL</span>
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
                                    {name?.length === 3 ? <span style={{color: 'cyan'}} onClick={() => {setChange(true); audioControls.play('zap');}}>ENT</span>
                                    : <span style={{color: 'cyan'}}>ENT</span>}

                                </div>
                            </div>}
                            {change && <div className='continue'>
                                {!click && <span>CLICK COIN TO RESTART</span>}
                                {click ? <div className='spinning-coin-fall'/> :<div className='coin' onClick={() => {setClick(true); audioControls.play('coin');}}/>}
                            </div>}
                        
                        
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Contact;