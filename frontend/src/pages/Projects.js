import { useEffect, useState } from 'react';
import Twinkling from '../icons/twinkling.png';
import Stars from '../icons/stars.png';
import KeyboardContainer from '../containers/KeyboardContainer';

function Projects() {

    return(
        <main style={{backgroundImage: `url(${Stars})`}}>
            <div className='twinkling' style={{background: `transparent url(${Twinkling}) repeat top center`}}></div>
            <div className='projectPage'>
                <div className='projectPageIntro'>
                    <p>Projects</p>
                </div>
                <div className='projectInfo'>
                    <div className='project'>
                        <span>Blue Space</span>
                    </div>
                    <div className='project'>
                        <span>CheeseMe</span>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Projects;