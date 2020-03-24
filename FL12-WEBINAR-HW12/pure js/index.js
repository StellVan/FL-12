'use strict';

import data from './data.js';

const listNode = document.getElementById('listWrapper');
const poolNode = document.getElementById('poolWrapper');
const filterNode = document.getElementById('filterNode');
const Low = document.querySelector('.Low');
const Average = document.querySelector('.Average');
const High = document.querySelector('.High');

// function to sort mock json into nested object

function sortList(data) {
  let newList = [];

  data.forEach(employee => {
    if (employee.pool_name) {
      employee.pool = [...data.filter(el => el.rm_id === employee.id)];
      newList.push(employee);
    }
  });
  return newList.filter(el => el.rm_id === null);
}

// first task

function renderEmployees(data, node) {
  let divWrapper = document.createElement('div');
  let p;
  let padding;
  let paddingToInsert;
  let iterator = 20;

  for (let i = 0; i < data.length; i++) {
    p = document.createElement('p');
    p.innerText = `| ${data[i].name}`;

    padding = 0;
    padding = padding + iterator;
    paddingToInsert = `${padding}px`;
    divWrapper.style.paddingLeft = paddingToInsert;

    divWrapper.append(p);

    if (data[i].pool_name) {
      p.style.color = 'blue';
      renderEmployees(data[i].pool, divWrapper);
    }
  }
  node.append(divWrapper);
}

// second task

function renderPool(data, node) {
  let divWrapper = document.createElement('div');
  let p;
  let padding;
  let paddingToInsert;
  let iterator = 20;

  for (let i = 0; i < data.length; i++) {
    if (data[i].pool_name) {
      let salary = Math.floor(
        data[i].pool.map(el => el.salary).reduce((el, acc) => acc + el, 0) /
          data[i].pool.length
      );

      let temp = data[i].pool
        .map(el => el.performance)
        .reduce((acc, el) => {
          acc[el] = (acc[el] || 0) + 1;
          return acc;
        }, {});

      let performance = Object.keys(temp).reduce((a, b) =>
        temp[a] > temp[b] ? a : b
      );

      p = document.createElement('p');
      p.innerText = `| ${data[i].pool_name} - ${salary} - ${performance}`;

      padding = 0;
      padding = padding + iterator;
      paddingToInsert = `${padding}px`;
      divWrapper.style.paddingLeft = paddingToInsert;

      divWrapper.append(p);

      renderPool(data[i].pool, divWrapper);
    }
  }

  node.append(divWrapper);
}

// third task

class FilterEmployees {
  constructor() {
    this.strategy = '';
    this.list = data;
  }

  refreshList() {
    fetch('https://roman4ak.github.io/fe-oop-lab/mocks/epms.json')
      .then(response => response.json())
      .then(data => (this.list = data));
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  filterEmployees() {
    return this.strategy.filterEmployees(this.list);
  }
}

const dispatcher = new FilterEmployees();

class filterByLowPerf {
  filterEmployees(list) {
    return list.filter(el => el.performance === 'low');
  }
}

class filterByAveragePerf {
  filterEmployees(list) {
    return list.filter(el => el.performance === 'average');
  }
}

class filterByHighPerf {
  filterEmployees(list) {
    return list.filter(el => el.performance === 'top');
  }
}

Low.addEventListener('click', () => {
  const strategy = new filterByLowPerf();

  dispatcher.setStrategy(strategy);
  renderFiltered(dispatcher.filterEmployees(), 'Low performance');
});

Average.addEventListener('click', () => {
  const strategy = new filterByAveragePerf();

  dispatcher.setStrategy(strategy);
  renderFiltered(dispatcher.filterEmployees(), 'Average performance');
});

High.addEventListener('click', () => {
  const strategy = new filterByHighPerf();

  dispatcher.setStrategy(strategy);
  renderFiltered(dispatcher.filterEmployees(), 'High performance');
});

function renderFiltered(list, header) {
  filterNode.innerText = '';
  let title = document.createElement('p');

  title.innerText = header;
  title.classList.add('title');
  filterNode.append(title);

  list.forEach(el => {
    let p = document.createElement('p');
    p.innerText = el.name;
    filterNode.append(p);
  });
}

// fetch employees

fetch('https://roman4ak.github.io/fe-oop-lab/mocks/epms.json')
  .then(response => response.json())
  .then(data => {
    renderEmployees(sortList(data), listNode);
    renderPool(sortList(data), poolNode);
    dispatcher.refreshList();
  });
