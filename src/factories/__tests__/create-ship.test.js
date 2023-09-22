import createShip from "../create-ship";

const submarine = createShip(6, 6, 3, false);
test("Sunk", () => {
  submarine.hit();
  submarine.hit();
  submarine.hit();
  expect(submarine.isSunk()).toBe(true);
});

test("Ship positions", () => {
  expect(submarine.positions).toStrictEqual([
    [6, 6],
    [7, 6],
    [8, 6],
  ]);
});
