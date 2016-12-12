console.log('...three in a row');

// global variables for querySelectors
var allBoxes = document.querySelectorAll('.box');
var playerOne = document.querySelector('#playerOne');
var playerTwo = document.querySelector('#playerTwo');
var gameboard = document.querySelector('#gameboard');
var resetBtn = document.querySelector('#reset');


// handle for when player button is clicked
var handlePlayerOne = function(evt) {
  gameboard.addEventListener('click', handleX);
}

var handlePlayerTwo = function(evt) {
  gameboard.addEventListener('click', handleO);
}

// handle to create either X or O on the board
var handleX = function(evt) {
  if (evt.target.textContent = '') {
    evt.target.textContent = 'X';
  }
  winConditionX();
  gameboard.removeEventListener('click', handleX);
}

var handleO = function(evt) {
  if (evt.target.textContent = ' ') {
    evt.target.textContent = 'O';
  }
  winConditionO();
  gameboard.removeEventListener('click', handleO);
}

// handle the reset of the board
var handleReset = function() {
  for(var i = 0; i < allBoxes.length; i++) {
  allBoxes[i].textContent = '';
  }
}

var winConditionX = function() {
  if ((((allBoxes[0].textContent) && (allBoxes[1].textContent) === 'X') && ((allBoxes[2].textContent) === 'X')) ||
    (((allBoxes[3].textContent) && (allBoxes[4].textContent) === 'X') && ((allBoxes[5].textContent) === 'X')) ||
    (((allBoxes[6].textContent) && (allBoxes[7].textContent) === 'X') && ((allBoxes[8].textContent) === 'X'))) {
      return console.log("Player One Wins!");
  } else if
    ((((allBoxes[0].textContent) && (allBoxes[3].textContent) === 'X') && ((allBoxes[6].textContent) === 'X')) ||
    (((allBoxes[1].textContent) && (allBoxes[4].textContent) === 'X') && ((allBoxes[7].textContent) === 'X')) ||
    (((allBoxes[2].textContent) && (allBoxes[5].textContent) === 'X') && ((allBoxes[8].textContent) === 'X'))) {
      return console.log("Player One Wins!");
  } else if
    ((((allBoxes[0].textContent) && (allBoxes[4].textContent) === 'X') && ((allBoxes[8].textContent) === 'X')) ||
    (((allBoxes[2].textContent) && (allBoxes[4].textContent) === 'X') && ((allBoxes[2].textContent) === 'X')))  {
      return console.log("Player One Wins!");
  }
};

var winConditionO = function() {
  if ((((allBoxes[0].textContent) && (allBoxes[1].textContent) === 'X') && ((allBoxes[2].textContent) === 'X')) ||
    (((allBoxes[3].textContent) && (allBoxes[4].textContent) === 'X') && ((allBoxes[5].textContent) === 'X')) ||
    (((allBoxes[6].textContent) && (allBoxes[7].textContent) === 'X') && ((allBoxes[8].textContent) === 'X'))) {
      return console.log("Player Two Wins!");
  } else if
    ((((allBoxes[0].textContent) && (allBoxes[3].textContent) === 'X') && ((allBoxes[6].textContent) === 'X')) ||
    (((allBoxes[1].textContent) && (allBoxes[4].textContent) === 'X') && ((allBoxes[7].textContent) === 'X')) ||
    (((allBoxes[2].textContent) && (allBoxes[5].textContent) === 'X') && ((allBoxes[8].textContent) === 'X'))) {
      return console.log("Player Two Wins!");
  } else if
    ((((allBoxes[0].textContent) && (allBoxes[4].textContent) === 'X') && ((allBoxes[8].textContent) === 'X')) ||
    (((allBoxes[2].textContent) && (allBoxes[4].textContent) === 'X') && ((allBoxes[2].textContent) === 'X')))  {
      return console.log("Player Two Wins!");
  }
};


















// event listeners for players
playerOne.addEventListener('click', handlePlayerOne);
playerTwo.addEventListener('click', handlePlayerTwo);
resetBtn.addEventListener('click', handleReset);




