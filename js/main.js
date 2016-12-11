console.log('linked!')

// Players
var PlayerX = 1; // X will equal 1
var PlayerO = 2; // O will equal 2

var previousPlayer;
var currentPlayer = PlayerX;

$tableCells = document.querySelectorAll('td');

// Using zero to represent cell is available
var board = [0, 0, 0, 0, 0, 0, 0, 0, 0];



// Event Listener for Table Cells
// apply to table itself
var makePlay = function (event) {
  if (event.target === event.currentTarget) {
    event.stopPropagation();
    return false;
  };
  if ( board[event.target.id] === 0 ) {
    console.log('cell not yet played');
    playerSelection();
    renderGame();

  };

};




// Get Table
$table = document.querySelector('table');
$table.addEventListener('click', makePlay);


// Determine Player
var playerSelection = function () {
  if ( currentPlayer === PlayerX ) {
      console.log('current player is X');
      board[event.target.id] = 1;
      previousPlayer = PlayerX;
      currentPlayer = PlayerO;
      return true;
    }

    if ( currentPlayer === PlayerO ) {
      console.log('current player is O');
      board[event.target.id] = 2;
      previousPlayer = PlayerO;
      currentPlayer = PlayerX;
      return true;
    };

};


// render Gameboard
var renderGame = function () {
  for (var i = 0; i < board.length; i++) {
    if ( board[i] === 0 ) {
    } else if ( board[i] === 1 ) {
      document.getElementById(i).innerHTML = 'X';
    } else {document.getElementById(i).innerHTML = 'O';
    };
  };
};









// Reset Game Board
// Add Event Listener to Reset Button
$resetBtn = document.querySelector('#resetButton')

// Reset function

var resetGame = function () {
  for (var i = 0; i < $tableCells.length; i++) {
    $tableCells[i].innerHTML = "";
  }
  console.log('reset game board');

}

// Add Event Listener to Reset Button
$resetBtn.addEventListener('click', resetGame);
