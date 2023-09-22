import hitNoShip from "./assets/hit-no-ship.svg";
import hitShip from "./assets/hit-ship.svg";
import { createImg } from "./helpers/create-DOM-elements";

export default (player, boardDiv) => {
  boardDiv.childNodes.forEach((rowDiv, i) => {
    rowDiv.childNodes.forEach((squareDiv, j) => {
      // If there is already an image, there is no need to update it
      if (squareDiv.firstChild) return;
      // Depending on whether the square has a ship or is hit, append a different img
      const square = player.gameboard.board[j][i];
      if (square.isShot && square.isShip) {
        squareDiv.appendChild(createImg("", ["hit-ship"], hitShip));
      } else if (square.isShot && !square.isShip) {
        squareDiv.appendChild(createImg("", ["hit-no-ship"], hitNoShip));
      }
    });
  });
};
