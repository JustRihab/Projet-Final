const apprenants = require("./data.js");
const { normaliserNom,
    validerResultat, 
    ajouterApprenant, 
    enregistrerResultat, 
    rechercherApprenant,
    calculerProgression,
    classerApprenant,
    filtrerParNiveau, 
    trierParProgression,
} = require("./progression.js");
/*console.log("Liste des apprenants :");
console.log(apprenants);
console.log("Nom normalisé :", normaliserNom("   Sara   Dev   "));
console.log("Nom normalisé :", normaliserNom("YASSINE CODE"));
console.log(validerResultat({ jour: 3, exercicesTermines: 10, totalExercices: 20 }));
console.log(validerResultat({ jour: 9, exercicesTermines: 5, totalExercices: 10 }));
const result = ajouterApprenant(apprenants, "Alae Dev", "Casablanca");
console.log(result.message);
console.log("Après l'ajout de l'apprenant :", apprenants);
console.log(enregistrerResultat(apprenants[0], { jour: 4, exercicesTermines: 5, totalExercices: 10, challengeTermine: false }));
console.log(enregistrerResultat(apprenants[0], { jour: 3, exercicesTermines: 15, totalExercices: 20, challengeTermine: true }));
console.log(rechercherApprenant(apprenants, "amal yamik")); 
console.log(rechercherApprenant(apprenants, "YASSINE CODE"));
console.log(calculerProgression(apprenants[0]));
console.log(calculerProgression(apprenants[1]));
console.log(apprenants[0].nomComplet, "=>", classerApprenant(apprenants[0]));
console.log(apprenants[1].nomComplet, "=>", classerApprenant(apprenants[1]));
console.log(filtrerParNiveau(apprenants, "À renforcer"));
console.log(filtrerParNiveau(apprenants, "En progression")); 
console.log(filtrerParNiveau(apprenants, "Solide"));         
console.log("Tri décroissant :", trierParProgression(apprenants, "desc"));*/



  
