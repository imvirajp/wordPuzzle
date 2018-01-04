const Player = function(){
  this.currentLetter = '';
  this.currentWord = '';
}

Player.prototype.getCurrentLetter = function(){
  return this.currentLetter;
}

Player.prototype.addLetter = function(letter){
  this.currentLetter = letter;
}

Player.prototype.getCurrentWord = function(){
  return this.currentWord;
}

Player.prototype.addWord = function(word){
  this.currentWord = word;
}
