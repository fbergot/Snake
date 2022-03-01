import GameOverSound from "../assets/audio/gameOver.mp3";
import EatFood from "../assets/audio/eatFood.mp3";

/**
 * Build new audio HTML
 * @param {string} path
 * @returns {HTMLAudioElement}
 */
function soundBuilder(path) {
   return new Audio(path);
}

export const sounds = {
   gameOver: soundBuilder(GameOverSound),
   eatFood: soundBuilder(EatFood),
};