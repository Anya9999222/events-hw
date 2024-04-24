import "./board-item.css";
import { Counter } from "../counter/counter";

export class BoardItem {
  constructor(element) {
    this._element = element;

    this._element.addEventListener("click", this.onItemClick);
  }
  renderBoard(size) {
    let id = 1;
    for (let i = 0; i < size; i += 1) {
      const item = document.createElement("div");
      item.classList.add("board-el");
      item.dataset["id"] = id;
      id += 1;
      this._element.appendChild(item);
    }
  }

  onItemClick(e) {
    const target = e.target;
    const counter = new Counter();
    if (target.classList.contains("active")) {
      counter.addScore();
      target.classList.remove("active");
    }
  }
}
