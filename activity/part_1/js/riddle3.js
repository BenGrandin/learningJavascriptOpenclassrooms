var nombre = Number(prompt("Entrez un nombre :"));
var tentative = 0;

while((nombre !== solution) && (tentative < 6)){
  if (nombre > solution)
    console.log(nombre + " est trop grand");
  else (nombre < solution)
    console.log(nombre + " est trop petit");
  tentative++;
  var nombre = Number(prompt("Entrez un nombre:"));
}

if(nombre == solution)
  console.log("Bravo ! La solution est " + solution);
else
  console.log("Vous avez perdu!");
