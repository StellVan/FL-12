'use strict';

function convert() {
  let array = [];
  let arg = arguments;
  let element;
  for (let i = 0; i < arg.length; i++) {
    if (typeof arg[i] === 'string') {
      element = parseInt(arg[i], 10);
    } else if (typeof arg[i] === 'number') {
      element = arg[i].toString();
    }
    array.push(element);
  }
  return array;
}

convert('1', 2, 3, '4'); // [1, '2', '3', 4]

function executeforEach(array, executableFunc) {
  let resultArr = [];
  for (let i = 0; i < array.length; i++) {
    resultArr.push(executableFunc(array[i]));
  }
  return resultArr;
}

executeforEach([1, 2, 3], function(el) {
  return el * 2;
}); // logs 2 4 6

function mapArray(array, executableFunc) {
  let newArr = [];
  let element;
  for (let i = 0; i < array.length; i++) {
    element = parseInt(array[i], 10);
    newArr.push(element);
  }
  return executeforEach(newArr, executableFunc);
}

mapArray([2, '5', 8], function(el) {
  return el + 3;
}); // returns [5, 8, 11]

function filterArray(array, executableFunc) {
  let newArr = [];
  let boolArr = executeforEach(array, executableFunc);
  for (let i = 0; i < array.length; i++) {
    if (boolArr[i] === true) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

filterArray([2, 5, 8], function(el) {
  return el % 2 === 0;
});
// returns [2, 8]

function flipOver(string) {
  let array = string.split('');
  let newArray = [];
  let resultArray;
  for (let i = array.length; i >= 0; i--) {
    newArray.push(array[i]);
  }
  resultArray = newArray.join('');
  return resultArray;
}

flipOver('hey world'); // 'dlrow yeh'

function makeListFromRange(array) {
  let result = [];
  for (let i = array[0]; i <= array[1]; i++) {
    result.push(i);
  }
  return result;
}

makeListFromRange([2, 7]); // [2, 3, 4, 5, 6, 7]

const actors = [
  { name: 'tommy', age: 36 },
  { name: 'lee', age: 28 }
];

function getArrayOfKeys(array, key) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(array[i][key]);
  }
  return result;
}

getArrayOfKeys(actors, 'name'); // [‘tommy’, ‘lee’]

function substitute(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 30) {
      result.push('*');
    } else if (array[i] >= 30) {
      result.push(array[i]);
    }
  }
  return result;
}

substitute([58, 14, 48, 2, 31, 29]); // [58, '*', 48, '*', 31, '*']

const date = new Date(2019, 0, 2);

function getPastDay(date, days) {
  let milliseconds = date.getTime() - days * 86400000;
  let newDate = new Date(milliseconds);
  return newDate.getDate();
}

getPastDay(date, 1); // 1, (1 Jan 2019)
getPastDay(date, 2); // 31, (31 Dec 2018)
getPastDay(date, 365); // 2, (2 Jan 2018)

function formatDate(date) {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = ('0' + date.getDate()).slice(-2);
  let hours = ('0' + date.getHours()).slice(-2);
  let minutes = ('0' + date.getMinutes()).slice(-2);
  return `${year}/${month}/${day} ${hours}:${minutes}`;
}

formatDate(new Date('6/15/2018 09:15:00')); // "2018/6/15 09:15"
formatDate(new Date()); // "2020/1/7 12:56" // gets current local time
