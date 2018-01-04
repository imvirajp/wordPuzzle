const Player = function(){
  this.currentLetter = "";
}

Player.prototype.getCurrentLetter = function(){
  return this.currentLetter;
}

Player.prototype.addLetter = function(letter){
  this.currentLetter = letter;
}
