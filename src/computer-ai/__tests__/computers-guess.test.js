import createPlayer from "../../factories/create-player";
import { computerGuess } from "../computer-guess";

describe("computerGuess function", () => {
  it("should never return duplicate coordinates", () => {
    const player = createPlayer("Jeremy");
    const computer = createPlayer("Jeffrey");
    player.opponent = computer;
    computer.opponent = player;

    const numberOfGuesses = 100;
    const guessesSet = new Set();

    for (let i = 0; i < numberOfGuesses; i += 1) {
      const result = computerGuess(player);
      computer.takeShot(result[0], result[1]);
      guessesSet.add(result.toString());
    }

    // As a set discards duplicates, we know that the size should be equal to the number of guesses
    expect(guessesSet.size).toEqual(numberOfGuesses);
  });
});
