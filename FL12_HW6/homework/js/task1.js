'use strict';

let a = +prompt('input a value');
let b = +prompt('input b value');
let c = +prompt('input c value');
let d, x1, x2;

if (isNaN(a) !== true && isNaN(b) !== true && isNaN(c) !== true && a !== 0) {
  d = Math.pow(b, 2) - 4 * a * c;

  if (d < 0) {
    console.log('no solutions');
  } else {
    x1 = (-b + Math.sqrt(d)) / (2 * a);
    x2 = (-b - Math.sqrt(d)) / (2 * a);

    if (d === 0) {
      console.log(`x = ${Math.round(x1)}`);
    } else {
      console.log(`x1 = ${Math.round(x1)}, x2 = ${Math.round(x2)}`);
    }
  }
} else {
  console.log('Invalid input data');
}
