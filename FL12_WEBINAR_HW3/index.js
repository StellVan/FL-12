'use strict';

class Deck {
  constructor(cards) {
    this.cards = cards;
    let count = 52;
    this.getCount = () => {
      return count;
    };
    this.changeCount = newCount => {
      count = newCount;
    };
  }

  shuffle() {
    let j, temp;
    for (let i = this.cards.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = this.cards[j];
      this.cards[j] = this.cards[i];
      this.cards[i] = temp;
    }
  }
  draw(n) {
    return this.cards.splice(-n);
  }
}

let aaa = new Deck([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
