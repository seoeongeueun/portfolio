import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import About from '../pages/About.js';
import { setScore, setLife } from '../modules/score.js';

function AboutContainer(props){
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
        <About life={life} score={score} onSetScore={onSetScore} onSetLife={onSetLife} lang={props.lang} setLang={props.setLang}/>
    );
}

export default AboutContainer;
