const structure = [
  {
    folder: true,
    title: 'Films',
    children: [
      {
        title: 'Iron Man.avi'
      },
      {
        folder: true,
        title: 'Fantasy',
        children: [
          {
            title: 'The Lord of the Rings.avi'
          },
          {
            folder: true,
            title: 'New folder 1',
            children: false
          }
        ]
      }
    ]
  },
  {
    folder: true,
    title: 'Documents',
    children: [
      {
        folder: true,
        title: 'EPAM Homework answers',
        children: null
      }
    ]
  }
];

const rootNode = document.getElementById('root');

function htmlTreeBuilder(array, parentNode) {
  let folder,
    mainWrapper,
    element,
    fileTextWrapper,
    folderTextWrapper,
    materialIcon,
    text,
    newNode,
    padding,
    paddingCounter;
  let paddingIterator = 10;

  let textEmpty = document.createElement('p');
  textEmpty.classList.add('textEmpty');
  textEmpty.innerText = 'folder is empty';

  for (let i = 0; i < array.length; i++) {
    folder = document.createElement('div');
    mainWrapper = document.createElement('div');
    element = document.createElement('div');
    fileTextWrapper = document.createElement('div');
    folderTextWrapper = document.createElement('div');
    materialIcon = document.createElement('i');
    text = document.createElement('p');

    folder.classList.add('folder');
    element.classList.add('element');
    materialIcon.classList.add('material-icons');
    folderTextWrapper.classList.add('text', 'textWrapper');
    fileTextWrapper.classList.add('text');
    mainWrapper.classList.add('mainWrapper', 'toggle');
    text.classList.add('textFull');

    paddingCounter = 0;
    paddingCounter = paddingCounter + paddingIterator;
    padding = `${paddingCounter}px`;

    text.innerText = array[i].title;

    if (!array[i].children && array[i].folder === true) {
      console.log('object');
      mainWrapper.append(textEmpty);
    }

    if (array[i].folder === true) {
      materialIcon.innerText = 'folder';
      materialIcon.classList.add('folderMat');
      folderTextWrapper.append(materialIcon, text);
      folder.append(folderTextWrapper, mainWrapper);
      newNode = folder;
    } else {
      materialIcon.innerText = 'insert_drive_file';
      materialIcon.classList.add('folderElem');
      fileTextWrapper.append(materialIcon, text);
      element.append(fileTextWrapper);
      newNode = element;
    }

    parentNode.append(newNode);
    parentNode.style.paddingLeft = padding;
    if (array[i].children) {
      htmlTreeBuilder(array[i].children, mainWrapper);
    }
  }
}

htmlTreeBuilder(structure, rootNode);

let textWrapperArray = document.querySelectorAll('.textWrapper');
let mainWrapperArray = document.querySelectorAll('.mainWrapper');
let folderMatArray = document.querySelectorAll('.folderMat');

let folderToggle = false;
for (let i = 0; i < textWrapperArray.length; i++) {
  textWrapperArray[i].addEventListener('click', event => {
    event.stopPropagation();
    mainWrapperArray[i].classList.toggle('toggle');

    if (mainWrapperArray[i].classList.contains('toggle')) {
      folderMatArray[i].innerText = 'folder';
    } else if (!mainWrapperArray[i].classList.contains('toggle')) {
      folderMatArray[i].innerText = 'folder_open';
    }
  });
}
