'use strict';

function pipe() {
  let num = arguments[0];
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] === addOne) {
      num = addOne(num);
    }
  }
  return num;
}

function addOne(x) {
  return x + 1;
}

console.log(
  pipe(1, addOne), //=> 2
  pipe(1, addOne, addOne) //=> 3
);
