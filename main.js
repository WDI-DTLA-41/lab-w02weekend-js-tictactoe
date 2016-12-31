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
var reset = document.querySelector('#reset');


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
// check that content in square is a number / available space
  var isNum = parseFloat(evt.target.textContent);
  if(Number.isInteger(isNum)===true ) {
    // if the space is a number, not taken the next player goes
    nextTurn();
    // gives the player their mark on the board
    board[position.row] [position.col] = currentPlayer.name;
    // updates board display
    renderBoard();
  }
  console.log(board[position.row][position.col]);


}
var renderBoard = function() {
  var html = '';
  for (var i=0; i < board.length; i++) {
    html += '<div class="row">'
    for(var j = 0; j < board[i].length; j++){
       html += '<div class="square" data-row="' + i + '"data-col="' + j + '">' + board[i][j] + '</div>';
    }
      html+='</div>'
  }
   document.querySelector('.board').innerHTML = html;
   addEventListeners();
}

var resetBoard = function() {
    board = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
    ];

    var html = '';
    for (var i=0; i < board.length; i++) {
    html += '<div class="row">'
    for(var j = 0; j < board[i].length; j++){
       html += '<div class="square" data-row="' + i + '"data-col="' + j + '">' + board[i][j] + '</div>';
    }
      html+='</div>'
  }
   document.querySelector('.board').innerHTML = html;
   currentPlayer = players[1];
   addEventListeners();
   }

  // for(var i=0; i < '.squares'.length;i++) {
  //   // need help
  //   squares[i].addEventListener('click', handleClick)
  // }

  var addEventListeners = function() {
    var $squares = document.querySelectorAll('.square');
    for(var i = 0; i < $squares.length; i++) {
      $squares[i].addEventListener('click', handleClick)
    }
  }

  renderBoard();

reset.addEventListener('click', resetBoard);
