const startGame = function(){
  generateTable();
  fillBoard();
  let words = getWords();
  generateWordTable(words);
  let word = getWord(words);
  let game = new Game(word);
}

const getWord = function(words){
  let word = words[0];
  words.shift();
  return word;
}
