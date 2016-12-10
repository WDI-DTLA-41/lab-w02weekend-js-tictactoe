console.log('linked!')

// Players
var PlayerX = 'X';
var PlayerO = 'O';

// Event Listener for Table Cells
// apply to table itself
var makePlay = function (event) {
  if (event.target === event.currentTarget) {
    event.stopPropagation();
    return false;
  };

  console.log(event.target.id);
};

// Get Table
$table = document.querySelector('table');
// Get all the Cells
$Cells = document.querySelectorAll('td')

$table.addEventListener('click', makePlay);
