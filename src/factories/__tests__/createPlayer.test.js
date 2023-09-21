import createPlayer from "../createPlayer";

const player = createPlayer("Jeremy");
const opponent = createPlayer("Jeffrey");

test("Create player", () => {
  expect(player.name).toBe("Jeremy");
});

test("Player attack", () => {
  opponent.gameboard.placeShip(0, 0, 1, true);
  expect(opponent.gameboard.gameOver).toBe(false);
  player.takeShot(0, 0, opponent);
  expect(opponent.gameboard.gameOver).toBe(true);
});
