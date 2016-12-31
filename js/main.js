var board = document.querySelector('.board');
var button = document.querySelector('button');

for (i = 0; i < 9; i++){
  var boxes = document.createElement('div');
  board.appendChild(boxes);
  boxes.classList = 'boxes';
  boxes.addEventListener('click', changeX);
}

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

function reset(evt){
  console.log('reset clicked');
  var boxes = document.querySelectorAll('.boxes');
  for (var i = 0; i < 9; i++){
    boxes[i].textContent = '';
  }
}

button.addEventListener('click', reset);

