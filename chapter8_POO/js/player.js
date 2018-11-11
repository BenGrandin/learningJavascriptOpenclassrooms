var Player = Object.create(Char);

// Create a Player
Player.initPlayer= function(name, health, strength){
  this.initChar(name, health, strength);
  this.xp=0;
};

// Return player description
Player.describe= function(){
  description = this.name+" a "+this.health+" hp, "+this.strength+" strength and "+this.xp+" xp";
  return description;
};

Player.fight= function (enemy){
  this.attack(enemy);
  if(enemy.health > 0){ // Always give xp cause not include in the "if" of the attack funtion, wich suppose to tell if target is dead or not 
    console.log(this.name+ " kill "+enemy.name+" and win "+enemy.value+" xp \n ");
    this.xp+= enemy.value;
  }
};
