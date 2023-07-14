import Zap from "../music/zap_c_07-82067.mp3";
import Coin from "../music/coin-collect-retro-8-bit-sound-effect-145251.mp3";
import Drop from "../music/dropping-single-coin-on-floor-2-38987.mp3";
import Theme2 from "../music/HoliznaCC0 - ICE temple.mp3";
import Bleep from "../music/arcade-bleep-sound-6071.mp3";
import Loading from '../music/mixkit-arcade-bonus-alert-767.wav';
import Hurt from "../music/hurt_c_08-102842.mp3";

const audios = {
    'zap': new Audio(Zap),
    'coin': new Audio(Coin),
    'drop': new Audio(Drop),
    'theme2': new Audio(Theme2),
    'bleep': new Audio(Bleep),
    'loading': new Audio(Loading),
    'hurt': new Audio(Hurt),
};

let current = null;

const play = (name) => {
    if (current && current !== 'theme2') {
        audios[current].pause();
    }
    if (name === 'drop') audios[name].volume = 0.7;
    else if (name === 'loading') audios[name].volume = 0.3;
    else audios[name].volume = 0.5;
    audios[name].play();
    current = name;
};

const pause = (name) => {
    current = null;
    audios[name].pause();
};

const audioControls = {
  pause,
  play
};

export default audioControls;