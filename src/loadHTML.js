import { createDiv, createHeader } from "./helpers/create-DOM-elements";

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
      if (player.gameboard.board[j][i].isShip)
        squareDiv.classList.add("ship-square");
    });
  });
};

export const loadGameboard = (player, boardDiv) => {
  // For every square in the gameboard create a div
  player.gameboard.board.forEach((row, i) => {
    const rowDiv = createDiv("", ["board-row"]);
    row.forEach((square, j) => {
      const squareDiv = createDiv("", ["board-square"]);
      if (player.isHuman) {
        // If the "player" is the computer, add event listeners so we can shoot it
        renderShips(player, boardDiv);
        squareDiv.classList.add("human-square");
      } else {
        squareDiv.addEventListener("click", () => {
          squareDiv.classList.add("shot-square");
          player.opponent.takeShot(i, j, player);
        });
        squareDiv.classList.add("computer-square");
      }
      rowDiv.appendChild(squareDiv);
    });
    boardDiv.appendChild(rowDiv);
  });
};
