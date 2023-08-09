import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  clicked: "",
  text: "",
};

const CHANGE_TEXT = "CHANGE_TEXT";
const CLICKED_BUTTON = "CLICKED_BUTTON";

const changeText = (text) => ({
  type: CHANGE_TEXT,
  text,
});

const clickedButton = (clicked) => ({
  type: CLICKED_BUTTON,
  clicked,
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TEXT:
      return {
        ...state,
        text: text.concat(action.text),
      };
    case CLICKED_BUTTON:
      return {
        ...state,
        clicked: action.clicked,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

console.log("store: ", store.getState());

const listener = () => {
  const state = store.getState();
  console.log(state);
};

const unsubscribe = store.subscribe(listener);

export default store;
