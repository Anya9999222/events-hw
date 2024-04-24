import { BoardItem } from "./components/board-item/board-item";
import { Counter } from "./components/counter/counter";

document.addEventListener("DOMContentLoaded", () => {
  const board = new BoardItem(document.querySelector(".board"));
  const counter = new Counter();
  let goblinAppeapance = 0;

  board.renderBoard(16);
  const boardEl = document.querySelectorAll(".board-el");

  let previousCell = 1;

  function generateNumber() {
    let cell = Math.floor(Math.random() * (16 - 1) + 1);
    return cell;
  }
  function setGoblin() {
    let cell = generateNumber();
    if (cell === previousCell) {
      cell = generateNumber();
    } else {
      previousCell = cell;
    }

    boardEl.forEach((el) => {
      if (el.classList.contains("active")) {
        goblinAppeapance += 1;
        el.classList.remove("active");
      }

      if (el.dataset.id === cell.toString()) {
        el.classList.add("active");
      }
    });
  }

  const interval = setInterval(() => {
    setGoblin();
    if (goblinAppeapance === 5) {
      counter.finishGame();
      clearInterval(interval);
    }
  }, 1000);
});
