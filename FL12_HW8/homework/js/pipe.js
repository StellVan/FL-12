'use strict';

function pipe() {
  let num = arguments[0];
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] === addOne) {
      num = addOne(num);
    }
  }
  return console.log(num);
}

function addOne(x) {
  return x + 1;
}

pipe(1, addOne);
pipe(1, addOne, addOne);
pipe(3, addOne, 'dddd', addOne);
