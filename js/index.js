'use strict';
'use strict'

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;
let number;

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function isNum(num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

function getResult() {
  let userInput;
  let userNumber;
  while ((userInput != null) || (userNumber !== number)) {
    userInput = prompt('Угадай число от 1 до 100');
    userNumber = parseInt(userInput);
    if ((!isNum(userNumber)) && (userInput !== null)) {
      alert('Введи число!');
      getResult();
    } else if (userNumber > number) {
      alert('Загаданное число меньше');
      getResult();
    } else if (userNumber < number) {
      alert('Загаданное число больше');
      getResult();
    } else if (userNumber === number) {
      alert('Поздравляю, Вы угадали!!!');
    } else if (userInput == null) {
      alert('Игра окончена');
    }
    return;
  }
}

function game() {
  number = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  getResult();
  return;
}

game();