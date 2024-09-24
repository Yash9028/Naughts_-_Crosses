import chances from "./chances.js";

const headingEl = document.querySelector(".heading");
const currentPlayerEl = document.querySelector(".current-player");
const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector(".btn-reset");

const player = ["O", "X"];
let currPlayer;
let virtualGrid;

function getPlayer() {
  const rn = Math.floor(Math.random() * 2);
  return player[rn];
}
function swapPlayer() {
  const newPlayer = currPlayer === "O" ? "X" : "O";
  currPlayer = newPlayer;
  currentPlayerEl.textContent = newPlayer;
}

// =======Start the game=====
function startGame() {
  console.log(1);

  // current player set the random player
  currPlayer = getPlayer();
  //virtual grid = g empty strings
  virtualGrid = new Array(9).fill("");
  currentPlayerEl.textContent = currPlayer;
}
function handleBoxClick(input) {
  if (virtualGrid[input] === "") {
    console.log(input);
    boxes[input].textContent = currPlayer;
    boxes[input].computedStyleMap.cursor ="auto";
    virtualGrid[input] = currPlayer;
    console.log(virtualGrid);
    swapPlayer();
  }
}
console.log(boxes);

boxes.forEach(function (_, index) {
  _.addEventListener("click", function () {
    handleBoxClick(index);
  });
});

function handleReset() {
  alert(1);
}
resetBtn.addEventListener("click", handleReset);

// box.addEventListener("click", handleBoxClick);

document.addEventListener("DOMContentLoaded", startGame);
