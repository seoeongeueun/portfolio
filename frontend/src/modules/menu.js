const SELECT_MENU = 'menu/SELECT_MENU';

const initialState = {
    menu: 'about'
};

export const setMenu = (menu) => ({
    type: SELECT_MENU,
    menu
})

export default function menus(state = initialState, action) {
    switch (action.type) {
        case SELECT_MENU:
            return {
                ...state,
                menu: action.menu
            };
        default:
            return state;
    }
}