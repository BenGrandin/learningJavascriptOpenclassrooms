var Enemy = Object.create(Char)

// Create an Enenmy
Enemy.initEnemy = function(name, health, strength, race, value){
  this.initChar(name, health, strength);
  this.race=race;
  this.value=value;
};
