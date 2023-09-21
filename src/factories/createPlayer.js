import createGameboard from "./createGameboard";

export default (name) => {
  const gameboard = createGameboard();

  const takeShot = (x, y, opponent) => {
    opponent.gameboard.receiveAttack(x, y);
  };
  return {
    takeShot,
    get name() {
      return name;
    },
    get gameboard() {
      return gameboard;
    },
  };
};
