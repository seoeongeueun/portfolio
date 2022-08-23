import {useEffect, useState} from 'react';
//import { Link, useHistory } from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';
import KeyboardReturnOutlinedIcon from '@mui/icons-material/KeyboardReturnOutlined';

function Keyboard(){
    const [clicked, setClicked] = useState();
    const [typed, setTyped] = useState('');
    const [shift, setShift] = useState(false);
    const [caps, setCaps] = useState(false);


    useEffect(()=> {

    }, [clicked, typed, shift, caps])


    const handleClick = (e) => {
        setClicked(e);
        if (e === 'shift'){
            setShift(!shift)
        }
        else {
            if (e === 'backspace'){
                setTyped(typed.slice(0, -1))
            }
            if (e === 'tab'){
                setTyped(typed.concat(' '));
            }
            if (e === 'caps'){
                setCaps(!caps)
            }
            if (e === 'space'){
                setTyped(typed.concat(' '));
            }
            if (e === 'enter'){
                setTyped('');
            }
            if (!["home","space", "fn", 'shift', 'backspace', 'tab', 'caps', 'enter', 'fav', 'project', 'contact', 'design', 'bio'].includes(e)){
                console.log('ya')
                setTyped(typed.concat(e))
                
            }
            setShift(false);
        }
        setTimeout(() => {
            setClicked(null);
        }, 200);
    }

    return (
        <div className='keyboard'>
        <div className='keyboard-container'>
            <div className='topRow'>
                <div className='key-home' onClick={(e) => handleClick('home')} style={clicked === 'home' ? {transform: `translateY(5px)`} : null}>
                    <a href="/"><HomeOutlinedIcon sx={{verticalAlign: 'middle'}} /></a> 
                </div>
                <div className='numbers'>
                    <div className='key-number' onClick={ shift ? (e) => handleClick('~') : (e) => handleClick('`')} style={clicked === '~' || clicked === '`' ? {transform: `translateY(5px)`, filter: 'drop-shadow(0px 3px 0.5px rgb(245, 220, 203))'} : null }>
                        <span>{'~'}</span>
                        <span>{'`'}</span>
                    </div>
                    <div className='key-number' onClick={ shift ? (e) => handleClick('!') : (e) => handleClick('1')} style={clicked === '!' || clicked === '1' ? {transform: `translateY(5px)`, filter: 'drop-shadow(0px 3px 0.5px rgb(245, 220, 203))'} : null }>
                        <span>!</span>
                        <span>1</span>
                    </div>
                    <div className='key-number' onClick={ shift ? (e) => handleClick('@') : (e) => handleClick('2')} style={clicked === '@' || clicked === '2' ? {transform: `translateY(5px)`, filter: 'drop-shadow(0px 3px 0.5px rgb(245, 220, 203))'} : null }>
                        <span>@</span>
                        <span>2</span>
                    </div>
                    <div className='key-number' onClick={ shift ? (e) => handleClick('#') : (e) => handleClick('3')} style={clicked === '#' || clicked === '3' ? {transform: `translateY(5px)`, filter: 'drop-shadow(0px 3px 0.5px rgb(245, 220, 203))'} : null }>
                        <span>#</span>
                        <span>3</span>
                    </div>
                    <div className='key-number' onClick={ shift ? (e) => handleClick('$') : (e) => handleClick('4')} style={clicked === '$' || clicked === '4' ? {transform: `translateY(5px)`, filter: 'drop-shadow(0px 3px 0.5px rgb(245, 220, 203))'} : null }>
                        <span>$</span>
                        <span>4</span>
                    </div>
                    <div className='key-number' onClick={ shift ? (e) => handleClick('%') : (e) => handleClick('5')} style={clicked === '%' || clicked === '5' ? {transform: `translateY(5px)`, filter: 'drop-shadow(0px 3px 0.5px rgb(245, 220, 203))'} : null }>
                        <span>%</span>
                        <span>5</span>
                    </div>
                    <div className='key-number' onClick={ shift ? (e) => handleClick('^') : (e) => handleClick('6')} style={clicked === '^' || clicked === '6' ? {transform: `translateY(5px)`, filter: 'drop-shadow(0px 3px 0.5px rgb(245, 220, 203))'} : null }>
                        <span></span>
                        <span>^</span>
                        <span>6</span>
                    </div>
                    <div className='key-number' onClick={ shift ? (e) => handleClick('&') : (e) => handleClick('7')} style={clicked === '&' || clicked === '7' ? {transform: `translateY(5px)`, filter: 'drop-shadow(0px 3px 0.5px rgb(245, 220, 203))'} : null }>
                        <span>{'&'}</span>
                        <span>7</span>
                    </div>
                    <div className='key-number' onClick={ shift ? (e) => handleClick('*') : (e) => handleClick('8')} style={clicked === '*' || clicked === '8' ? {transform: `translateY(5px)`, filter: 'drop-shadow(0px 3px 0.5px rgb(245, 220, 203))'} : null }>
                        <span>{'*'}</span>
                        <span>8</span>
                    </div>
                    <div className='key-number' onClick={ shift ? (e) => handleClick('(') : (e) => handleClick('9')} style={clicked === '(' || clicked === '9' ? {transform: `translateY(5px)`, filter: 'drop-shadow(0px 3px 0.5px rgb(245, 220, 203))'} : null }>
                        <span>{'('}</span>
                        <span>9</span>
                    </div>
                    <div className='key-number' onClick={ shift ? (e) => handleClick(')') : (e) => handleClick('0')} style={clicked === ')' || clicked === '0' ? {transform: `translateY(5px)`, filter: 'drop-shadow(0px 3px 0.5px rgb(245, 220, 203))'} : null }>
                        <span>{')'}</span>
                        <span>0</span>
                    </div>
                    <div className='key-number' onClick={ shift ? (e) => handleClick('_') : (e) => handleClick('-')} style={clicked === '_' || clicked === '-' ? {transform: `translateY(5px)`, filter: 'drop-shadow(0px 3px 0.5px rgb(245, 220, 203))'} : null }>
                        <span>{'_'}</span>
                        <span>-</span>
                    </div>
                    <div className='key-number' onClick={ shift ? (e) => handleClick('+') : (e) => handleClick('=')} style={clicked === '+' || clicked === '=' ? {transform: `translateY(5px)`, filter: 'drop-shadow(0px 3px 0.5px rgb(245, 220, 203))'} : null }>
                        <span>{'+'}</span>
                        <span>=</span>
                    </div>
                </div>
                <div className='key-backspace' onClick={(e) => handleClick('backspace')} style={clicked === 'backspace' ? {transform: `translateY(5px)`, filter: 'drop-shadow(0px 3px 0.5px rgb(211, 112, 112, 1))'} : null }>
                    <span><BackspaceOutlinedIcon sx={{verticalAlign: 'middle'}} /></span>
                </div>
            </div>

            <div className="row">
                <div className="key-tab" onClick={(e) => handleClick('tab')} style={clicked === 'tab' ? {transform: `translateY(5px)`} : null}>
                    <span>tab</span>
                </div>
                <div className="key-regular" onClick={caps || shift ? (e) => handleClick('Q') : (e) => handleClick('q')} style={clicked === 'Q' || clicked === 'q' ? {transform: `translateY(5px)`} : null }>
                    <span>Q</span>
                </div>
                <div className="key-regular" onClick={caps || shift ? (e) => handleClick('W') : (e) => handleClick('w')} style={clicked === 'W' || clicked === 'w' ? {transform: `translateY(5px)`} : null}>
                    <span>W</span>
                </div>
                <div className="key-regular" onClick={caps || shift ? (e) => handleClick('E') : (e) => handleClick('e')} style={clicked === 'E' || clicked === 'e' ? {transform: `translateY(5px)`} : null}>
                    <span>E</span>
                </div>
                <div className="key-regular" onClick={caps || shift ? (e) => handleClick('R') : (e) => handleClick('r')} style={clicked === 'R' || clicked === 'r' ? {transform: `translateY(5px)`} : null}>
                    <span>R</span>
                </div>
                <div className="key-regular" onClick={caps || shift ? (e) => handleClick('T') : (e) => handleClick('t')} style={clicked === 'T' || clicked === 't' ? {transform: `translateY(5px)`} : null}>
                    <span>T</span>
                </div>
                <div className="key-regular" onClick={caps || shift ? (e) => handleClick('Y') : (e) => handleClick('y')} style={clicked === 'Y' || clicked === 'y' ? {transform: `translateY(5px)`} : null}>
                    <span>Y</span>
                </div>
                <div className="key-regular" onClick={caps || shift ? (e) => handleClick('U') : (e) => handleClick('u')} style={clicked === 'U' || clicked === 'u' ? {transform: `translateY(5px)`} : null}>
                    <span>U</span>
                </div>
                <div className="key-regular" onClick={caps || shift ? (e) => handleClick('I') : (e) => handleClick('i')} style={clicked === 'I' || clicked === 'i' ? {transform: `translateY(5px)`} : null}>
                    <span>I</span>
                </div>
                <div className="key-regular" onClick={caps || shift ? (e) => handleClick('O') : (e) => handleClick('o')} style={clicked === 'O' || clicked === 'o' ? {transform: `translateY(5px)`} : null}>
                    <span>O</span>
                </div>
                <div className="key-regular" onClick={caps || shift ? (e) => handleClick('P') : (e) => handleClick('p')} style={clicked === 'P' || clicked === 'p' ? {transform: `translateY(5px)`} : null}>
                    <span>P</span>
                </div>
                <div className="key-regular" onClick={caps || shift ? (e) => handleClick('{') : (e) => handleClick('[')} style={clicked === '{' || clicked === '[' ? {transform: `translateY(5px)`} : null}>
                    <span>{'{'}</span>
                </div>
                <div className="key-regular" onClick={caps || shift ? (e) => handleClick('}') : (e) => handleClick(']')} style={clicked === '}' || clicked === ']' ? {transform: `translateY(5px)`} : null}>
                    <span>{'}'}</span>
                </div>
                <div className="key-tab2" onClick={caps || shift ? (e) => handleClick(`|`) : (e) => handleClick("₩")} style={clicked === `|` || clicked === "₩" ? {transform: `translateY(5px)`} : null}>
                    <span>{`|`}</span>
                    <span>{"₩"}</span>
                </div>

            </div>

            <div className="row">
                <div className="key-caps" onClick={(e) => handleClick('caps')} style={caps ? {transform: `translateY(5px)`} : null}>
                    <span>CapsLock</span>
                </div>
                <div className="key-regular" onClick={caps || shift ? (e) => handleClick('A') : (e) => handleClick('a')} style={clicked === 'A' || clicked === 'a' ? {transform: `translateY(5px)`} : null}>
                    <span>A</span>
                </div>
                <div className="key-regular" onClick={caps || shift ? (e) => handleClick('S') : (e) => handleClick('s')} style={clicked === 'S' || clicked === 's' ? {transform: `translateY(5px)`} : null}>
                    <span>S</span>
                </div>
                <div className="key-regular" onClick={caps || shift ? (e) => handleClick('D') : (e) => handleClick('d')} style={clicked === 'D' || clicked === 'd' ? {transform: `translateY(5px)`} : null}>
                    <span>D</span>
                </div>
                <div className="key-regular" onClick={caps || shift ? (e) => handleClick('F') : (e) => handleClick('f')} style={clicked === 'F' || clicked === 'f' ? {transform: `translateY(5px)`} : null}>
                    <span>F</span>
                </div>
                <div className="key-regular" onClick={caps || shift ? (e) => handleClick('G') : (e) => handleClick('g')} style={clicked === 'G' || clicked === 'g' ? {transform: `translateY(5px)`} : null}>
                    <span>G</span>
                </div>
                <div className="key-regular" onClick={caps || shift ? (e) => handleClick('H') : (e) => handleClick('h')} style={clicked === 'H' || clicked === 'h' ? {transform: `translateY(5px)`} : null}>
                    <span>H</span>
                </div>
                <div className="key-regular" onClick={caps || shift ? (e) => handleClick('J') : (e) => handleClick('j')} style={clicked === 'J' || clicked === 'j' ? {transform: `translateY(5px)`} : null}>
                    <span>J</span>
                </div>
                <div className="key-regular" onClick={caps || shift ? (e) => handleClick('K') : (e) => handleClick('k')} style={clicked === 'K' || clicked === 'k' ? {transform: `translateY(5px)`} : null}>
                    <span>K</span>
                </div>
                <div className="key-regular" onClick={caps || shift ? (e) => handleClick('L') : (e) => handleClick('l')} style={clicked === 'L' || clicked === 'l' ? {transform: `translateY(5px)`} : null}>
                    <span>L</span>
                </div>
                <div className="key-regular" onClick={caps || shift ? (e) => handleClick(':') : (e) => handleClick(';')} style={clicked === ':' || clicked === ';' ? {transform: `translateY(5px)`} : null}>
                    <span>{':'}</span>
                </div>
                <div className="key-regular" onClick={caps || shift ? (e) => handleClick(`"`) : (e) => handleClick(`'`)} style={clicked === `"` || clicked === `'` ? {transform: `translateY(5px)`} : null}>
                    <span>{`"`}</span>
                    <span>{`'`}</span>
                </div>
                <div className="key-enter" onClick={(e) => handleClick('enter')} style={clicked === 'enter' ? {transform: `translateY(5px)`} : null}>
                    <span>enter</span>
                    <span><KeyboardReturnOutlinedIcon sx={{verticalAlign: 'middle'}}/></span>
                </div>
            </div>

            <div className="row">
                <div className="key-shift" onClick={(e) => handleClick('shift')} style={shift ? {transform: `translateY(5px)`} : null}>
                    <span>Shift</span>
                </div>
                <div className="key-regular" onClick={caps || shift ? (e) => handleClick("Z") : (e) => handleClick('z')} style={clicked === "Z" || clicked === "z" ? {transform: `translateY(5px)`} : null}>
                    <span>Z</span>
                </div>
                <div className="key-regular" onClick={caps || shift ? (e) => handleClick("X") : (e) => handleClick('x')} style={clicked === "X" || clicked === "x" ? {transform: `translateY(5px)`} : null}>
                    <span>X</span>
                </div>
                <div className="key-regular" onClick={caps || shift ? (e) => handleClick("C") : (e) => handleClick('c')} style={clicked === "C" || clicked === "c" ? {transform: `translateY(5px)`} : null}>
                    <span>C</span>
                </div>
                <div className="key-regular" onClick={caps || shift ? (e) => handleClick("V") : (e) => handleClick('v')} style={clicked === "V" || clicked === "v" ? {transform: `translateY(5px)`} : null}>
                    <span>V</span>
                </div>
                <div className="key-regular" onClick={caps || shift ? (e) => handleClick("B") : (e) => handleClick('b')} style={clicked === "B" || clicked === "b" ? {transform: `translateY(5px)`} : null}>
                    <span>B</span>
                </div>
                <div className="key-regular" onClick={caps || shift ? (e) => handleClick("N") : (e) => handleClick('n')} style={clicked === "N" || clicked === "n" ? {transform: `translateY(5px)`} : null}>
                    <span>N</span>
                </div>
                <div className="key-regular" onClick={caps || shift ? (e) => handleClick("M") : (e) => handleClick('m')} style={clicked === "M" || clicked === "m" ? {transform: `translateY(5px)`} : null}>
                    <span>M</span>
                </div>
                <div className="key-regular" onClick={caps || shift ? (e) => handleClick("<") : (e) => handleClick(',')} style={clicked === "<" || clicked === "," ? {transform: `translateY(5px)`} : null}>
                    <span>{'<'}</span>
                    <span>{','}</span>
                </div>
                <div className="key-regular" onClick={caps || shift ? (e) => handleClick(">") : (e) => handleClick('.')} style={clicked === ">" || clicked === "." ? {transform: `translateY(5px)`} : null}>
                    <span>{'>'}</span>
                    <span>{'.'}</span>
                </div>
                <div className="key-regular" onClick={caps || shift ? (e) => handleClick("?") : (e) => handleClick('/')} style={clicked === "?" || clicked === "/" ? {transform: `translateY(5px)`} : null}>
                    <span>{'?'}</span>
                    <span>{'/'}</span>
                </div>
                <div className="key-regular">
                    <span>{'Help'}</span>
                </div>
                <div className="key-arrow">
                    <span><ArrowUpwardOutlinedIcon sx={{verticalAlign: 'middle'}} /></span>
                </div>
                <div className="key-last">
                    <span></span>
                </div>
            </div>
            <div className="lastrow">
                <div className="key-ctrl">
                    <span>Ctrl</span>
                </div>
                <div className="key-color" onClick={(e) => handleClick('bio')} style={clicked === 'bio' ? {transform: `translateY(5px)`, filter: "drop-shadow(0px 3px 0.5px rgb(124, 143, 119))"} : null}>
                    <span><SentimentSatisfiedAltOutlinedIcon sx={{verticalAlign: 'middle'}} /></span>
                </div>
                <div className="key-color" onClick={(e) => handleClick('project')} style={clicked === 'project' ? {transform: `translateY(5px)`, filter: "drop-shadow(0px 3px 0.5px rgb(124, 143, 119))"} : null}>
                    <span><DesktopWindowsOutlinedIcon sx={{verticalAlign: 'middle'}} /></span>
                </div>
                <div className="key-color" onClick={(e) => handleClick('design')} style={clicked === 'design' ? {transform: `translateY(5px)`, filter: "drop-shadow(0px 3px 0.5px rgb(124, 143, 119))"} : null}>
                    <span><InsertPhotoOutlinedIcon sx={{verticalAlign: 'middle'}} /></span>
                </div>
                <div className="key-space" onClick={(e) => handleClick('space')} style={clicked === 'space' ? {transform: `translateY(5px)`, filter: "drop-shadow(0px 3px 0.5px rgb(248, 219, 211))"} : null}>
                    <span></span>
                </div>
                <div className="key-color" onClick={(e) => handleClick('fav')} style={clicked === 'fav' ? {transform: `translateY(5px)`, filter: "drop-shadow(0px 3px 0.5px rgb(124, 143, 119))"} : null}>
                    <span><FavoriteBorderOutlinedIcon sx={{verticalAlign: 'middle'}} /></span>
                </div>
                <div className="key-color" onClick={(e) => handleClick('contact')} style={clicked === 'contact' ? {transform: `translateY(5px)`, filter: "drop-shadow(0px 3px 0.5px rgb(124, 143, 119))"} : null}>
                    <span><ContactSupportOutlinedIcon sx={{verticalAlign: 'middle'}} /></span>
                </div>
                <div className="key-arrow">
                    <span><ArrowBackOutlinedIcon sx={{verticalAlign: 'middle'}} /></span>
                </div>
                <div className="key-arrow">
                    <span><ArrowDownwardOutlinedIcon sx={{verticalAlign: 'middle'}} /></span>
                </div>
                <div className="key-arrowlast">
                    <span><ArrowForwardOutlinedIcon sx={{verticalAlign: 'middle'}} /></span>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Keyboard;