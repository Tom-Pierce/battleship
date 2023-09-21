import "./styles.css";
import initDOM from "./initDOM";
import renderBoard from "./renderBoard";
import createPlayer from "./factories/createPlayer";

initDOM();
const player = createPlayer("Jeff");
renderBoard(player.gameboard, document.getElementById("player-board"));
const opponent = createPlayer("Jeremy");
renderBoard(opponent.gameboard, document.getElementById("ai-board"));
