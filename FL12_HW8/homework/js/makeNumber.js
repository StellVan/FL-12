'use strict';

function makeNumber(string) {
  let array = string.split('');
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (isNaN(+array[i]) === false) {
      result.push(array[i]);
    }
  }
  return result.join('');
}

makeNumber('erer384jjjfd123');
makeNumber('123098h76gfdd');
makeNumber('ijifjgdj');
