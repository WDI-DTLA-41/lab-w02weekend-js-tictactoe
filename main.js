var $board = document.querySelector('.board');
var $start = document.querySelector('#start');
var $scoreboard = document.querySelector('#scoreboard');

var currentPlayer;
var board;
var isPlaying;

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
  var el = evt.target;
  if (!isPlaying) { return false }
  if (!el.classList.contains('square')) return false;

  var row = el.dataset.row;
  var col = el.dataset.col;

  if ( isOccupied(row, col) ) { return false }
  markPosition(row, col);
  el.textContent = currentPlayer.token;
  if ( checkForWin() ) {
    handleWin();
  } else {
    nextPlayer();
  }
};

var handleWin = function() {
  isPlaying = false;
  renderWin();
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
  return (
    checkRowWin(0) ||
    checkRowWin(1) ||
    checkRowWin(2) ||
    checkColWin(0) ||
    checkColWin(1) ||
    checkColWin(2) ||
    checkLeftDiagWin() ||
    checkRightDiagWin()
  );
};

var checkRowWin = function(n) {
  if (!board[n][0]) {return false} // check empty strings
  return board[n][0] === board[n][1] && board[n][1] == board[n][2];
}

var checkColWin = function(n) {
  if (!board[0][n]) {return false} // check empty strings
  return board[0][n] === board[1][n] && board[1][n] === board[2][n];
}

var checkLeftDiagWin = function() {
  if (!board[0][0]) { return false } // check empties
  return board[0][0] === board[1][1] && board[1][1] === board[2][2];
}

var checkRightDiagWin = function() {
  if (!board[2][0]) { return false } // check empties
  return ;
}

var render = function(){
  $board.innerHTML = renderBoard();
};

var renderBoard = function() {
  var html = '';
  board.forEach(function(row, i){
    html += '<div class="row">';
    row.forEach(function(col, j) {
      html += '<div class="square" data-row="' + i + '" data-col="' + j + '">' + col + '</div>'
    })
    html += '</div>';
  });
  return html;
}

var renderWin = function(){
  $scoreboard.textContent = currentPlayer.token + ' wins!';
}

var startGame = function() {
  $scoreboard.textContent = '';
  isPlaying = true;
  resetBoard();
  render();
  nextPlayer();
}


$board.addEventListener('click', handleClick);
$start.addEventListener('click', startGame);
