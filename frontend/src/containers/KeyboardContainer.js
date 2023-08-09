import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Keyboard from "../components/keyboard.js";
import { setClicked, setText } from "../modules/input.js";

function KeyboardContainer() {
  const { text, clicked } = useSelector((state) => ({
    text: state.input.text,
    clicked: state.input.clicked,
  }));

  const dispatch = useDispatch();
  const onSetText = (text) => dispatch(setText(text));
  const onSetClicked = (clicked) => {
    dispatch(setClicked(clicked));
  };

  return (
    <Keyboard
      clicked={clicked}
      text={text}
      onSetText={onSetText}
      onSetClicked={onSetClicked}
    />
  );
}

export default KeyboardContainer;
