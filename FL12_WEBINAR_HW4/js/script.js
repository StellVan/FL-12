'use script';

let arrayMockup = [1, 23, 1, 2, 3, 2, 2, 5 - 123, 333, 0];
let number = '0123456789';
let oldObj = {
  name: 'StellVan',
  details: { id: 1, age: 19, university: 'EPAM' }
};

function maxElement(array) {
  return Math.max(...array);
}

console.log(maxElement(arrayMockup));

function copyArray(array) {
  return [...array];
}

console.log(copyArray(arrayMockup));

function addUniqeId(object) {
  let id = Symbol('id');
  return { id, ...object };
}

console.log(addUniqeId(oldObj));

function regroupObject(object) {
  let firstname = object.name;
  let { id, age, university } = object.details;
  return { university, user: { age, firstname, id } };
}

console.log(regroupObject(oldObj));

function findUniqueElements(array) {
  return [...new Set(array.map(el => el))];
}

console.log(findUniqueElements(arrayMockup));

function hideNumber(number) {
  return number.slice(-4).padStart(number.length, '*');
}

console.log(hideNumber(number));

let required = () => {
  throw new Error('Missing property');
};

function add(a = required(), b = required()) {
  return a + b;
}

console.log(add(1, 2));
// console.log(add(1));

function fetchRepos1(username, callback) {
  fetch(`https://api.github.com/users/${username}/repos`)
    .then(res => res.json())
    .then(data => {
      return data.map(el => el.name).sort();
    })
    .then(result => callback(result))
    .catch(error => {
      throw new Error(error.message);
    });
}

fetchRepos1('StellVan', result => {
  console.log(result);
});

async function fetchRepos2(username, callback) {
  try {
    let res = await fetch(`https://api.github.com/users/${username}/repos`);
    let data = await res.json();
    let result = await data.map(el => el.name).sort();
    callback(result);
  } catch (error) {
    throw new Error(error.message);
  }
}

fetchRepos2('StellVan', result => {
  console.log(result);
});
