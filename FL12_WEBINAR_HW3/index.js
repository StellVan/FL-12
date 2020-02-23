'use strict';

class Deck {
  constructor() {
    this.cards = [];
    let count = this.cards.length;
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

class Card {
  constructor(rank, suit) {
    this.suit = suit;
    this.rank = rank;
    this.isFaceCard = 'Card.getFaceCard();';
  }

  get isFaceCardd() {
    return this.isFaceCard;
  }

  set isFaceCard(n) {
    return n;
  }

  static getFaceCard() {
    let result;
    if (this.rank === 1 || this.rank > 10) {
      result = true;
    } else {
      result = false;
    }
    return result;
  }

  toString() {
    let result, valueString, suitString;
    switch (this.rank) {
      case 1:
        valueString = 'Ace';
        break;
      case 11:
        valueString = 'Jack';
        break;
      case 12:
        valueString = 'Queen';
        break;
      case 13:
        valueString = 'King';
        break;
      default:
        valueString = this.rank;
        break;
    }
    switch (this.suit) {
      case 1:
        suitString = 'Hearts';
        break;
      case 2:
        suitString = 'Diamonds';
        break;
      case 3:
        suitString = 'Clubs';
        break;
      case 4:
        suitString = 'Spades';
        break;
    }
    result = `${valueString} of ${suitString}`;
    return result;
  }

  Compare() {}
}

let aaa = new Card(4, 4);

console.log(aaa.isFaceCardd);
// this.createDeck = () => {
//   let arr = [];
//   let suit;
//   for (let i = 1; i <= 4; i++) {
//     switch (i) {
//       case 1:
//         suit = 'hearts';
//         break;
//       case 2:
//         suit = 'diamonds';
//         break;
//       case 3:
//         suit = 'clubs';
//         break;
//       case 4:
//         suit = 'spades';
//         break;
//     }
//     for (let j = 1; j <= 13; j++) {
//       arr.push({ value: j, suit: suit });
//     }
//   }
//   return arr;
// };
// this.cards = this.createDeck();
