var Char ={
  // Create a character
  initChar: function (name,health,strength) {
    this.name=name;
    this.health=health;
    this.strength=strength;
  },

  attack: function (target) {
    if(target.health>0){
      damage= this.strength;
      console.log(this.name+" attack "+target.name+" making him loose "+damage+" hp");
      target.health -= damage;

      if(target.health>0){
        console.log(target.name+" have "+target.health+" hp");
      }

      else {
        target.health=0;
        console.log(target.name+" is dead !");

      /*if  (protoype = player){ // Right function for xp
      console.log(this.name+ " kill "+enemy.name+" and win "+enemy.value+" xp \n ");
      this.xp+= enemy.value;
        }
      */
      }
    }

    else{
      console.log(this.name+ " can't attack "+target.name+", he's dead.");
    }
  }
}
