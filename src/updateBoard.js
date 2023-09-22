import hitNoShip from "./assets/hit-no-ship.svg";
import hitShip from "./assets/hit-ship.svg";

export default (player, boardDiv) => {
  boardDiv.childNodes.forEach((rowDiv, i) => {
    rowDiv.childNodes.forEach((squareDiv, j) => {
      if (squareDiv.firstChild) squareDiv.removeChild(squareDiv.firstChild);
      // Depending on whether the square has a ship or is hit, append a different img
      const square = player.gameboard.board[j][i];
      if (square.isShot && square.isShip) {
        const hitShipImg = new Image();
        hitShipImg.src = hitShip;
        squareDiv.appendChild(hitShipImg);
      } else if (square.isShot && !square.isShip) {
        const hitNoShipImg = new Image();
        hitNoShipImg.src = hitNoShip;
        squareDiv.appendChild(hitNoShipImg);
      }
    });
  });
};
