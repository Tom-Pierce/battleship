import { createDiv, createHeader } from "./helpers/create-DOM-elements";
import hitNoShip from "./assets/hit-no-ship.svg";
import hitShip from "./assets/hit-ship.svg";

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

export const loadGameboard = (player, boardDiv) => {
  // For every square in the gameboard create a div
  player.gameboard.board.forEach((row, i) => {
    const rowDiv = createDiv("", ["board-row"]);
    row.forEach((square, j) => {
      const squareDiv = createDiv("", ["board-square"]);
      // If the "player" is the computer, add event listeners so we can shoot it
      if (!player.isHuman) {
        squareDiv.addEventListener("click", () => {
          player.opponent.takeShot(i, j, player);
        });
      }
      // Depending on whether the square has a ship or is hit, append a different img
      if (square.isShot && square.isShip) {
        const hitShipImg = new Image();
        hitShipImg.src = hitShip;
        squareDiv.appendChild(hitShipImg);
      } else if (square.isShot && !square.isShip) {
        const hitNoShipImg = new Image();
        hitNoShipImg.src = hitNoShip;
        squareDiv.appendChild(hitNoShipImg);
      }
      rowDiv.appendChild(squareDiv);
    });
    boardDiv.appendChild(rowDiv);
  });
};
