"use strict";
const ArrowUp = "ArrowUp";
const ArrowDown = "ArrowDown";
const ArrowLeft = "ArrowLeft";
const ArrowRight = "ArrowRight";
const grid = document.querySelector(".grid");
const scoreDisplay = document.querySelector(".score");
const resultDisplay = document.querySelector(".result");
const colorCell = [
  "#afa192",
  "#eee4da",
  "#ede0c8",
  "#f2b179",
  "#ffcea4",
  "#e8c064",
  "#ffab6e",
  "#fd9982",
  "#ead79c",
  "#76daff",
  "#beeaa5",
  "#d7d4f0",
];

function clickControl(event) {
  if (event.key === ArrowLeft) {
    console.log("ArrowLeft");
  } else if (event.key === ArrowUp) {
    console.log("ArrowUp");
  } else if (event.key === ArrowRight) {
    console.log("ArrowRight");
  } else if (event.key === ArrowDown) {
    console.log("ArrowDown");
  }
}

class GameManager {
  constructor() {
    this.isGameOver = false;
    this.score = 0;
    this.board = null;
  }
  init() {
    this.board = new Board();
    this.board.init();
    document.addEventListener("keyup", clickControl);
  }
  checkIsGameOver() {}
}
class Board {
  constructor() {
    this.widthBoard = 4;
    this.squares = [];
    this.wrapper = document.querySelector(".grid");
  }
  init() {
    const fragment = document.createDocumentFragment();
    for (let index = 0; index < this.widthBoard * this.widthBoard; index++) {
      const square = document.createElement("div");
      square.innerHTML = "";
      square.className = "cell";
      fragment.appendChild(square);
      this.squares.push(square);
    }
    this.wrapper.appendChild(fragment);
  }
  generateNewCell() {}
  addColours() {}
}
class Cell {
  constructor() {
    this.value = "";
    this.dom = null;
  }
  getValue() {
    return this.value;
  }
  setValue() {
    console.log("setValue");
  }
  getNewElement() {
    console.log("getNewElement");
  }
}

const start = new GameManager();
start.init();

document.addEventListener("keyup", clickControl);
