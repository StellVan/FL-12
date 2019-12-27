'use strict';

function countNumbers(string) {
  let filtered = [];
  let result = {};
  filtered = string.replace(/\D/g, '');
  for (let a = 0; a < filtered.length; a++) {
    let counter = 0;
    for (let b = 0; b < filtered.length; b++) {
      if (filtered[a] === filtered[b]) {
        counter++;
      }
    }
    result[filtered[a]] = counter;
  }
  return result;
}

console.log(
  countNumbers('erer384jj4444666888jfd123'),
  // => {'1': 1, '2': 1, '3': 2, '4': 5, '6': 3, '8': 4}
  countNumbers('jdjjka000466588kkkfs662555'),
  // => {'0': 3, '2': 1, '4': 1, '5': 4, '6': 4, '8': 2}
  countNumbers('') // => {}
);
