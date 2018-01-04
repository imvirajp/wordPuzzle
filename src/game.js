const Game = function(words) {
  this.words = words;
  this.wordIndex = 0;
  this.letterIndex = 0;
  this.keyPressed = [];
  this.player = new Player();
}

Game.prototype.getCurrentLetter = function() {
  return this.words[this.wordIndex][this.letterIndex];
}

Game.prototype.increaseLetterIndex = function(){
  this.letterIndex++;
}

Game.prototype.addPlayerLetter = function(letter){
  this.player.addLetter(letter);
}

Game.prototype.hasPressedCorrectLetter = function() {
  let playerCurrentLetter = this.player.getCurrentLetter();
  return playerCurrentLetter == this.getCurrentLetter();
}

Game.prototype.getCurrentWord = function(){
  return this.words[this.wordIndex];
}

Game.prototype.increaseWordIndex = function(){
  this.wordIndex++;
}

Game.prototype.addPlayerWord = function(word){
  this.player.addWord(word);
}

Game.prototype.hasPressedCorrectWord = function(){
  let playerCurrentWord = this.player.getCurrentWord();
  return playerCurrentWord == this.getCurrentWord();
}

Game.prototype.addPressedKey = function(){
  this.keyPressed.push(this.getCurrentLetter());
}
