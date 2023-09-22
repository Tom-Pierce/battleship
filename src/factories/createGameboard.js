import createShip from "./createShip";
import createSquare from "./createSquare";

export default () => {
  const board = [];
  const ships = [];
  let gameOver = false;
  // Create a 2D array of squares
  for (let i = 0; i < 10; i += 1) {
    const boardRow = [];
    for (let j = 0; j < 10; j += 1) {
      const square = createSquare();
      boardRow.push(square);
    }
    board.push(boardRow);
  }

  // Create a ship with the given parameters and place it on the board
  const placeShip = (x, y, shipLength, isVertical) => {
    const ship = createShip(x, y, shipLength, isVertical);
    ships.push(ship);
    // Every part of the ship needs to be placed on the board
    ship.positions.forEach((position) => {
      board[position[1]][position[0]].placeShip();
    });
  };

  const arraysAreEqual = (arr1, arr2) => {
    // Loop through each element in the arrays and compare them, if any aren't equal, return false
    for (let i = 0; i < arr1.length; i += 1) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  };

  const checkGameOver = () => {
    // If every ship is sunk, set gameOver to true
    if (ships.every((ship) => ship.isSunk())) gameOver = true;
  };

  // Checks if the position has a ship, if it does find the ship and hit it
  const receiveAttack = (x, y) => {
    if (board[y][x].isShip) {
      ships.forEach((ship) => {
        ship.positions.forEach((position) => {
          if (arraysAreEqual(position, [x, y])) {
            ship.hit();
            board[y][x].shoot();
          }
        });
      });
    } else {
      // If there is no ship, hit the water to mark the square as shot
      board[y][x].shoot();
    }
    checkGameOver();
  };
  return {
    placeShip,
    receiveAttack,
    board,
    ships,
    get gameOver() {
      return gameOver;
    },
  };
};
