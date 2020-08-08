/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-restricted-syntax */
const char1 = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};

const char2 = {
  name: 'Мечник',
  type: 'Swordman',
  health: 150,
  level: 2,
  attack: 80,
  defence: 30,
};

const char3 = {
  name: 'Демон',
  type: 'Deamon',
  health: 110,
  level: 2,
  attack: 60,
  defence: 20,
};

class Team {
  constructor(...chars) {
    this.chars = chars;
  }

  * [Symbol.iterator]() {
    for (const member of this.chars) {
      yield member; // если будет return, то последний объект не появится, т.к. у него будет done: true
    }
  }
}

const Person = new Team(char1, char2, char3);
export default Person;
// для отладки в консоле
for (const i of Person) {
  console.log(i);
}
