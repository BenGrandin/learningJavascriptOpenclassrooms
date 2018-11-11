var p1=Object.create(Player);         // Create player 1
p1.initPlayer("SoulShine", 150, 250);

var p2=Object.create(Player);         // Create player 2
p2.initPlayer("DarkDevil",130,30);

console.log("Welcome ! Here our heroes :");
console.log(p1.describe());
console.log(p2.describe());

var monster=Object.create(Enemy);     // Create a monster
monster.initEnemy("ZogZog", 40, 20, "orc", 10);

console.log("A new monster appears : it's a "+monster.race+" "+monster.name+" he have "
+monster.health+" hp and "+monster.strength+" strength \n ");

monster.attack(p1);
monster.attack(p2);

p1.fight(monster);
p2.fight(monster);

console.log(p1.describe());
console.log(p2.describe());
