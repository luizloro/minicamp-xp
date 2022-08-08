var state = { board: [], currentGame: [], savedGame: [] };

function start() {
  createBoard();
  newGame();

  console.log(state.board);
}

function createBoard() {
  state.board = [];

  for (var i = 1; i <= 60; i++) {
    state.board.push(i);
  }
}

function newGame() {
  resetGame();
  render();
}

function render() {
  renderBoard();
}

function renderBoard() {
  var divBoard = document.querySelector('#megasena-board');
  divBoard.innerHTML = '';

  var ulNumber = document.createElement('ul');

  for (var i = 0; i < state.board.length; i++) {
    var currentNumber = state.board[i];

    var liNumber = document.createElement('li');
    liNumber.textContent = currentNumber;

    liNumber.addEventListener('click', handleNumberClick);

    ulNumber.appendChild(liNumber);
  }

  divBoard.appendChild(ulNumber);
}

function handleNumberClick(event) {
  var value = Number(event.currentTarget.textContent);

  if (isNumberInGame(value)) {
    removeNumberFromGame(value);
  }else{
    addNumberToGame(value);
  }
  
  console.log(state.currentGame);
}

function addNumberToGame(numberToAdd) {
  if (numberToAdd < 1 || numberToAdd > 60) {
    console.log('Número invalido', numberToAdd);
    return;
  }

  if (state.currentGame.length >= 6) {
    console.log('O jogo já está completo.');
    return;
  }

  if (isNumberInGame(numberToAdd)) {
    console.error('Este número já está no jogo.', numberToAdd);
    return;
  }
  state.currentGame.push(numberToAdd);
}

function removeNumberFromGame(numberToRemove) {
  if (numberToRemove < 1 || numberToRemove > 60) {
    console.log('Número invalido', numberToRemove);
    return;
  }

  var nemGame = [];

  for (var i = 0; 1 < state.currentGame.length; i++) {
    var currentNumber = state.currentGame[i];

    if (currentNumber === numberToRemove) {
      continue;
    }

    nemGame.push(currentNumber);
  }

  state.currentGame = nemGame;
}

function isNumberInGame(numbeToCheck) {
  return state.currentGame.includes(numbeToCheck);
}

function saveGame() {
  if (!isGameComplete()) {
    console.error('O jogo não está completo!');
    return;
  }

  state.savedGame.push(state.currentGame);
}

function isGameComplete() {
  return state.currentGame.length == 6;
}

function resetGame() {
  state.currentGame = [];
}

start();
