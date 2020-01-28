'use strict';

const rootNode = document.getElementById('root');
let mainWrapper = document.querySelector('.mainWrapper');
let addNewWrapper = document.querySelector('.addNewWrapper');
let modifyWrapper = document.querySelector('.modifyWrapper');
let nameInput = document.querySelector('.nameAdd');
let termInput = document.querySelector('.termAdd');
let definitionInput = document.querySelector('.defAdd');
let addButton = document.querySelector('.addButton');
let saveButton = document.querySelector('.saveButton');
let addTermButton = document.querySelector('.addTermButton');
let modifySave = document.querySelector('.modifySave');
let modifyCancel = document.querySelector('.modifyCancel');
let modifyForm = document.querySelector('.modifyForm');

const minLength = 0;
const subMin = 2;
const subMax = 9;
const toSTR = 36;

let newSet;
let termArray = [];

addNewWrapper.remove();
modifyWrapper.remove();

window.addEventListener('load', () => {
  location.hash = '';
  rebuild();
});

addButton.addEventListener('click', () => {
  location.hash = '/add';
});

window.addEventListener('hashchange', () => {
  if (location.hash === '') {
    addNewWrapper.remove();
    modifyWrapper.remove();
    rootNode.append(mainWrapper);
    rebuild();
  } else if (location.hash === '#/add') {
    mainWrapper.remove();
    rootNode.append(addNewWrapper);
  } else if (location.hash === '#/modify') {
    mainWrapper.remove();
    rootNode.append(modifyWrapper);
  }
});

addTermButton.addEventListener('click', () => {
  if (
    termInput.value.length > minLength &&
    definitionInput.value.length > minLength
  ) {
    termArray.push({ term: termInput.value, def: definitionInput.value });
    termInput.value = '';
    definitionInput.value = '';
  }
});

saveButton.addEventListener('click', () => {
  if (nameInput.value.length > minLength && termArray.length > minLength) {
    newSet = JSON.parse(localStorage.getItem('array'));
    if (!newSet) {
      newSet = [];
    }
    newSet.push({
      name: nameInput.value,
      array: termArray,
      studied: false,
      id: idGenerator()
    });
    localStorage.setItem('array', JSON.stringify(newSet));
    termArray = [];
    nameInput.value = '';
    location.hash = '';
  }
});

function modify(element, index) {
  let inputName = document.createElement('input');
  inputName.setAttribute('type', 'text');
  inputName.value = element.name;

  for (let i = 0; i < element.array.length; i++) {
    let inputTerm = document.createElement('input');
    let inputDef = document.createElement('input');
    let inputModWrapper = document.createElement('div');
    let removeBtt = document.createElement('button');

    removeBtt.innerText = 'remove';
    inputTerm.classList.add('inputTerm');
    inputDef.classList.add('inputDef');
    inputModWrapper.classList.add('inputModWrapper');
    inputTerm.setAttribute('type', 'text');
    inputDef.setAttribute('type', 'text');
    removeBtt.setAttribute('type', 'button');
    removeBtt.setAttribute('id', i);

    inputTerm.value = element.array[i].term;
    inputDef.value = element.array[i].def;
    inputModWrapper.append(inputTerm, inputDef, removeBtt);
    modifyForm.append(inputModWrapper);

    removeBtt.addEventListener('click', ev => {
      element.array.splice(ev.target.getAttribute('id'), 1);
      ev.target.parentNode.remove();
    });

    modifySave.addEventListener('click', () => {
      if (inputName.value > minLength) {
        let storagedArray = JSON.parse(localStorage.getItem('array'));
        element.name = inputName.value;
        if (element.array.length > minLength) {
          element.array[i].term = inputTerm.value;
          element.array[i].def = inputDef.value;
        }
        storagedArray[index] = element;
        localStorage.setItem('array', JSON.stringify(storagedArray));
        location.href = '';
      }
    });
  }

  modifyWrapper.append(inputName, modifyForm);

  modifyCancel.addEventListener('click', () => {
    location.href = '';
  });
}

function idGenerator() {
  return Math.random()
    .toString(toSTR)
    .substr(subMin, subMax);
}

function sortStudied() {
  let storagedArray = JSON.parse(localStorage.getItem('array'));
  let elementArr = storagedArray.find(el => el.studied === true);
  storagedArray.splice(storagedArray.indexOf(elementArr), 1);
  storagedArray.push(elementArr);
  localStorage.setItem('array', JSON.stringify(storagedArray));
}

function rebuild() {
  if (localStorage.getItem('array')) {
    let listWrapper = document.querySelector('.listWrapper');
    while (listWrapper.firstChild) {
      listWrapper.firstChild.remove();
    }

    let storagedArray = JSON.parse(localStorage.getItem('array'));

    for (let i = 0; i < storagedArray.length; i++) {
      let deleteButton = document.createElement('button');
      let modifyButton = document.createElement('button');
      let setWrapper = document.createElement('div');
      let allTermsWrapper = document.createElement('div');
      let nameText = document.createElement('p');

      deleteButton.innerText = 'delete';
      modifyButton.innerText = 'modify';
      deleteButton.classList.add('deleteButton');
      modifyButton.classList.add('modifyButton');
      setWrapper.classList.add('setWrapper');
      allTermsWrapper.classList.add('allTermsWrapper');
      nameText.classList.add('nameText');
      setWrapper.setAttribute('id', storagedArray[i].id);
      deleteButton.setAttribute('id', storagedArray[i].id);
      modifyButton.setAttribute('id', storagedArray[i].id);

      deleteButton.addEventListener('click', () => {
        let storagedArray = JSON.parse(localStorage.getItem('array'));
        for (let j = 0; j < storagedArray.length; j++) {
          if (storagedArray[j].id === deleteButton.getAttribute('id')) {
            storagedArray.splice(j, 1);
          }
        }
        localStorage.setItem('array', JSON.stringify(storagedArray));
        deleteButton.parentNode.remove();
      });

      modifyButton.addEventListener('click', () => {
        let storagedArray = JSON.parse(localStorage.getItem('array'));
        let element = storagedArray.find(
          el => el.id === modifyButton.getAttribute('id')
        );
        location.hash = '/modify';
        modify(element, storagedArray.indexOf(element));
      });

      setWrapper.addEventListener('click', ev => {
        if (ev.target.classList.contains('setWrapper')) {
          let storagedArray = JSON.parse(localStorage.getItem('array'));
          for (let j = 0; j < storagedArray.length; j++) {
            if (storagedArray[j].id === setWrapper.getAttribute('id')) {
              storagedArray[j].studied = true;
            }
          }
          localStorage.setItem('array', JSON.stringify(storagedArray));
          sortStudied();
          rebuild();
        }
      });

      for (let k = 0; k < storagedArray[i].array.length; k++) {
        let termWrapper = document.createElement('div');
        let termText = document.createElement('p');
        let defText = document.createElement('p');
        termWrapper.classList.add('termWrapper');
        termText.classList.add('termText');
        defText.classList.add('defText');

        termText.innerText = `"${storagedArray[i].array[k].term}"-`;
        defText.innerText = storagedArray[i].array[k].def;
        termWrapper.append(termText, defText);
        allTermsWrapper.append(termWrapper);
      }

      nameText.innerText = storagedArray[i].name;
      setWrapper.append(nameText, allTermsWrapper, deleteButton, modifyButton);
      listWrapper.append(setWrapper);
    }
  }
}
