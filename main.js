console.log('hello');

var $board = document.querySelector('#gameboard');
var $cell = document.querySelector('.cell');
var previousTurn = 'o';
var $gameStatus = document.querySelector('#game-status');
var $reset = document.querySelector('button');
var gameOver = null;
var board = [0, 0, 0, 0, 0, 0, 0, 0, 0];

$gameStatus.textContent = 'Turn: Player X';

var gamePlay = function(event) {
  var cellSelected = event.target.getAttribute('data-cell');
  for (var i=0; i<board.length; i++) {
    if (i == cellSelected && board[i] == 0) {
      if (previousTurn === 'o') {
        board[i] = "playerX";
        $gameStatus.textContent = "Turn: Player O";
        event.target.innerHTML = '<span>x</span>';
        checkScore('playerX');
        if (gameOver) {
          $gameStatus.textContent = "Player X Won!";
          $board.removeEventListener('click', gamePlay);
        }
        previousTurn = 'x';
        // checkForTie();
      } else {
        board[i] = "playerO";
        $gameStatus.textContent = "Turn: Player X";
        event.target.innerHTML = '<span>o</span>';
        checkScore('playerO');
        if (gameOver) {
          $gameStatus.textContent = "Player O Won!";
          $board.removeEventListener('click', gamePlay);
        }
        previousTurn = 'o';
      }
    }
  }

  console.log(board);
}

var checkScore = function(player) {
  //check horizontal match
  for (var i = 0; i < 9; i += 3) {
      if (board[i] === player && board[i + 1] === player && board[i + 2] === player) {
        gameOver = true;
    }
  }
  //check vertical match
  for (var i = 0; i < 9; i += 1) {
    if (board[i] === player && board[i + 3] === player && board[i + 6] === player) {
      gameOver = true;
    }
  }
  // check left-right diagonal match
  if (board[0] === player && board[4] === player && board[8] === player) {
    gameOver = true;
  }
  // check right-left diagonal match
  if (board[2] === player && board[4] === player && board[6] === player) {
    gameOver = true;
  }
  if (board.find(checkForEmptyCell) === undefined && gameOver === null) {
    $gameStatus.textContent = "it's a tie!";
  }
}

var reset = function(event) {
  for (var i = 0; i<$board.children.length; i++) {
    $board.children[i].innerHTML = '';
    board[i] = 0;
    previousTurn = 'o';
    $gameStatus.textContent = "Turn: Player X";
    $board.addEventListener('click', gamePlay);
    gameOver = false;
  }
}

function checkForEmptyCell(cell) {
  return cell === 0;
}

$board.addEventListener('click', gamePlay);
$reset.addEventListener('click', reset);




