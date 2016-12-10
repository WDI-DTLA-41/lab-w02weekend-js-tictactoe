console.log('hello');

var $board = document.querySelector('#gameboard');
var $cell = document.querySelector('.cell');
var currentTurn = 'o';

var cellState = [0, 0, 0, 0, 0, 0, 0, 0, 0];

$board.children;

var gamePlay = function(event) {
  var cellSelected = event.target.getAttribute('data-cell');
  for (var i=0; i<cellState.length; i++) {
    if (i == cellSelected && cellState[i] !==1) {
      cellState[i] = 1;
      if (currentTurn === 'o') {
        event.target.innerHTML = 'x';
        currentTurn = 'x';
      } else {
        event.target.innerHTML = 'o';
        currentTurn = 'o';
      }
    }
  }
  console.log(cellState);
}

$board.addEventListener('click', gamePlay);



//if
