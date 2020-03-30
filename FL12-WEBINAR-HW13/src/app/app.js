import draw from './utils/drawTable';
import addSymbol from './addSymbol/addSymbol';
import './app.less';
import {
  crossScore,
  circleScore,
  message,
  refresh,
  newGame
} from './utils/constants';

draw();
addClickListener();

let turn = 'circle';

function addClickListener() {
  document.querySelectorAll('.border').forEach(node =>
    node.addEventListener('click', ev => {
      turn = addSymbol(ev.target, turn);
    })
  );
}

refresh.addEventListener('click', () => {
  crossScore.textContent = '0';
  circleScore.textContent = '0';
  message.textContent = '';

  draw();
  addClickListener();
  turn = 'circle';
});

newGame.addEventListener('click', () => {
  message.textContent = '';

  draw();
  addClickListener();
  turn = 'circle';
});
