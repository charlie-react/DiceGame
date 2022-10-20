'use strict';

let defaultt = 0;

let score0Element = document.querySelector('#score--0');
let score1Element = document.querySelector('#score--1');
let rollDiceButton = document.querySelector('.btn--roll');
let holdButton = document.querySelector('.btn--hold');
let newButton = document.querySelector('.btn--new');
let diceElement = document.querySelector('.dice');
let currentScore00 = document.getElementById('current--0');
let currentScore01 = document.getElementById('current--1');
let playerPanel1 = document.querySelector('.player--0');
let playerPanel2 = document.querySelector('.player--1');

score0Element.textContent = defaultt;
score1Element.textContent = defaultt;

let bigScores, currentScore, activePlayer, playing;
const init = function () {
  bigScores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  diceElement.style.display = 'block';
  rollDiceButton.style.display = 'block';
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  currentScore00.textContent = 0;
  currentScore01.textContent = 0;
  playerPanel1.classList.remove('player--winner');
  playerPanel2.classList.remove('player--winner');
  playerPanel1.classList.add('player--active');
  playerPanel2.classList.remove('player--active');
  diceElement.style.display = 'none';
};
init();

const switchPLayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  playerPanel1.classList.toggle('player--active');
  playerPanel2.classList.toggle('player--active');
};

rollDiceButton.addEventListener('click', function () {
  if (playing) {
  }
  let randomDiceNumber = Math.trunc(Math.random() * 6) + 1;
  diceElement.style.display = 'block';
  diceElement.src = `dice-${randomDiceNumber}.png`;
  if (randomDiceNumber !== 1) {
    currentScore = currentScore + randomDiceNumber;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // switching active player
    switchPLayer();
  }
});
holdButton.addEventListener('click', function () {
  if (playing) {
    bigScores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      bigScores[activePlayer];
    if (bigScores[activePlayer] >= 20) {
      playing = false;
      diceElement.style.display = 'none';
      
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--active');
    } else {
      switchPLayer();
    }
  }
});
// newButton.addEventListener('click', function () {
//   init();
// });
newButton.addEventListener('click', init);

console.log("\u{1F600}")
