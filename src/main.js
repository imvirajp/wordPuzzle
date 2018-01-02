const startGame = function(){
  fillBoard();
  let words = getWords();
  fillWordTable(words);
  let word = getWord(words);
  let game = new Game(word);
}

const loadGame = function(){
  generateTable();
  generateWordTable();
  let startButton = document.getElementById('startButton');
  startButton.onclick = () => {startGame()};
}

const getWord = function(words){
  let word = words[0];
  words.shift();
  return word;
}
