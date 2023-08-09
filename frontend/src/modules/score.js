const CHANGE_SCORE = "score/CHANGE_SCORE";
const CHANGE_LIFE = "score/CHANGE_LIFE";

const initialState = {
  score: 0,
  life: 3,
};

export const setScore = (score) => ({
  type: CHANGE_SCORE,
  score,
});

export const setLife = (life) => ({
  type: CHANGE_LIFE,
  life,
});

export default function score(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SCORE:
      return {
        ...state,
        score: action.score,
      };
    case CHANGE_LIFE:
      return {
        ...state,
        life: action.life,
      };
    default:
      return state;
  }
}
