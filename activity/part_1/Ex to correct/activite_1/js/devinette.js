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


var saisie = Number(prompt("Entrez un nombre entre 1 et 100")); //le joueur saisit un nombre
var nbTentative = 1; // Nombre de tentatives (1ere saisie : 1ere tentative)

while ((saisie !== solution) && (nbTentative < 6)) { //Tant que la saisie est différente de la solution et ce jusqu'à 6 fois
    if (saisie > solution) { // Si la saisie est plus grande que la solution, ce message s'affiche
        console.log(saisie + " est trop grand");
    } else if (saisie < solution) { // Si la saisie est plus petite que la solution, ce message s'affiche
        console.log(saisie + " est trop petit");
        nbTentative++; //Le nombre de tentatives de l'utilisateur augmente
    }
    saisie = Number(prompt("Réessayez ! Entrez un nombre entre 1 et 100")); //L'utilisateur peut réessayer et saisir un nouveau nombre
}
    
if (saisie === solution) { //Si la saisie est égale à la solution, ce message s'affiche
    console.log("Bravo ! La solution était " + solution + ", vous avez trouvé en " + nbTentative + " essai(s) !");
} else if (nbTentative = 6) { //Si le nombre de tentatives est égal à 6, ces messages s'affichent
    console.log(saisie + " est trop petit")
    console.log("Perdu... La solution était " + solution);
}