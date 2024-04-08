const form = document.querySelector("form");

// variabler för olika värden
let totalPts = 0;
let totalRnds = 0;
let rndPts = 0;
let highScore = 0;

// Knappar
const rollBtn = document.querySelector("#roll");
rollBtn.disabled = true;
const holdBtn = document.querySelector("#hold");
holdBtn.disabled = true;

// Labels
const totalPtsLabel = document.querySelector("#totalPts");
const totalRndsLabel = document.querySelector("#totalRnds");
const rndPtsLabel = document.querySelector("#rndPts");
const diceLabel = document.querySelector("#diceValue");

// Fyller i spelarens namn & startar spelet
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector("input").value;
  const scoreboard = document.querySelector("#scoreboard");
  scoreboard.innerText = `Let's play ${name}!`;
  totalPtsLabel.innerText = `Total pts: ${totalPts}`;
  totalRndsLabel.innerText = `Total rnds: ${totalRnds}`;
  rndPtsLabel.innerText = "Round pts: 0";

  const btn = document.querySelector("form button");
  btn.disabled = true;
  rollBtn.disabled = false;
});

rollBtn.addEventListener("click", roll);

holdBtn.addEventListener("click", hold);

function roll() {
  holdBtn.disabled = false;
  const randomNum = Math.floor(Math.random() * 6) + 1;
  diceLabel.innerText = randomNum;
  rndPts += randomNum;
  rndPtsLabel.innerText = `Round pts: ${rndPts}`;

  if (randomNum == 1) {
    totalRnds++;
    rndPts = 0;
    rndPtsLabel.innerText = "Round pts: 0";
    totalRndsLabel.innerText = `Total rnds: ${totalRnds}`;
    holdBtn.disabled = true;
  }
}

function hold() {
  totalPts += rndPts;
  rndPtsLabel.innerText = "Round pts: 0";
  totalRnds++;
  holdBtn.disabled = true;
  totalRndsLabel.innerText = `Total rnds: ${totalRnds}`;
  totalPtsLabel.innerText = `Total pts: ${totalPts}`;

  if (totalPts >= 100) {
    highScore = totalRnds;
    console.log(highScore);
    rndPts = 0;
    totalPts = 0;
    totalRnds = 0;
    totalRndsLabel.innerText = `Total rnds: ${totalRnds}`;
    totalPtsLabel.innerText = `Total pts: ${totalPts}`;
  }
}
