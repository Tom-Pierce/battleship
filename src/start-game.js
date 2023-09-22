import { loadHTML, loadGameboard } from "./load-html";
import createPlayer from "./factories/create-player";

export default () => {
  // Initiate HTMl and create players with ship layout
  loadHTML();
  const player = createPlayer(true);
  const computer = createPlayer(false);
  player.opponent = computer;
  computer.opponent = player;

  player.gameboard.placeShip(4, 6, 2, true);
  computer.gameboard.placeShip(4, 6, 2, true);

  player.gameboard.placeShip(0, 0, 3, false);
  computer.gameboard.placeShip(0, 0, 3, false);

  player.gameboard.placeShip(6, 1, 5, true);
  computer.gameboard.placeShip(6, 1, 5, true);

  player.gameboard.placeShip(6, 8, 4, false);
  computer.gameboard.placeShip(6, 8, 4, false);

  loadGameboard(player, document.getElementById("player-board"));
  loadGameboard(computer, document.getElementById("computer-board"));
};
