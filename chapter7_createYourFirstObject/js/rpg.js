var char ={ //char for character
  name:"SoulShine",
  health:150,
  strength:25,

  // Return char description
  describe: function () {
    description = this.name +" a "+this.health+" health and "+this.strength+" strength";
    return description ;
  },
};

console.log(char.describe());

console.log(char.name+" is hurt by an arrow and lost 20 hp") ;
char.health +=20;

console.log(char.name+" find a strength armlet win 10 hp") ;
char.strength += 10;

console.log(char.describe()+"\n "); // Backslash in order to air the text


/* Withtout the describe function

console.log(char.name+ " a "+char.health+ " hp and "+char.strength+ " strength");

console.log(char.name+" is hurt by an arrow") ;
char.health +=20;

console.log(char.name+" find a strength armlet") ;
chart.strength += 10;

console.log(char.name+ " a "+char.health+ " hp and "+char.strength+ " strength");
*/
