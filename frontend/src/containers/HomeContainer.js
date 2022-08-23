import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Home from '../pages/Home.js';
import { setMenu } from '../modules/menu.js';

function HomeContainer(){
    const { menu, clicked } = useSelector(state => ({
        menu: state.menus.menu,
        clicked: state.input.clicked
    }));

    const dispatch = useDispatch();
    const onSetMenu = menu => dispatch(setMenu(menu));
    
    return (
        <Home menu={menu} onSetMenu={onSetMenu} clicked={clicked}/>
    );
}

export default HomeContainer;
