import { createDiv, createHeader } from "./helpers/create-DOM-elements";

export default () => {
  const titleDiv = createDiv("title-div", ["title-div"]);
  titleDiv.appendChild(
    createHeader("title-header", ["title-header"], "h1", "BATTLESHIP"),
  );
  document.body.appendChild(titleDiv);

  const gameWindow = createDiv("game-window", ["game-window"]);
  document.body.appendChild(gameWindow);
  const playerBoard = createDiv("player-board", ["player-board"]);
  const aiBoard = createDiv("ai-board", ["ai-board"]);

  gameWindow.appendChild(playerBoard);
  gameWindow.appendChild(aiBoard);
};
