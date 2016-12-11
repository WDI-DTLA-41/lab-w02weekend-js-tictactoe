console.log('linked!')

// Players
var PlayerX = 'X';
var PlayerO = 'O';

var previousPlayer;
var currentPlayer = PlayerX;

$tableCells = document.querySelectorAll('td');

// Event Listener for Table Cells
// apply to table itself
var makePlay = function (event) {
  if (event.target === event.currentTarget) {
    event.stopPropagation();
    return false;
  };

  if (event.target.innerHTML === "") {
    event.target.innerHTML = currentPlayer;
    previousPlayer = currentPlayer;
    currentPlayer = PlayerO;
    console.log(previousPlayer);
    console.log(currentPlayer);

  };
};

// Get Table
$table = document.querySelector('table');
$table.addEventListener('click', makePlay);


// Reset Game Board
// Add Event Listener to Reset Button
$resetBtn = document.querySelector('#resetButton')

// Reset function

var resetGame = function () {
  for (var i = 0; i <$tableCells.length; i++) {
    $tableCells[i].innerHTML = "";
  }
  console.log('reset game board');

}

// Add Event Listener to Reset Button
$resetBtn.addEventListener('click', resetGame);
