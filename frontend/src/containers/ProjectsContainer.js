import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Projects from '../pages/Projects.js';
import { setScore, setLife } from '../modules/score.js';

function ProjectsContainer(){
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
        <Projects life={life} score={score} onSetScore={onSetScore} onSetLife={onSetLife}/>
    );
}

export default ProjectsContainer;
