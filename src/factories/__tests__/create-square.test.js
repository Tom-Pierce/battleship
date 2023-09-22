import createSquare from "../createSquare";

const square = createSquare();

test("Shot at", () => {
  square.shoot();
  expect(square.isShot).toBe(true);
});

test("Is Ship", () => {
  square.placeShip();
  expect(square.isShip).toBe(true);
});
