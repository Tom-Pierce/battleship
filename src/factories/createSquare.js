// The squares are used to fill the board and mark whether a slot has been shot at or contains a ship
export default () => {
  let isShot = false;
  let isShip = false;

  const shoot = () => {
    isShot = true;
  };

  const placeShip = () => {
    isShip = true;
  };

  return {
    get isShot() {
      return isShot;
    },
    get isShip() {
      return isShip;
    },
    shoot,
    placeShip,
  };
};
