var squares = [0,0,0,0,0,0,0,0,0];
var board = document.querySelector('.board');

for (i = 0; i < 9; i++){
  var boxes = document.createElement('div');
  board.appendChild(boxes);
  boxes.classList = 'boxes';
  boxes.addEventListener('click', changeX);
}


var table = document.querySelector('table');

function changeO(evt){
  console.log('clicked');
  evt.target.textContent='o';
}

function changeX(evt){
  var box = evt.target
  box.textContent='x';
  box.removeEventListener('click', changeX);
  box.addEventListener('click', changeO)
}



