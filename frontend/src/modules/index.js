import { combineReducers } from "redux";
import input from "./input";
import menus from "./menu";
import score from "./score";

const rootReducer = combineReducers({
  input,
  menus,
  score,
});

export default rootReducer;
