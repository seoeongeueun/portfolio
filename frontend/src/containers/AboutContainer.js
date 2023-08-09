import React from "react";
import { useSelector, useDispatch } from "react-redux";
import About from "../pages/About.js";
import { setScore } from "../modules/score.js";

function AboutContainer(props) {
  const { score, life } = useSelector((state) => ({
    score: state.score.score,
    life: state.score.life,
  }));

  const dispatch = useDispatch();
  const onSetScore = (score) => dispatch(setScore(score));

  return (
    <About
      life={life}
      score={score}
      onSetScore={onSetScore}
      lang={props.lang}
      setLang={props.setLang}
      current={props.current}
    />
  );
}

export default AboutContainer;
