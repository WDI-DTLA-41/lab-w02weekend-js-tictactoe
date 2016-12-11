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
  if (evt.target.textContent = 0);
    evt.target.textContent = 'X';
  gameboard.removeEventListener('click', handleX);
}

var handleO = function(evt) {
  if (evt.target.textContent = 0);
    evt.target.textContent = 'O';
  gameboard.removeEventListener('click', handleO);
}

var handleReset = function() {
  for(var i = 0; i < allBoxes.length; i++) {
  allBoxes[i].textContent = '';
  }
}




















// event listeners for players
playerOne.addEventListener('click', handlePlayerOne);
playerTwo.addEventListener('click', handlePlayerTwo);
resetBtn.addEventListener('click', handleReset);




