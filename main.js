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

var nextTurn = function() {
  //change who currentPlayer points at;
  if (currentPlayer && currentPlayer.name === 'x') {
    currentPlayer = players[1];
  } else {
      currentPlayer = players[0];
  }
}

var handleClick = function(evt) {
  console.log(evt.target, this);
  var position = this.dataset;
  //console.log(position)
  // console.log( board[position.row][position.col] = currentPlayer.name);
  board[position.row][position.col] = currentPlayer.name;
  renderBoard();
  nextTurn();
}

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

var addEventListeners = function() {
var $squares = document.querySelectorAll('.square');
for (var i = 0; i < $squares.length; i++) {
  $squares[i].addEventListener('click', handleClick)
}

}


