/*
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

var a = 0;
max=prompt("Type the limit of try"); // Number of maximum tests
var number = Number(prompt("Type a number between 1 and 100 :"));

while((number !== solution) && (a < max)){
  if (number > solution)
    console.log(number + " is too high");
  else (number < solution)
    console.log(number + " is too small");
  a++;
  var number = Number(prompt("Type a number between 1 and 100 :"));
}

if(number == solution)
  console.log("Well play, u find the right number : "+a);
else
  console.log("Maximum try reach, u loose");
