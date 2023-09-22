import { computerGuess } from "./computer-ai/computer-guess";
import updateBoard from "./update-board";

const computerTurn = (computer) => {
  const guess = computerGuess(computer.opponent);
  computer.takeShot(guess[0], guess[1]);
};
export default (x, y, player) => {
  if (player.opponent.gameboard.board[y][x].isShot) return;
  player.takeShot(x, y);
  computerTurn(player.opponent);
  updateBoard(player, document.getElementById("player-board"));
  updateBoard(player.opponent, document.getElementById("computer-board"));
};
