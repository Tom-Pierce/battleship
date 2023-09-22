import createPlayer from "../createPlayer";

const player = createPlayer("Jeremy");
const computer = createPlayer("Jeffrey");
player.opponent = computer;
computer.opponent = player;

test("Player attack", () => {
  computer.gameboard.placeShip(0, 0, 1, true);
  expect(computer.gameboard.gameOver).toBe(false);
  player.takeShot(0, 0, computer);
  expect(computer.gameboard.gameOver).toBe(true);
});
