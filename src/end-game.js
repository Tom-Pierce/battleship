import {
  createButton,
  createDiv,
  createHeader,
} from "./helpers/create-DOM-elements";
import startGame from "./start-game";

const restartGame = () => {
  document.body.innerHTML = "";
  startGame();
};

const createEndGameModal = (headerString) => {
  const modalWrapper = createDiv("", ["end-game-modal-wrapper"]);
  const modal = createDiv("end-game-modal", ["end-game-modal"]);
  modal.appendChild(createHeader("", ["end-game-header"], "h2", headerString));
  const restartButton = createButton(
    "",
    ["restart-game-btn"],
    "Restart",
    "button",
  );
  restartButton.addEventListener("click", () => {
    restartGame();
  });
  modal.appendChild(restartButton);
  modalWrapper.appendChild(modal);
  return modalWrapper;
};
export default (winner) => {
  if (winner.isHuman)
    document.body.insertAdjacentElement(
      "afterbegin",
      createEndGameModal("You won"),
    );
  else
    document.body.insertAdjacentElement(
      "afterbegin",
      createEndGameModal("Computer won"),
    );
};
