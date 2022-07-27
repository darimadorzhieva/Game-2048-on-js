import { Board } from "./board.js";

("use strict");
const ArrowUp = "ArrowUp";
const ArrowDown = "ArrowDown";
const ArrowLeft = "ArrowLeft";
const ArrowRight = "ArrowRight";
const grid = document.querySelector(".grid");
const scoreDisplay = document.querySelector(".score");
const resultDisplay = document.querySelector(".result");

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
    this.board.generateNewCell();
    document.addEventListener("keyup", clickControl);
  }
  checkIsGameOver() {}
}

const start = new GameManager();
start.init();

document.addEventListener("keyup", clickControl);
