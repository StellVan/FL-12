'use strict';

import { RNG } from './RNG';
import { changeScore } from './changeScore';
import {
  rockButton,
  paperButton,
  restartButton,
  scissorsButton,
  roundsWrapper,
  scorePlayer,
  scoreComputer
} from './variables';

let playerTempScore = 0;
let computerTempScore = 0;

rockButton.addEventListener('click', () => {
  startGame('Rock');
});
paperButton.addEventListener('click', () => {
  startGame('Paper');
});
scissorsButton.addEventListener('click', () => {
  startGame('Scissors');
});
restartButton.addEventListener('click', () => {
  restartGame();
});

let startGame = selection => {
  let computerChoise = RNG();
  let finalText;
  let winText;

  if (selection !== computerChoise) {
    if (playerTempScore < 3 && computerTempScore < 3) {
      if (selection === 'Rock' && computerChoise === 'Paper') {
        computerTempScore++;
        winText = 'You lost';
      } else if (selection === 'Paper' && computerChoise === 'Rock') {
        playerTempScore++;
        winText = 'You won';
      } else if (selection === 'Scissors' && computerChoise === 'Rock') {
        computerTempScore++;
        winText = 'You lost';
      } else if (selection === 'Rock' && computerChoise === 'Scissors') {
        playerTempScore++;
        winText = 'You won';
      } else if (selection === 'Paper' && computerChoise === 'Scissors') {
        computerTempScore++;
        winText = 'You lost';
      } else if (selection === 'Scissors' && computerChoise === 'Paper') {
        playerTempScore++;
        winText = 'You won';
      }

      finalText = `${winText}! You chose ${selection} and computer chose ${computerChoise}`;
    }

    if (playerTempScore === 3) {
      changeScore(scorePlayer);
      finalText = `Winner! Score is ${playerTempScore} : ${computerTempScore}`;
      playerTempScore = 0;
      computerTempScore = 0;
    }

    if (computerTempScore === 3) {
      changeScore(scoreComputer);
      finalText = `Loser! Score is ${playerTempScore} : ${computerTempScore}`;
      playerTempScore = 0;
      computerTempScore = 0;
    }
  } else if (selection === computerChoise) {
    finalText = `Draw! You and computer chose ${selection}`;
  }

  roundsWrapper.innerHTML = `<p class="finalText">${finalText}</p>`;
};

let restartGame = () => {
  playerTempScore = 0;
  computerTempScore = 0;
  roundsWrapper.innerText = '';
  scorePlayer.innerText = '0';
  scoreComputer.innerText = '0';
};
