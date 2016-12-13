console.log('aloha!');

// query some elements that you will need to manipulate the DOM
var squares = document.querySelectorAll('td');
var btn = document.querySelector('button');

// var squares = [null, null, null, null, null, null, null, null, null];
console.log(squares);

// var turns = [];
console.log(turns);

// to volly between player turns, assign an index to each player
// for instance, evens vs odds
// if n % 2 === 0, player A turn
// if n % 2 !== 0, player B turn

for (var n = 0; i < 10; i ++) {
  if n % 2 === 0 {
    // player A turn
  } else {
    // player B turn
  }
};


// since we only have two players, we're tracking binary
// datasets.  set player 1 to 'false' and player 2 'true'
var playerA = 0 // assign falsey data to chosen square
// var playerAPick = squares.textContent = 'x'
var playerB = 1 // assign truthy data to chosen square
// var playerBPick = squares.textContent = 'o'

// if a player clicks a square, the square gets an attribute set
// in accordance with its value.

var aPick = function (){
  squares.textContent = 'x';
}

squares.addEventListener('click', aPick);


// possible winning combinations for tic-tac-toe
// to implement switch method on squares array

// abc = [0][1][2];
// def = [3][4][5];
// ghi = [6][7][8];
// adg = [0][3][6];
// beh = [1][4][7];
// cgi = [2][5][8];
// aei = [0][4][8];
// ceg = [2][4][6];

// each choice can be true or false. O = true, X = false.  if array is true
// (i.e.) if array[0]
var resetGame = function () {
  squares.innerHTML = "";
  btn.addEventListener("click", "resetGame");
}
