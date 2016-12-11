
var resetGame = function(){
  for (var i = 0; i < td.length; i++){
    td[i].innerHTML = ''
    td[i].setAttribute('class','');
    td[i].setAttribute('dataType', '');
  }
  num = 0;
}

var playerTurn = function(){
  num++;
  if (num % 2 === 0){
    return playerO;
  } else if (num % 2 !== 0){
      return playerX;
  }
}

var gameFunc = function(){
  if (event.target.innerHTML === ''){
      var testTurn = playerTurn();
      if (playerX === testTurn){
        event.target.innerHTML = 'X'
        event.target.setAttribute('class','xValue');
        event.target.setAttribute('dataType', 'X');
        playerId.innerHTML = "Player's Turn: " + playerO;
      } else if (playerO === testTurn){
          event.target.innerHTML = 'O'
          event.target.setAttribute('class','oValue');
          event.target.setAttribute('dataType', 'O');
          playerId.innerHTML = "Player's Turn: " + playerX;
        }
  }
}

var createBoard = function(){
  for (var count = 0; count < 3; count++){
    var tr = document.createElement('tr');
    boardGame.appendChild(tr);
    for (var count_1 = 0; count_1 < 3; count_1++){
      var td = document.createElement('td');
      tr.appendChild(td);
    }
  }
}

var resetbtn = document.querySelector('button');
var boardGame = document.querySelector('#boardGame');
var playerX = 'Player X';
var playerO = 'Player O';
var num = 0;
var gameResults = [];

createBoard();
var td = document.querySelectorAll('td');
var playerId = document.querySelector('#playerTurn');
resetbtn.addEventListener('click', resetGame);
boardGame.addEventListener('click', gameFunc);



