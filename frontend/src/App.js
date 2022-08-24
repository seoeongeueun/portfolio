import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import HomeContainer from './containers/HomeContainer';
import About from './pages/About';

function App() {

  const { menu, move } = useSelector(state => ({
    menu: state.menus.menu,
    move: state.menus.move
  }));

  return (
      <div>
        {(move && menu === 'about') ? <About/> : <HomeContainer/>}
      </div>
  );
}

export default App;
