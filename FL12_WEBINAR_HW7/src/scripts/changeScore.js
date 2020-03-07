'use strict';

export { changeScore };

let changeScore = node => {
  node.innerText = +node.innerText + 1;
};
