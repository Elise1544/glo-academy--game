'use strict';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;
let number;

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function isNum(num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

function game() {
  number = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const TRY_AMOUNT = 10;
  let userTryAmount = 0;
  let userInput;

  function getResult() {
    let userNumber;
    if ((userTryAmount !== TRY_AMOUNT) && ((userInput != null) || (userNumber !== number))) {
      userInput = prompt('Угадай число от 1 до 100');
      userNumber = parseInt(userInput);
      if ((!isNum(userNumber)) && (userInput !== null)) {
        alert(`Введи число!`);
        getResult();
      } else if (userNumber > number) {
        userTryAmount++;
        alert(`Загаданное число меньше, осталось попыток ${TRY_AMOUNT - userTryAmount}`);
        getResult();
      } else if (userNumber < number) {
        userTryAmount++;
        alert(`Загаданное число больше, осталось попыток ${TRY_AMOUNT - userTryAmount}`);
        getResult();
      } else if (userNumber === number) {
        alert('Поздравляю, Вы угадали!!!');
      }
    }
  }

  getResult();
  let anotherGame;

  if (userTryAmount === TRY_AMOUNT) {
    anotherGame = confirm('Попытки закончились, хотите сыграть еще?');
  } else if (userInput == null) {
    alert('Игра окончена');
  } else {
    anotherGame = confirm('Хотели бы сыграть еще?');
  }
  if (anotherGame) {
    userTryAmount = 0;
    game();
  }
  return;
}

game();