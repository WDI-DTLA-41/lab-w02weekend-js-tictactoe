console.log('linked!')

// Players
var PlayerX = 'X';
var PlayerO = 'O';

var previousPlayer;
var currentPlayer = PlayerX;

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
// Get all the Cells
$Cells = document.querySelectorAll('td')

$table.addEventListener('click', makePlay);
