const hasPressedValidLetter = function(game) {
  let board = document.getElementById('board');
  board.onclick = (event) => {
    let key = event.target.innerText;
    game.addPlayerLetter(key);
    isValidLetter(game);
  }
}

const isValidLetter = function(game) {
  if (game.hasPressedCorrectLetter()) {
    game.addPressedKey();
    console.log(game.keyPressed);
    game.increaseLetterIndex();
  } else alert('you lost');
}

const isValidWord = function(game) {
  if (game.hasPressedCorrectWord()) game.increaseWordIndex();
  else alert('you lost');
}
