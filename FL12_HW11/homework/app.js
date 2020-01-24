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
  let div, newNode, element, text, wrapper;
  let padding;
  let paddingCounter;
  let folderToggle = false;

  for (let i = 0; i < array.length; i++) {
    text = document.createElement('div');
    element = document.createElement('div');
    div = document.createElement('div');
    wrapper = document.createElement('div');
    materialIcon = document.createElement('i');

    text.innerText = array[i].title;

    element.classList.add('element', 'toggle');
    div.classList.add('div');
    materialIcon.classList.add('material-icons');
    wrapper.classList.add('wrapper');

    paddingCounter = 0;
    paddingCounter = paddingCounter + 10;
    padding = `${paddingCounter}px`;

    if (array[i].folder === true) {
      div.classList.add('folder');
      materialIcon.innerText = 'folder';
    } else {
      div.classList.add('item');
      materialIcon.innerText = 'insert_drive_file';
    }

    div.append(materialIcon, text);
    element.append(div);
    wrapper.append(element);
    newNode = parentNode.appendChild(wrapper);
    newNode.style.paddingLeft = padding;
    if (
      array[i].children !== false &&
      array[i].children !== null &&
      array[i].children
    ) {
      htmlTreeBuilder(array[i].children, newNode);
    }
  }
}

htmlTreeBuilder(structure, rootNode);

let aaa = document.querySelectorAll('.wrapper');
for (let i = 0; i < aaa.length; i++) {
  aaa[i].addEventListener('click', event => {
    event.stopPropagation();
    aaa[i].classList.toggle('wrapper');
    console.log('object');
  });
}
