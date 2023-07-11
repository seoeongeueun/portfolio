import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Home from '../pages/Home.js';
import { setMenu, setMove } from '../modules/menu.js';
import { setClicked, setText } from '../modules/input.js';

function HomeContainer(){
    const { menu, clicked, move, text } = useSelector(state => ({
        menu: state.menus.menu,
        clicked: state.input.clicked,
        move: state.menus.move,
        text: state.input.text
    }));

    const dispatch = useDispatch();
    const onSetText = text => dispatch(setText(text));
    const onSetMenu = menu => dispatch(setMenu(menu));
    const onSetMove = move => dispatch(setMove(move));
    const onSetClicked = (clicked) => {
        dispatch(setClicked(clicked));
    }
    
    return (
        <Home menu={menu} onSetMenu={onSetMenu} clicked={clicked} onSetMove={onSetMove} move={move} onSetClicked={onSetClicked} text={text} onSetText={onSetText}/>
    );
}

export default HomeContainer;
