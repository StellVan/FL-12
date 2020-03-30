import './drawTable.less';

const root = document.getElementById('root');

export default function draw() {
  root.innerText = '';
  let id = 0;

  for (let i = 0; i < 3; i++) {
    let row = document.createElement('div');
    row.classList.add('row');

    for (let j = 0; j < 3; j++) {
      let block = document.createElement('div');
      block.classList.add('border');
      block.id = id;
      id++;

      row.append(block);
    }

    root.append(row);
  }
}
