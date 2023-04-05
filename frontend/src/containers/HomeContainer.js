import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Home from '../pages/Home.js';
import { setMenu, setMove } from '../modules/menu.js';
import { setClicked } from '../modules/input.js';

function HomeContainer(){
    const { menu, clicked, move } = useSelector(state => ({
        menu: state.menus.menu,
        clicked: state.input.clicked,
        move: state.menus.move
    }));

    const dispatch = useDispatch();
    const onSetMenu = menu => dispatch(setMenu(menu));
    const onSetMove = move => dispatch(setMove(move));
    const onSetClicked = (clicked) => {
        dispatch(setClicked(clicked));
    }
    
    return (
        <Home menu={menu} onSetMenu={onSetMenu} clicked={clicked} onSetMove={onSetMove} move={move} onSetClicked={onSetClicked}/>
    );
}

export default HomeContainer;
