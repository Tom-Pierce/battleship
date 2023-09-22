const getRandomCoords = () => [
  Math.floor(Math.random() * 10),
  Math.floor(Math.random() * 10),
];

// eslint-disable-next-line import/prefer-default-export
export const computerGuess = (player) => {
  const guess = getRandomCoords();
  // If that square has already been shot at, recursively call till one has not been
  if (player.gameboard.board[guess[1]][guess[0]].isShot) {
    return computerGuess(player);
  }
  return guess;
};
