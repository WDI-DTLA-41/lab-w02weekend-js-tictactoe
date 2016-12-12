

console.log('start this');

var boxClicked;
var play;
var playerX = 1;
var playerO = 2;
var board = [];
var bdLabels = 'abcdefghi';
var bdCell = null;

board = [
  0,1,2,
  3,4,5,
  6,7,8
];

//play();

function buildBoard() {
    var boardString = "=======" + "\n";
    for(var i=0; i < 9; i += 3) {
        boardString += (board[i] || boardLabels[i]) + "|";
        boardString += (board[i+1] || boardLabels[id+1]) + "|";
        boardString =+ (board[i+2] || boardLabels[id+2]) + "\n";
    }
    boardString += "=======";
    console.log(boardString);
    return board;
}


var player = 'x'
var nextTurn = function(){
  if (player === 'x') {
    player = 'o';
  } else {
    player = 'x';
  }
}
// var players = {
//     name: "Player 1",
//     symbol: "X",
//     name: "Player 2",
//     symbol: "O"
// };


// set up to see if player is X and O - how?






var selectBox = function(event) {

     console.log('clicked');
     if (this.textContent === "") {
        var index = this.dataset.id;
        board[index] = player;
       this.textContent = player;
       nextTurn();
    }

}

var checkWinner = function(){
  // check each row
  // check top row, middle row, bottom row
  // first col, 2nd, 3rd
  //diagonal left right
}

var checkTopRow = function(){
  // return true if 0 1 and 2 all equal same player 'x or o'
  return board[0] === board[1] && board[0] === board[2];
}

var checkMidRow = function() {
  return board[3] === board[4] && board[3] === board[5];

}


// set up event listener for entire grid
function addEventListeners() {

      var bdCell = document.querySelectorAll('.bdCell');
      for (var i = 0; i < bdCell.length; i++) {
            bdCell[i].addEventListener('click', selectBox);
            console.log(bdCell[i]);
      }
}

addEventListeners();















// func to see if player is X or O


// func to see if player matches 3 in a row - a, b, c or d, e, f or g, h, i


// func to see if player matches 3 in a col = a, d, g or b, e, h or c, f, i


// func to see if player matches 3 diagonally - c,e,g or a, e, i
