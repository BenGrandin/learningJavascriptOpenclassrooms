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

max=prompt("Type the limit of try"); // Number of maximum tests
 a=prompt("Type a number between 1 and 100 :");

for (i=0;i<max;i++) {

  if(a==solution){
    console.log("Well play, u find the right number : "+a);
    break;
  }

  if ((a<1)||(a>100)){
    console.log(a+" isn't between 1 and 100");
  }
  else if (a>solution) {
    console.log(a+" is too high");
  }
  else{
    console.log(a+" is too small");
  }
  a=prompt("Type a number between 1 and 100 :");

  if(i==max){
    console.log("Maximum try reach, u loose");
  }

}
