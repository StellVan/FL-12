'use strict';

class Fighter {
  constructor({ name, damage, hp, strength, agility }) {
    let currentHp = hp;
    let wins = 0;
    let loss = 0;

    this.getName = () => {
      return name;
    };
    this.getDamage = () => {
      return damage;
    };
    this.getStrength = () => {
      return strength;
    };
    this.getAgility = () => {
      return agility;
    };
    this.getMaxHp = () => {
      return hp;
    };
    this.getHealth = () => {
      return currentHp;
    };
    this.getWins = () => {
      return wins;
    };
    this.getLoses = () => {
      return loss;
    };

    this.dealDamage = amount => {
      currentHp = currentHp - amount;
    };
    this.addWin = () => {
      wins++;
    };
    this.addLoss = () => {
      loss++;
    };
    this.heal = amount => {
      currentHp = currentHp + amount;
    };
  }

  attack(defender) {
    let generatedAttack = Math.floor(Math.random() * 100) + 1;
    let hitChanse = 100 - defender.getStrength() - defender.getAgility();
    if (hitChanse >= generatedAttack) {
      defender.dealDamage(this.getDamage());
      console.log(
        `${this.getName()} makes ${this.getDamage()} damage to ${defender.getName()}`
      );
    } else {
      console.log(`${this.getName()} attack missed`);
    }
  }

  logCombatHistory() {
    console.log(
      `Name: ${this.getName()}, Wins: ${this.getWins()}, Losses: ${this.getLoses()}`
    );
  }
}

function battle(fighter1, fighter2) {
  if (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
    let winner;
    while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
      fighter1.attack(fighter2);
      if (fighter2.getHealth() <= 0) {
        fighter1.addWin();
        winner = fighter1.getName();
        break;
      }
      fighter2.attack(fighter1);
      if (fighter1.getHealth() <= 0) {
        fighter2.addWin();
        winner = fighter2.getName();
        break;
      }
    }
    console.log(`${winner} has won!`);
  } else if (fighter1.getHealth() <= 0) {
    console.log(fighter1.getName() + ' is dead and cannot fight');
  } else if (fighter2.getHealth() <= 0) {
    console.log(fighter2.getName() + ' is dead and cannot fight');
  }
}

const myFighter1 = new Fighter({
  name: 'Maximus',
  damage: 20,
  hp: 100,
  strength: 20,
  agility: 15
});

const myFighter2 = new Fighter({
  name: 'Commodus',
  damage: 25,
  hp: 90,
  strength: 25,
  agility: 20
});
