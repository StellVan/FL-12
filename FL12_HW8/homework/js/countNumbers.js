'use strict';

function countNumbers(string) {
  let array = string.split('');
  let result = {};
  let filtered = [];
  let counter;
  for (let i = 0; i < array.length; i++) {
    if (isNaN(+array[i]) === false) {
      filtered.push(array[i]);
    }
  }
  for (let a = 0; a < filtered.length; a++) {
    counter = 0;
    for (let b = 0; b < filtered.length; b++) {
      if (filtered[a] === filtered[b]) {
        counter++;
      }
    }
    result[filtered[a]] = counter;
  }
  return result;
}

countNumbers('erer384jj4444666888jfd123');
countNumbers('jdjjka000466588kkkfs662555');
countNumbers('');
