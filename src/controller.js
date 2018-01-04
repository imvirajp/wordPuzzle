const hasPressedCorrectWord = function(game){
  let board = document.getElementById('board');
  board.onclick = (event) => {
    let key = event.target.innerText;
    console.log(key);
    game.addPlayerLetter(key);
    hasPressedValidLetter(game);
  }
}

const hasPressedValidLetter = function(game){
  if(game.hasPressedCorrectLetter()) game.increaseIndex();
  else alert("you lost");
}
