var $board = document.querySelector('.board');
var currentPlayer;
var board;

var players = [
  {
    name: 'Xavier',
    token: 'X'

  },
  {
    name: 'Oliver',
    token: 'O'
  }
];

var isOccupied = function(row, col) {
  return board[row][col];
}

var markPosition = function(row, col) {
  board[row][col] = currentPlayer.token;
};

var nextPlayer = function(){
  currentPlayer = currentPlayer === players[1] ? players[0] : players[1];
};

var handleClick = function(evt) {
  var row = this.dataset.row;
  var col = this.dataset.col;
  if ( isOccupied(row, col) ) { return false }
  markPosition(row, col);
  this.textContent = currentPlayer.token;
  nextPlayer();
};

var addEventListeners = function() {
  var $squares = document.querySelectorAll('.square');
  $squares.forEach(function($square){
    $square.addEventListener('click', handleClick);
  });
}

var resetBoard = function() {
  var rows = 3;
  var cols = 3;
  board = [];
  for (var i = 0; i < rows; i++) {
    board[i] = [];
    for (var j = 0; j < cols; j++) {
      board[i][j] = '';
    }
  }
  return board;
}

var checkForWin = function(){
  return checkRowWin(0) ||
  checkRowWin(1) ||
  checkRowWin(2) ||
  checkColWin(0) ||
  checkColWin(1) ||
  checkColWin(2) ||
  checkLeftDiagWin() ||
  checkRightDiagWin();
};

var checkRowWin = function(n) {
  return board[n][0] === board[n][1] && board[n][1] == board[n][2];
}

var checkColWin = function(n) {
  return board[0][n] === board[1][n] && board[1][n] === board[2][n];
}

var checkLeftDiagWin = function() {
  return board[0][0] === board[1][1] && board[1][1] === board[2][2];
}

var checkRightDiagWin = function() {
  return board[2][0] === board[1][1] && board[1][1] === board[0][2];
}

var render = function(){
  $board.innerHTML = '';
  board.forEach(function(row, i){
    $board.innerHTML += '<div class="row">';
    row.forEach(function(col, j) {
      $board.innerHTML += '<div class="square" data-row="' + i + '" data-col="' + j + '">' + col + '</div>'
    })
    $board.innerHTML += '</div>';
  });
  return $board;
};

var startGame = function() {
  resetBoard();
  render();
  addEventListeners();
  nextPlayer();
}

startGame();
