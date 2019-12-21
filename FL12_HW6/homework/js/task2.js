'use strict';
let a = +prompt('input a value');
let b = +prompt('input b value');
let c = +prompt('input c value');

if (
  Number.isInteger(a) !== true ||
  Number.isInteger(b) !== true ||
  Number.isInteger(c) !== true
) {
  alert('input values should be ONLY numbers');
} else if (a <= 0 || b <= 0 || c <= 0) {
  alert('A triangle must have 3 sides with a positive definite length');
} else if (a + b <= c || a + c <= b || b + c <= a) {
  alert('Triangle doesn’t exist');
} else if (a === b && a === c) {
  alert('Equilateral triangle');
} else if (a === c || a === b || b === c) {
  alert('Isosceles triangle');
} else if (a !== b && b !== c) {
  alert('Scalene triangle');
}
