'use strict';
const number = document.querySelector('.number');
const message = document.querySelector('.message');
const guess = document.querySelector('.guess');
const check = document.querySelector('.check');
const again = document.querySelector('.again');
const highscore = document.querySelector('.highscore');
const score = document.querySelector('.score');
const body = document.querySelector('body');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreNumber = 20;

check.addEventListener('click', () => {
  if (!guess) message.textContent = 'No Number!';
  if (scoreNumber > 0) {
    if (guess.value == secretNumber) {
      message.textContent = 'Correct Number!';
      number.textContent = secretNumber;
      body.style.backgroundColor = '#60b347';
      number.style.width = '30rem';
      if (scoreNumber > highscore.textContent) {
        highscore.textContent = scoreNumber;
      }
    } else if (guess.value < secretNumber) {
      message.textContent = 'Too Low!';
      scoreNumber--;
      score.textContent = scoreNumber;
    } else if (guess.value > secretNumber) {
      message.textContent = 'Too High!';
      scoreNumber--;
      score.textContent = scoreNumber;
    }
  } else {
    message.textContent = 'You lost the game!';
  }
});

again.addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  scoreNumber = 20;
  score.textContent = scoreNumber;
  message.textContent = 'Start guessing...';
  number.textContent = '?';
  guess.value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  number.style.width = '15rem';
});
