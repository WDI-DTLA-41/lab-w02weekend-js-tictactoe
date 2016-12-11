console.log('linked!')

// Players
var PlayerX = 1; // X will equal 1
var PlayerO = 2; // O will equal 2

var previousPlayer;
var currentPlayer = PlayerX;
var turnsLeft = 9;

// Get Table, Table Cells and Reset Button
$table = document.querySelector('table');
$tableCells = document.querySelectorAll('td');
$resetBtn = document.querySelector('#resetButton');
$playerUp = document.querySelector('#playerUp');

// Uses zero to represent cell
var board = [0, 0, 0, 0, 0, 0, 0, 0, 0];


// Function for making play
var makePlay = function (event) {
  if (event.target === event.currentTarget) {
    event.stopPropagation();
    return false;
  };
  if ( board[event.target.id] === 0 ) {
    playerSelection();
    renderGame();
    determineWinner();
  };

};

// Determine Player
var playerSelection = function () {
  if ( currentPlayer === PlayerX ) {
      board[event.target.id] = 1;
      previousPlayer = PlayerX;
      currentPlayer = PlayerO;
      playerUp.textContent = 'O';
      turnsLeft = turnsLeft - 1;
      return true;
    }

    if ( currentPlayer === PlayerO ) {
      board[event.target.id] = 2;
      previousPlayer = PlayerO;
      currentPlayer = PlayerX;
      playerUp.textContent = 'X';
      turnsLeft = turnsLeft - 1;
      return true;
    };

};


// render Gameboard
var renderGame = function () {
  for (var i = 0; i < board.length; i++) {
    if ( board[i] === 0 ) {
    } else if ( board[i] === 1 ) {
      document.getElementById(i).innerHTML = 'X';
      document.getElementById(i).classList.add('X');
    } else {
      document.getElementById(i).innerHTML = 'O';
      document.getElementById(i).classList.add('O');
    };
  };
};


// Calculate Winner
// array of winning combinations
var winningCombinations = [[0, 1, 2],[3, 4, 5],[6, 7, 8],
           [0, 4, 8],[6, 4, 2],[2, 5, 8],[0, 3, 6]];

// Works
var determineWinner = function() {
  if (board[0] === 1 && board[1] === 1 && board[2] === 1 || board[3] === 1 && board[4] === 1 && board[5] === 1 || board[6] === 1 && board[7] === 1 && board[8] === 1
    || board[0] === 1 && board[4] === 1 && board[8] === 1 || board[6] === 1 && board[4] === 1 && board[2] === 1 || board[2] === 1 && board[5] === 1 && board[8] === 1 || board[0] === 1 && board[3] === 1 && board[6] === 1 ) {
    console.log ('Player X Wins');
    alert('Player X Wins!')
  } else if (board[0] === 2 && board[1] === 2 && board[2] === 2 || board[3] === 2 && board[4] === 2 && board[5] === 2 || board[6] === 2 && board[7] === 2 && board[8] === 2
    || board[0] === 2 && board[4] === 2 && board[8] === 2 || board[6] === 2 && board[4] === 2 && board[2] === 2 || board[2] === 2 && board[5] === 2 && board[8] === 2 || board[0] === 2 && board[3] === 2 && board[6] === 2 ) {
    console.log ('Player O Wins');
    alert('Player O Wins!');
  };

  if (turnsLeft === 0) {
    if (board[0] === 1 && board[1] === 1 && board[2] === 1 || board[3] === 1 && board[4] === 1 && board[5] === 1 || board[6] === 1 && board[7] === 1 && board[8] === 1
    || board[0] === 1 && board[4] === 1 && board[8] === 1 || board[6] === 1 && board[4] === 1 && board[2] === 1 || board[2] === 1 && board[5] === 1 && board[8] === 1 || board[0] === 1 && board[3] === 1 && board[6] === 1 ) {
    console.log ('Player X Wins');
    alert('Player X Wins!')
  } else if (board[0] === 2 && board[1] === 2 && board[2] === 2 || board[3] === 2 && board[4] === 2 && board[5] === 2 || board[6] === 2 && board[7] === 2 && board[8] === 2
    || board[0] === 2 && board[4] === 2 && board[8] === 2 || board[6] === 2 && board[4] === 2 && board[2] === 2 || board[2] === 2 && board[5] === 2 && board[8] === 2 || board[0] === 2 && board[3] === 2 && board[6] === 2 ) {
    console.log ('Player O Wins');
    alert('Player O Wins!');
  } else {
    alert("Cats. You're both losers");
  };
 }

};








// Reset Game Board
// Reset function
var resetGame = function () {
  for (var i = 0; i < board.length; i++) {
    board[i] = 0;
    $tableCells[i].innerHTML = null;
    if ($tableCells[i].classList.contains('X')) {
      $tableCells[i].classList.remove('X');
    } else if ($tableCells[i].classList.contains('O')) {
      $tableCells[i].classList.remove('O');
    };
  };
  playerUp.textContent = null;
  turnsLeft = 9;
  console.log('reset game board');

};

// Add Event Listeners
$table.addEventListener('click', makePlay);
$resetBtn.addEventListener('click', resetGame);
