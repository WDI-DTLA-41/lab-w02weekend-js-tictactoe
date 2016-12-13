// console.log('ds');
var squares = document.querySelectorAll('.square');

var board = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
    ];

var players = [
      {
        name:"x"
      },
      {
        name:"o"
      }

    ];

var currentPlayer = players[0];


var nextTurn = function() {
  // change who currentPLayer points at
  if(currentPlayer.name ==='x') {
    currentPlayer = players[1];
  }else {
    currentPlayer = players[0];

  }
}

var handleClick = function(evt) {
  // console.log(evt.target, this);
  var position = this.dataset;
  console.log(board[position.row][position.col]);
  board[position.row] [position.col] = currentPlayer.name;
  nextTurn();

var renderBoard = function() {
  var html = '';
  for (var i=0; i < board.length; i++) {
    html += '<div class="row">'
    for(var j = 0; j < board[i].length; j++){
      html += '<div class="square" data-row="' + i + '"data-col=" + j + '">' + board[i][j]

    }
      html+='</div>'
  }
  document.querySelector(.board).innerHML = html;
}
}

  for(var i=0; i < '.squares'.length;i++) {
    // need help
    squares[i].addEventListener('click', handleClick)
  }
