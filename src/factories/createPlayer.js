import createGameboard from "./createGameboard";

export default (isHuman) => {
  const gameboard = createGameboard();
  let opponent;

  const takeShot = (x, y) => {
    opponent.gameboard.receiveAttack(x, y);
  };
  return {
    takeShot,
    get isHuman() {
      return isHuman;
    },
    get gameboard() {
      return gameboard;
    },
    get opponent() {
      return opponent;
    },
    set opponent(player) {
      opponent = player;
    },
  };
};
