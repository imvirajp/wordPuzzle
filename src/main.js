let words = ['more', 'coat', 'want', 'ford', 'copy', 'soon', 'grew', 'duty', 'hand', 'rank'];

const startGame = function(game) {
  hasPressedCorrectWord(game);
}

const loadGame = function() {
  generateTable();
  fillBoard();
  generateWordTable();
  fillWordTable(words);
  let startButton = document.getElementById('startButton');
  let game = new Game(getWord());
  startButton.onclick = startGame(game);
}

const getWord = function() {
  let word = words[0];
  words.shift();
  return word;
}

window.onload = loadGame;
