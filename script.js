'use strict';

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
let score = 4;
let highscore = 0;
let number = Math.trunc(Math.random() * 20) + 1;
console.log(number);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input value
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No number!';
    displayMessage('⛔ No number!');
    // When player wins
  } else if (guess === number) {
    displayMessage('🏆 You WIN!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // When guess is wrong
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? '📈 Too big.' : '🤏 Too low.');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😭 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Again Btn
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  score = 4;
  document.querySelector('.score').textContent = score;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
});
