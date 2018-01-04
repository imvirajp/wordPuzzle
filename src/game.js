const Game = function(word) {
  this.word = word;
  this.index = 0;
  this.player = new Player();
}

Game.prototype.getCurrentLetter = function() {
  return this.word[this.index];
}

Game.prototype.hasPressedCorrectLetter = function() {
  let playerCurrentLetter = this.player.getCurrentLetter();
  return playerCurrentLetter == this.getCurrentLetter();
}

Game.prototype.increaseIndex = function(){
  this.index++;
}

Game.prototype.addPlayerLetter = function(letter){
  this.player.addLetter(letter);
}
