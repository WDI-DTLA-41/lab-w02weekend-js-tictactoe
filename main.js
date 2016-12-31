console.log('hi');
var board = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

var players = [
  {
    name: 'x'
  },
  {
    name: 'o'
  }
];

var currentPlayer;

//looks at what the current player is, and changes player to next player
var nextTurn = function() {
  //change who currentPlayer points at;
  if (currentPlayer && currentPlayer.name === 'x') {
    currentPlayer = players[1];
  } else {
      currentPlayer = players[0];
  }
}

var reset = document.querySelector('button');
//every time click on something, runs next turn and renderboard functions
var handleClick = function(evt) {
  console.log(evt.target, this);
  var position = this.dataset;
  var isNum = parseFloat(evt.target.textContent);
  if (Number.isInteger(isNum) === true) {
    console.log('true');
    nextTurn();
  board[position.row][position.col] = currentPlayer.name;
  renderBoard();
  }

}

//scans the board and renders it to show the most current array values of board
var renderBoard = function () {
  var html = '';
  for (var i = 0; i < board.length; i++) {
    html += '<div class="row">';
    for (var j = 0; j < board[i].length; j++) {
      html += '<div class="square" data-row="' + i + '" data-col="' + j + '">' + board[i][j] + '</div>';
    }
    html += '</div>'
  }
  document.querySelector('.board').innerHTML = html;
  addEventListeners();
}

var resetBoard = function() {
  board = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];
   var html = '';
  for (var i = 0; i < board.length; i++) {
    html += '<div class="row">';
    for (var j = 0; j < board[i].length; j++) {
      html += '<div class="square" data-row="' + i + '" data-col="' + j + '">' + board[i][j] + '</div>';
    }
    html += '</div>'
  }
  document.querySelector('.board').innerHTML = html;
  currentPlayer = players[1];
  addEventListeners();
}
//listens for any clicks on the squares in tic tac toe grid
var addEventListeners = function() {
reset.addEventListener('click', resetBoard);
var $squares = document.querySelectorAll('.square');
for (var i = 0; i < $squares.length; i++) {
  $squares[i].addEventListener('click', handleClick)
}

}
renderBoard();


