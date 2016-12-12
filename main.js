var sq1 = document.querySelector('.sq1');
var sq2 = document.querySelector('.sq2');
var sq3 = document.querySelector('.sq3');
var sq4 = document.querySelector('.sq4');
var sq5 = document.querySelector('.sq5');
var sq6 = document.querySelector('.sq6');
var sq7 = document.querySelector('.sq7');
var sq8 = document.querySelector('.sq8');
var sq9 = document.querySelector('.sq9');


var clearSq = document.querySelectorAll('.sq');
var board = document.querySelector('.board');
var game = [];
var start = false;
var reset = document.querySelector('.reset');

board.addEventListener('click', function(e){
  if (start === false) {
    e.target.classList.add('x');
    start = true;
  } else if (start === true) {
    e.target.classList.add('o');
    start = false;
  }
});

board.addEventListener('click', function(){
  if ( sq1.classList.contains('x') && sq2.classList.contains('x') && sq3.classList.contains('x') ){
    alert('x wins!');
  } else if ( sq4.classList.contains('x') && sq5.classList.contains('x') && sq6.classList.contains('x') ){
    alert('x wins!');
  } else if ( sq7.classList.contains('x') && sq8.classList.contains('x') && sq9.classList.contains('x') ){
    alert('x wins!');
  } else if ( sq1.classList.contains('x') && sq4.classList.contains('x') && sq7.classList.contains('x') ){
    alert('x wins!');
  } else if ( sq2.classList.contains('x') && sq5.classList.contains('x') && sq8.classList.contains('x') ){
    alert('x wins!');
  } else if ( sq3.classList.contains('x') && sq6.classList.contains('x') && sq9.classList.contains('x') ){
    alert('x wins!');
  } else if ( sq1.classList.contains('x') && sq5.classList.contains('x') && sq9.classList.contains('x') ){
    alert('x wins!');
  } else if ( sq3.classList.contains('x') && sq5.classList.contains('x') && sq7.classList.contains('x') ){
    alert('x wins!');
  } else if ( sq1.classList.contains('o') && sq2.classList.contains('o') && sq3.classList.contains('o') ){
    alert('o wins!');
  } else if ( sq4.classList.contains('o') && sq5.classList.contains('o') && sq6.classList.contains('o') ){
    alert('o wins!');
  } else if ( sq7.classList.contains('o') && sq8.classList.contains('o') && sq9.classList.contains('o') ){
    alert('o wins!');
  } else if ( sq1.classList.contains('o') && sq4.classList.contains('o') && sq7.classList.contains('o') ){
    alert('o wins!');
  } else if ( sq2.classList.contains('o') && sq5.classList.contains('o') && sq8.classList.contains('o') ){
    alert('o wins!');
  } else if ( sq3.classList.contains('o') && sq6.classList.contains('o') && sq9.classList.contains('o') ){
    alert('o wins!');
  } else if ( sq1.classList.contains('o') && sq5.classList.contains('o') && sq9.classList.contains('o') ){
    alert('o wins!');
  } else if ( sq3.classList.contains('o') && sq5.classList.contains('o') && sq7.classList.contains('o') ){
    alert('o wins!');
  }
});

// reset.addEventListener('click', function(){
//   clearSq.classList.remove('x');
//   clearSq.classList.remove('o');
// })
