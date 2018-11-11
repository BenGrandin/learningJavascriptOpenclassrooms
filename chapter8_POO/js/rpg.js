var Char ={
  name:"",
  health:0,
  strength:0,
  xp:0,

  describe: function(){
    description = this.name+" a "+this.health+" hp, "+this.strength+" strength and "+this.xp+" xp";
    return description;
  }
}

var char1 = Object.create(Char);
char1.name="SoulShine";
char1.health=150;
char1.strength=25;

var char2 = Object.create(Char);
char2.name="DarkDevil";
char2.health=130;
char2.strength=35;

console.log(char1.describe());
console.log(char2.describe());
