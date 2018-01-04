let words = ['more', 'coat', 'want', 'ford', 'copy', 'soon', 'grew', 'duty', 'hand', 'rank'];

const startGame = function(game) {
  hasPressedValidLetter(game);
}

const loadGame = function() {
  generateTable();
  fillBoard();
  generateWordTable();
  fillWordTable(words);
  let startButton = document.getElementById('startButton');
  let game = new Game(words);
  startButton.onclick = startGame(game);
}

window.onload = loadGame;
