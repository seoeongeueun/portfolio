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
                    
                </div>
            </div>
        </main>
    )
}
export default Other;