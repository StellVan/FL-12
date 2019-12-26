'use strict';
console.log('start');
let inputNumber, randomNumber, continueGame, currentBid;
let playAgain = true;
let bid = 100;
let prize = 0;
let maxRange = 8;
let gameEnter = confirm('Do you want to play a game?');

if (gameEnter === false) {
  alert('You did not become a billionaire, but can');
} else {
  do {
    randomNumber = Math.floor(Math.random() * (maxRange - 0) + 0);
    currentBid = bid;
    console.log(randomNumber);
    for (let i = 3; i >= 0; i--) {
      inputNumber = prompt(
        `
        Choose a roulette pocket number from 0 to ${maxRange}
        Attempts left: ${i}
        Total prize: ${prize}$
        Possible prize on current attempt: ${currentBid}
        `
      );
      if (inputNumber === null) {
        playAgain = false;
        alert(`Thank you for your participation. Your prize is: ${prize} $`);
        break;
      } else if (+inputNumber === randomNumber) {
        prize = prize + currentBid;
        i = 3;
        maxRange = maxRange + 4;
        bid = bid * 2;
        playAgain = confirm(
          `Congratulation, you won! Your prize is: ${prize}$. Do you want to continue?`
        );
        if (playAgain === true) {
          break;
        } else {
          playAgain = false;
          alert(`Thank you for your participation. Your prize is: ${prize} $`);
          break;
        }
      } else if (i === 1) {
        alert(`Thank you for your participation. Your prize is: ${prize} $`);
        playAgain = confirm('Do you want to play again?');
        if (playAgain === true) {
          bid = 100;
          prize = 0;
          maxRange = 8;
          break;
        } else {
          alert(`Thank you for your participation. Your prize is: ${prize} $`);
          break;
        }
      } else if (+inputNumber !== randomNumber) {
        alert('Try again');
        currentBid = currentBid / 2;
      }
    }
  } while (playAgain === true);
}
