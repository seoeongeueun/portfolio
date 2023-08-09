const CHANGE_TEXT = "input/CHANGE_TEXT";
const CLICKED_BUTTON = "input/CLICKED_BUTTON";

const initialState = {
  clicked: "",
  text: "",
};

export const setText = (text) => ({
  type: CHANGE_TEXT,
  text,
});

export const setClicked = (clicked) => ({
  type: CLICKED_BUTTON,
  clicked,
});

export default function input(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text,
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
