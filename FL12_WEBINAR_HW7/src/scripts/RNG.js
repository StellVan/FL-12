'use strict';

import { array } from './variables';

export { RNG };
let RNG = () => {
  return array[Math.floor(Math.random() * 3)];
};
