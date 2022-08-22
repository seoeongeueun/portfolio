import {useEffect, useState} from 'react';
//import { Link, useHistory } from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';

function Keyboard(){
    return (
        <div className='keyboard-container'>
            <div className='topRow'>
                <div className='key-home'>
                    <a href="/"><HomeOutlinedIcon/></a> 
                </div>
                <div className='numbers'>
                    <div className='key-number'>
                        <span>!</span>
                        <span>1</span>
                    </div>
                    <div className='key-number'>
                        <span>@</span>
                        <span>2</span>
                    </div>
                    <div className='key-number'>
                        <span>#</span>
                        <span>3</span>
                    </div>
                    <div className='key-number'>
                        <span>$</span>
                        <span>4</span>
                    </div>
                    <div className='key-number'>
                        <span>%</span>
                        <span>5</span>
                    </div>
                    <div className='key-number'>
                        <span>^</span>
                        <span>6</span>
                    </div>
                    <div className='key-number'>
                        <span>{'&'}</span>
                        <span>7</span>
                    </div>
                    <div className='key-number'>
                        <span>{'*'}</span>
                        <span>8</span>
                    </div>
                    <div className='key-number'>
                        <span>{'('}</span>
                        <span>9</span>
                    </div>
                    <div className='key-number'>
                        <span>{')'}</span>
                        <span>0</span>
                    </div>
                    <div className='key-number'>
                        <span>{'_'}</span>
                        <span>-</span>
                    </div>
                    <div className='key-number'>
                        <span>{'+'}</span>
                        <span>=</span>
                    </div>
                    <div className='key-backspace'>
                        <span>bksp</span>
                        <span>-</span>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="key-tab">
                    <span>tab</span>
                </div>
                <div className="key-regular">
                    <span>Q</span>
                </div>
                <div className="key-regular">
                    <span>W</span>
                </div>
                <div className="key-regular">
                    <span>E</span>
                </div>
                <div className="key-regular">
                    <span>R</span>
                </div>
                <div className="key-regular">
                    <span>T</span>
                </div>
                <div className="key-regular">
                    <span>Y</span>
                </div>
                <div className="key-regular">
                    <span>U</span>
                </div>
                <div className="key-regular">
                    <span>I</span>
                </div>
                <div className="key-regular">
                    <span>O</span>
                </div>
                <div className="key-regular">
                    <span>P</span>
                </div>
                <div className="key-regular">
                    <span>{'{'}</span>
                </div>
                <div className="key-regular">
                    <span>{'}'}</span>
                </div>
                <div className="key-caps">
                    <span>|</span>
                    <span>\</span>
                </div>

            </div>

            <div className="row">
                <div className="key-caps">
                    <span>CapsLock</span>
                </div>
                <div className="key-regular">
                    <span>A</span>
                </div>
                <div className="key-regular">
                    <span>S</span>
                </div>
                <div className="key-regular">
                    <span>D</span>
                </div>
                <div className="key-regular">
                    <span>F</span>
                </div>
                <div className="key-regular">
                    <span>G</span>
                </div>
                <div className="key-regular">
                    <span>H</span>
                </div>
                <div className="key-regular">
                    <span>J</span>
                </div>
                <div className="key-regular">
                    <span>K</span>
                </div>
                <div className="key-regular">
                    <span>L</span>
                </div>
                <div className="key-regular">
                    <span>{':'}</span>
                </div>
                <div className="key-regular">
                    <span>{'"'}</span>
                </div>
                <div className="key-enter">
                    <span>enter</span>
                </div>
            </div>

            <div className="row">
                <div className="key-shift">
                    <span>Shift</span>
                </div>
                <div className="key-regular">
                    <span>Z</span>
                </div>
                <div className="key-regular">
                    <span>X</span>
                </div>
                <div className="key-regular">
                    <span>C</span>
                </div>
                <div className="key-regular">
                    <span>V</span>
                </div>
                <div className="key-regular">
                    <span>B</span>
                </div>
                <div className="key-regular">
                    <span>N</span>
                </div>
                <div className="key-regular">
                    <span>M</span>
                </div>
                <div className="key-regular">
                    <span>{'<'}</span>
                </div>
                <div className="key-regular">
                    <span>{'>'}</span>
                </div>
                <div className="key-regular">
                    <span>{'?'}</span>
                </div>
                <div className="key-regular">
                    <span>{'Help'}</span>
                </div>
                <div className="key-regular">
                    <span>{' '}</span>
                </div>
                <div className="key-regular">
                    <span></span>
                </div>
            </div>
            <div className="row">
                <div className="key-caps">
                    <span>Ctrl</span>
                </div>
                <div className="key-regular">
                    <span>Fn</span>
                </div>
                <div className="key-regular">
                    <span>Win</span>
                </div>
                <div className="key-regular">
                    <span>Alt</span>
                </div>
                <div className="key-space">
                    <span></span>
                </div>
                <div className="key-regular">
                    <span>Alt</span>
                </div>
                <div className="key-regular">
                    <span>Win</span>
                </div>
                <div className="key-regular">
                    <span></span>
                </div>
                <div className="key-regular">
                    <span></span>
                </div>
                <div className="key-regular">
                    <span></span>
                </div>
            </div>

            

        </div>
    )
}
export default Keyboard;