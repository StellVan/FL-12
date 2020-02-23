'use strict';

let suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
let faceCards = { 1: 'Ace', 11: 'Jack', 12: 'Queen', 13: 'King' };
const _suit = Symbol('suit');
const _rank = Symbol('rank');
const _isFaceCard = Symbol('isFaceCard');
const _wins = Symbol('wins');

class Card {
  constructor(rank, suit) {
    this[_rank] = rank;
    this[_suit] = suit;
    this[_isFaceCard] = this.getFaceCard();
  }

  get rank() {
    return this[_rank];
  }

  getFaceCard() {
    if (Object.keys(faceCards).includes(this[_rank].toString())) {
      return true;
    } else {
      return false;
    }
  }

  toString() {
    let result, valueString, suitString;
    if (faceCards[this[_rank]]) {
      valueString = faceCards[this[_rank]];
    } else {
      valueString = this[_rank];
    }

    result = `${valueString} of ${this[_suit]}`;
    return result;
  }

  static Compare(cardOne, cardTwo) {
    if (cardOne === 1) {
      cardOne = 14;
    }
    if (cardTwo === 1) {
      cardTwo = 14;
    }
    if (cardOne > cardTwo) {
      return 'first';
    } else if (cardOne < cardTwo) {
      return 'second';
    } else if (cardOne === cardTwo) {
      return 'draw';
    }
  }
}

class Deck {
  constructor() {
    this.cards = this.createDeck();
  }

  get count() {
    return this.cards.length;
  }

  createDeck = () => {
    let arr = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 1; j <= 13; j++) {
        arr.push(new Card(j, suits[i]));
      }
    }
    return arr;
  };

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

class Player {
  constructor(name) {
    this.name = name;
    this[_wins];
    this.deck = new Deck();
  }

  refreshDeck() {
    this.deck = new Deck();
  }

  static Play(playerOne, playerTwo) {
    let name;
    let playerOneScore = 0;
    let playerTwoScore = 0;
    playerOne.deck.shuffle();
    playerTwo.deck.shuffle();
    for (let i = 51; i >= 0; i--) {
      let tempResult = Card.Compare(
        playerOne.deck.draw(1),
        playerTwo.deck.draw(1)
      );
      switch (tempResult) {
        case 'first':
          playerOneScore++;
          break;
        case 'second':
          playerTwoScore++;
          break;
        case 'draw':
          break;
        default:
          break;
      }
    }
    if (playerOneScore > playerTwoScore) {
      name = `${playerOne.name} Wins`;
    } else if (playerOneScore < playerTwoScore) {
      name = `${playerTwo.name} Wins`;
    } else if (playerOneScore === playerTwoScore) {
      name = 'Draw';
    }
    playerOne.refreshDeck();
    playerTwo.refreshDeck();
    return `${name}! Score is ${playerOneScore} : ${playerTwoScore}`;
  }
}

let Varvara = new Player('Varvara');
let StellVan = new Player('StellVan');

console.log(Player.Play(Varvara, StellVan));
console.log(Player.Play(Varvara, StellVan));
console.log(StellVan.deck.cards[0].toString());
console.log(StellVan.deck.cards[0].getFaceCard());
