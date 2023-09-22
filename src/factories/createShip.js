export default (x, y, shipLength, isHorizontal) => {
  let hits = 0;

  const hit = () => {
    hits += 1;
  };

  const isSunk = () => {
    if (shipLength === hits) return true;
    return false;
  };
  // Returns an array of all the positions that the ship takes depending on length and direction is is placed
  const getShipPosition = () => {
    const positionsArr = [];
    if (isHorizontal) {
      for (let i = 0; i < shipLength; i += 1) {
        const position = [];
        position.push(x, y + i);
        positionsArr.push(position);
      }
    } else {
      for (let i = 0; i < shipLength; i += 1) {
        const position = [];
        position.push(x + i, y);
        positionsArr.push(position);
      }
    }
    return positionsArr;
  };
  const positions = getShipPosition();
  return {
    hit,
    isSunk,
    get positions() {
      return positions;
    },
  };
};
