import { createDiv } from "./helpers/create-DOM-elements";
import hitNoShip from "./assets/hit-no-ship.svg";
import hitShip from "./assets/hit-ship.svg";

export default (gameboard, boardDiv) => {
  // Remove all children from the board to reset it
  while (boardDiv.firstChild) boardDiv.removeChild(boardDiv.firstChild);
  // For every square in the gameboard create a div
  gameboard.board.forEach((row) => {
    const rowDiv = createDiv("", ["board-row"]);
    row.forEach((square) => {
      const squareDiv = createDiv("", ["board-square"]);
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
