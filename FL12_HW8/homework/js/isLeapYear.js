'use strict';

function isLeapYear(inputDate) {
  let date = new Date(inputDate);
  let year = date.getFullYear();
  let result;
  if (isNaN(year) === true) {
    result = 'Invalid Date';
  } else if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    result = `${year} is a leap year`;
  } else {
    result = `${year} is not a leap year`;
  }
  return result;
}

isLeapYear('2020-01-01 00:00:00');
isLeapYear('2020-01-01 00:00:00777');
isLeapYear('2021-01-15 13:00:00');
isLeapYear('2200-01-15 13:00:00');
isLeapYear(1213131313135465656654564646542132132131);
isLeapYear(1213131313);
