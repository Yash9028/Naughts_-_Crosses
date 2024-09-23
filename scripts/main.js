const headingEl = document.querySelector(".heading")
const currentPlayerEl = document.querySelector(".current-player")
const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector(".btn-reset");


const player=["O","X"];
let currPlayer = getPlayer();
currentPlayerEl.textContent = currPlayer;


function getPlayer(){
  const rn = Math.floor(Math.random()*2);
  return players[rn];
}
function swapPlayer(){
  currPlayer = currPlayer ==="O"?"X":"O";
}
function handleClick(input){
  input.textContent = currPlayer;
  swapPlayer();
  currentPlayerEl.textContent = currPlayer;
}

//only the first one
boxes.forEach(function(box){
  box.addEventListener("click",function(){

    handleClick(box);
  });
});

