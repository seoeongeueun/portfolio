import { combineReducers } from 'redux';
import input from './input';
import menus from './menu';

const rootReducer = combineReducers({
  input,
  menus
});

export default rootReducer;