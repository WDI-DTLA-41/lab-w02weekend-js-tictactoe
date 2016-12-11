console.log('hello');

var $board = document.querySelector('#gameboard');
var $cell = document.querySelector('.cell');
var previousTurn = 'o';

var board = [0, 0, 0, 0, 0, 0, 0, 0, 0];

var gamePlay = function(event) {
  var cellSelected = event.target.getAttribute('data-cell');
  for (var i=0; i<board.length; i++) {
    if (i == cellSelected && board[i] == 0) {
      if (previousTurn === 'o') {
        board[i] = "playerX";
        event.target.innerHTML = 'x';
        previousTurn = 'x';
      } else {
        board[i] = "playerO";
        event.target.innerHTML = 'o';
        previousTurn = 'o';
      }
    }
  }
  checkScore('playerX');
  checkScore('playerO');
  console.log(board);
}

var checkScore = function(player) {
  //check horizontal match
  for (var i = 0; i < 9; i += 3) {
      if (board[i] === player && board[i + 1] === player && board[i + 2] === player) {
        console.log(player + ' won');
    }
  }
  //check vertical match
  for (var i = 0; i < 9; i += 3) {
    if (board[i] === player && board[i + 3] === player && board[i + 6] === player) {
      console.log(player + ' won');
    }
  }
  // check left-right diagonal match
  if (board[0] === player && board[4] === player && board[8] === player) {
    console.log(player + ' won');
  }
  // check right-left diagonal match
  if (board[2] === player && board[4] === player && board[6] === player) {
    console.log(player + ' won');
  }
}

$board.addEventListener('click', gamePlay);



