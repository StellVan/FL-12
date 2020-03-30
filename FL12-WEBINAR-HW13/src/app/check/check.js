import {
  winPositions,
  message,
  crossScore,
  circleScore
} from '../utils/constants';

export default function check(symbol) {
  const array = document.querySelectorAll('.border');

  let counter, currentScore;

  for (let i = 0; i < winPositions.length; i++) {
    counter = 0;
    for (let j = 0; j < winPositions[i].length; j++) {
      if (array[winPositions[i][j]].classList.contains(symbol)) {
        counter++;
        if (counter === 3) {
          for (let k = 0; k < winPositions[i].length; k++) {
            array[winPositions[i][k]].classList.add('red');
          }
          if (symbol === 'cross') {
            currentScore = +crossScore.textContent + 1;
            crossScore.textContent = currentScore;

            message.textContent = 'CROSS PLAYER WINS!';
          } else if (symbol === 'circle') {
            currentScore = +circleScore.textContent + 1;
            circleScore.textContent = currentScore;

            message.textContent = 'CIRCLE PLAYER WINS!';
          }

          array.forEach(node => node.classList.add('checked'));
          return;
        }
      }
    }
  }

  if (Array.from(array).every(el => el.classList.contains('checked'))) {
    crossScore.textContent = +crossScore.textContent + 1;
    circleScore.textContent = +circleScore.textContent + 1;

    message.textContent = 'DRAW!';

    return;
  }
}
