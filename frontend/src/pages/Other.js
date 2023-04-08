import { useEffect, useState, useRef } from 'react';
import Twinkling from '../icons/twinkling.png';
import Stars from '../icons/stars.png';

function Other() {

    return(
        <main style={{backgroundImage: `url(${Stars})`}}>
            <div className='twinkling' style={{background: `transparent url(${Twinkling}) repeat top center`}}></div>
            <div className='otherPage'>
                <div className='otherPageIntro'>
                    <p>Other</p>
                </div>
                <div className='gameboy'>
                    <div className='gameboyScreen'>

                    </div>
                    <div className='gameboyButtons'>
                        <div className='buttonMoveContainer'>
                            <div className='buttonMove'/>
                            <div className='buttonMoveBox'/>
                            <div className='buttonMoveCircle'/>
                        </div>
                        <div className='miniButtons'>
                            <div className='buttonA'/>
                            <div className='buttonB'/>
                        </div>
                    </div>
                    
                </div>
            </div>
        </main>
    )
}
export default Other;