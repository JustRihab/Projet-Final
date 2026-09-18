const apprenants = require("./data");

function normaliserNom(nom) {
    if (typeof nom !== "string") {
        return "";
    }
    let clean = nom.trim();
    clean = clean.replace(/\s+/g, " ");
    clean = clean.toLocaleLowerCase();
    return clean;
}

function validerResultat(result) {
    const {jour, exercicesTermines, totalExercices } = result;
    if (jour < 1 || jour > 7) {
        return {valide: false, message: "Jour invalide (doit être entre 1 et 7)."};
    }
    if (exercicesTermines > totalExercices) {
         return {valide: false, message: "exercices terminés ne doit pas dépasser le total proposé."};
    }
    return {valide: true, message: "Résultat valide."};
}

function ajouterApprenant(apprenants, nomComplet, ville) {
    for ( let i=0; i<apprenants.length; i++ ) {
        if (apprenants[i].nomComplet.toLocaleLowerCase() === nomComplet.toLocaleLowerCase()) {
            return "it's already existed !!";
        }
        let newId = 1;
        if (apprenants.length > 0) {
            newId = apprenants[apprenants.length - 1].id + 1; 
        }
        let newApprenant = {
            id : newId,
            nomComplet : nomComplet,
            ville : ville,
            resultats : []
        };
        apprenants.push(newApprenant);
        return "Apprenat ajouté avec succes."
    }
}

function enregistrerResultat(apprenant, resultat) {
    let validation = validerResultat(resultat);
    if (validation !== "Résultat valide.") {
        return validation;
    }
    let found = false;
    for (let i=0; i<apprenant.resultats.length; i++) {
        if (apprenant.resultats[i].jour === resultat.jour) {
            apprenant.resultats[i].exercicesTermines = resultat.exercicesTermines;
            apprenant.resultats[i].totalExercices = resultat.totalExercices;
            apprenant.resultats[i].challengeTermine = resultat.challengeTermine;
            found = true;
            break;
        }
    }
    if (!found) {
        apprenant.resultats.push(resultat);
    }
    return "Résultat enregistré avec succès.";
}

function rechercherApprenant(apprenants, nomRecherche) {
    let nomNormalise = normaliserNom(nomRecherche);
    for ( let i=0; i<apprenants.length; i++ ) {
        let apprenant = apprenants[i];
        if (normaliserNom(apprenant.nomComplet) === nomNormalise) {
            return apprenant;
        }
    }
    return "Apprenant non trouvé."
}

function calculerProgression(apprenant) {
    let totalExercices = 0;
    let exercicesTermines = 0;
    let challengesFinis = 0;
    for (let i=0; i<apprenant.resultats.length; i++) {
         let r = apprenant.resultats[i];
        totalExercices = totalExercices + r.totalExercices;
        exercicesTermines = exercicesTermines + r.exercicesTermines;
        if (r.challengeTermine === true) {
            challengesFinis = challengesFinis + 1;
        }
    }
    let pourcentage = 0;
    if (totalExercices > 0) {
        pourcentage = Math.round((exercicesTermines / totalExercices) * 100);
    }
    return pourcentage;
}

function classerApprenant(apprenant) {
    let pourcentage = calculerProgression(apprenant);
    if (pourcentage < 50) {
        return "À renforcer";
    } else if (pourcentage >= 50 && pourcentage <= 79) {
        return "En progression";
    } else if (pourcentage >= 80) {
        return "Solide";
    }
}

function filtrerParNiveau(apprenants, niveau ) {
    let resultat = [];
    for ( let i=0; i<apprenants.length; i++ ) {
        let apprenant = apprenants[i];
        let niveauApprenant = classerApprenant(apprenant);
        if (niveauApprenant === niveau) {
            resultat.push(apprenant);
        }
    }
    if (resultat.length === 0) {
        return "Aucun apprenant trouvé pour ce niveau.";
    }
    return resultat;    
}

function trierParProgression(apprenants) {
    let copie = [...apprenants];
    copie.sort(function(a, b) {
        let progressionA = calculerProgression(a);
        let progressionB = calculerProgression(b);
        return progressionB - progressionA;
    });
    return copie;
}

function afficherTableauDeBord(apprenants) {

}

module.exports = {
    normaliserNom,
    validerResultat,
    ajouterApprenant,
    enregistrerResultat,
    rechercherApprenant,
    calculerProgression,
    classerApprenant,
    filtrerParNiveau,
    trierParProgression,
    afficherTableauDeBord
};
