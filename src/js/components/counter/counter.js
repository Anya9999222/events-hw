export class Counter {
  constructor() {
    this.counter = Number(document.querySelector(".count").textContent);
  }

  addScore() {
    this.counter += 1;
    document.querySelector(".count").textContent = this.counter;
  }

  finishGame() {
    alert("Вы проиграли!");
    location.reload();
  }
}
