const form = document.querySelector("form");

// variabler för olika värden
let totalPts = 0;
let totalRnds = 0;
let rndPts = 0;
let highScore;

// Knappar
const rollBtn = document.querySelector("#roll");
rollBtn.disabled = true;
const holdBtn = document.querySelector("#hold");
holdBtn.disabled = true;

// Labels/img
const totalPtsLabel = document.querySelector("#totalPts");
const totalRndsLabel = document.querySelector("#totalRnds");
const rndPtsLabel = document.querySelector("#rndPts");
const diceImg = document.querySelector("#dice");
const highScoreLabel = document.querySelector("#highScore");

// Fyller i spelarens namn & startar spelet
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector("input").value;
  const scoreboard = document.querySelector("#scoreboard");
  scoreboard.innerText = `Let's play ${name}!`;
  highScoreLabel.innerText = `Best score: ${highScore}`;
  totalPtsLabel.innerText = `Total points: ${totalPts}`;
  totalRndsLabel.innerText = `Total rounds: ${totalRnds}`;
  rndPtsLabel.innerText = "Round points: 0";

  const btn = document.querySelector("form button");
  btn.disabled = true;
  rollBtn.disabled = false;
});

rollBtn.addEventListener("click", roll);

holdBtn.addEventListener("click", hold);

function roll() {
  holdBtn.disabled = false;
  const randomNum = Math.floor(Math.random() * 6) + 1;
  diceImg.src = `Dice-${randomNum}.png`;
  rndPts += randomNum;
  rndPtsLabel.innerText = `Round points: ${rndPts}`;

  if (randomNum == 1) {
    totalRnds++;
    rndPts = 0;
    rndPtsLabel.innerText = "Round points: 0";
    totalRndsLabel.innerText = `Total rounds: ${totalRnds}`;
    holdBtn.disabled = true;
  }
}

function hold() {
  totalPts += rndPts;
  rndPts = 0;
  rndPtsLabel.innerText = "Round points: 0";
  totalRnds++;
  holdBtn.disabled = true;
  totalRndsLabel.innerText = `Total rounds: ${totalRnds}`;
  totalPtsLabel.innerText = `Total points: ${totalPts}`;

  if (totalPts >= 100) {
    scoreboard.innerText = `You reached a 100 in ${totalRnds} rounds, now try and beat that!`;
    highScore = totalRnds;
    console.log(highScore);
    rndPts = 0;
    totalPts = 0;
    totalRnds = 0;
    totalRndsLabel.innerText = `Total rounds: ${totalRnds}`;
    totalPtsLabel.innerText = `Total points: ${totalPts}`;
    if (totalRnds < highScore) {
      totalRnds = highScore;
      highScoreLabel.innerText = `Best score: ${highScore}`;
      totalRnds = 0;
      console.log(highScore);
    }
  }
}
