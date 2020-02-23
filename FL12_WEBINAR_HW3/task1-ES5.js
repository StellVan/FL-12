'use strict';

let suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
let faceCards = { 1: 'Ace', 11: 'Jack', 12: 'Queen', 13: 'King' };

function Card(rank, suit) {
  let _rank = rank;
  let _suit = suit;

  this.getRank = function() {
    return _rank;
  };
  this.getSuit = function(params) {
    return _suit;
  };
  this.getFaceCard = function() {
    return _isFaceCard;
  };

  this.toString = function() {
    let result, valueString;
    if (faceCards[this.getRank()]) {
      valueString = faceCards[this.getRank()];
    } else {
      valueString = this.getRank();
    }
    result = `${valueString} of ${this.getSuit()}`;
    return result;
  };

  this.setFaceCard = function() {
    if (Object.keys(faceCards).includes(this.getRank().toString())) {
      return true;
    } else {
      return false;
    }
  };
  let _isFaceCard = this.setFaceCard();
}

Card.Compare = function(cardOne, cardTwo) {
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
};

function Deck() {
  this.createDeck = function() {
    let arr = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 1; j <= 13; j++) {
        arr.push(new Card(j, suits[i]));
      }
    }
    return arr;
  };
  this.cards = this.createDeck();

  this.getCount = function() {
    return this.cards.length;
  };
  this.shuffle = function() {
    let j, temp;
    for (let i = this.cards.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = this.cards[j];
      this.cards[j] = this.cards[i];
      this.cards[i] = temp;
    }
  };

  this.draw = function(n) {
    return this.cards.splice(-n);
  };
}

function Player(name) {
  this.name = name;
  let _wins = 0;
  this.setWins = function() {
    _wins++;
  };
  this.getWins = function() {
    return _wins;
  };
  this.deck = new Deck();

  this.refreshDeck = function() {
    this.deck = new Deck();
  };
}

Player.Play = function(playerOne, playerTwo) {
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
    playerOne.setWins();
    name = `${playerOne.name} Wins`;
  } else if (playerOneScore < playerTwoScore) {
    playerTwo.setWins();
    name = `${playerTwo.name} Wins`;
  } else if (playerOneScore === playerTwoScore) {
    name = 'Draw';
  }
  playerOne.refreshDeck();
  playerTwo.refreshDeck();
  return `${name}! Score is ${playerOneScore} : ${playerTwoScore}`;
};
