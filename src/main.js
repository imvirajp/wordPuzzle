const startGame = function(){
  generateTable();
  fillBoard();
  let words = getWords();
  let game = new Game(words);
}
