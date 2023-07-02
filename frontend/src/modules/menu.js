const SELECT_MENU = 'menu/SELECT_MENU';
const PAGE_MOVE = 'menu/PAGE_MOVE';

const initialState = {
    menu: null,
    move: false
};

export const setMenu = (menu) => ({
    type: SELECT_MENU,
    menu
})

export const setMove = (move) => ({
    type: PAGE_MOVE,
    move
})

export default function menus(state = initialState, action) {
    switch (action.type) {
        case SELECT_MENU:
            return {
                ...state,
                menu: action.menu
            };
        case PAGE_MOVE:
            return {
                ...state,
                move: action.move
            };
        default:
            return state;
    }
}