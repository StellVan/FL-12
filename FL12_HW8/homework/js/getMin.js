'use strict';

function getMin() {
  let number = arguments[0];
  for (let i = 0; i < arguments.length; i++) {
    if (number > arguments[i]) {
      number = arguments[i];
    }
  }
  return number;
}

getMin(4, 1, 5, 9, -5);
