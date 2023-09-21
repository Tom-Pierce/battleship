import createGameboard from "../createGameboard";

const gameboard = createGameboard();

test("Placing a ship", () => {
  gameboard.placeShip(6, 7, 3, false);
  expect(gameboard.board[7][6].isShip).toBe(true);
});

test("Shoot water", () => {
  gameboard.receiveAttack(5, 7);
  expect(gameboard.board[7][5].isShot).toBe(true);
});

test("Sink a ship", () => {
  gameboard.receiveAttack(6, 7);
  gameboard.receiveAttack(7, 7);
  gameboard.receiveAttack(8, 7);
  expect(gameboard.ships[0].isSunk()).toBe(true);
});

test("Game over check", () => {
  expect(gameboard.gameOver).toBe(true);
});
