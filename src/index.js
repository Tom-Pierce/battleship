import "./styles.css";
import { loadHTML, loadGameboard } from "./loadHTML";
import createPlayer from "./factories/createPlayer";
import updateBoard from "./updateBoard";

loadHTML();
const player = createPlayer(true);
const computer = createPlayer(false);
player.opponent = computer;
computer.opponent = player;
loadGameboard(player, document.getElementById("player-board"));
loadGameboard(computer, document.getElementById("computer-board"));
setInterval(() => {
  updateBoard(player, document.getElementById("player-board"));
  updateBoard(computer, document.getElementById("computer-board"));
}, 500);
