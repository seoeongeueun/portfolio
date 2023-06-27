import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Projects2 from '../pages/Projects2.js';
import { setScore, setLife } from '../modules/score.js';

function ProjectsContainer2(){
    const { score, life } = useSelector(state => ({
        score: state.score.score,
        life: state.score.life
    }));

    const dispatch = useDispatch();
    const onSetScore = score => dispatch(setScore(score));
    const onSetLife = (life) => {
        dispatch(setLife(life));
    }
    
    return (
        <Projects2 life={life} score={score} onSetScore={onSetScore} onSetLife={onSetLife}/>
    );
}

export default ProjectsContainer2;
