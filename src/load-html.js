import { createDiv, createHeader } from "./helpers/create-DOM-elements";
import humanTurn from "./player-turn";

export const loadHTML = () => {
  const titleDiv = createDiv("title-div", ["title-div"]);
  titleDiv.appendChild(
    createHeader("title-header", ["title-header"], "h1", "BATTLESHIP"),
  );
  document.body.appendChild(titleDiv);

  const gameWindow = createDiv("game-window", ["game-window"]);
  document.body.appendChild(gameWindow);
  const playerBoard = createDiv("player-board", ["player-board"]);
  const aiBoard = createDiv("computer-board", ["computer-board"]);

  gameWindow.appendChild(playerBoard);
  gameWindow.appendChild(aiBoard);
};

const renderShips = (player, boardDiv) => {
  boardDiv.childNodes.forEach((rowDiv, i) => {
    rowDiv.childNodes.forEach((squareDiv, j) => {
      if (player.gameboard.board[j][i].isShip) {
        squareDiv.classList.add("ship-square");
      }
    });
  });
};
export const loadGameboard = (player, boardDiv) => {
  // For every square in the gameboard create a div
  player.gameboard.board.forEach((row, i) => {
    const rowDiv = createDiv("", ["board-row"]);
    row.forEach((square, j) => {
      const squareDiv = createDiv("", ["board-square"]);
      if (player.isHuman) squareDiv.classList.add("human-square");
      else {
        // If the "player" is the computer, add event listeners so we can shoot it
        squareDiv.addEventListener("click", () => {
          squareDiv.classList.add("shot-square");
          humanTurn(i, j, player.opponent);
        });
        squareDiv.classList.add("computer-square");
      }
      rowDiv.appendChild(squareDiv);
    });
    boardDiv.appendChild(rowDiv);
  });
  if (player.isHuman) renderShips(player, boardDiv);
};
