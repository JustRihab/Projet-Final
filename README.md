# 📘 SAS Progress Console

## 🎯 Objectif du projet
Projet final de synthèse du SAS JavaScript : gérer des apprenants fictifs, calculer leur progression et afficher un tableau de bord pédagogique dans la console.

---

## 🗂 Structure des données
Chaque apprenant est un objet avec :
- `id` : identifiant unique  
- `nomComplet` : nom normalisé  
- `ville` : information fictive  
- `resultats` : tableau des journées (jour, exercicesTermines, totalExercices, challengeTermine)

---

## ⚙️ Fonctionnalités
- Validation et nettoyage des données  
- Ajout / mise à jour d’un apprenant et de ses résultats  
- Recherche par identifiant ou nom (insensible à la casse)  
- Calcul de progression individuelle (pourcentage, challenges, journées)  
- Attribution d’un niveau :  
  - Solide ≥ 80 %  
  - En progression 50–79 %  
  - À renforcer < 50 %  
- Filtrage, tri (progression, alphabétique)  
- Tableau de bord global (moyenne du groupe, répartition des niveaux)

---

## 🖥️ Menu console
1. Tableau de bord  
2. Liste des apprenants  
3. Ajouter un apprenant  
4. Consulter par identifiant  
5. Ajouter / modifier une journée  
6. Rechercher par nom  
7. Filtrer par niveau  
8. Trier par progression  
9. Trier alphabétiquement  
0. Quitter  

---

## 📂 Organisation
projet-final/
│-- README.md
│-- src/
│   │-- data.js
│   │-- progression.js
│   │-- index.js
│-- tests/
│   └-- scenarios.js

---

## ▶️ Lancement
```bash
node projet-final/src/index.js
node projet-final/tests/scenarios.js

🧪 Tests

1.Ajouter un profil valide

2.Mettre à jour une journée

3.Calculer et rechercher (progression correcte, recherche insensible à la casse)

4.Cas invalide : identifiant déjà utilisé

5.Cas invalide : jour hors 1–7 ou exercices incohérents


📑 Conventions

+Calculs faits directement depuis les données

+Pourcentages arrondis à l’entier le plus proche

+Distinction entre journées absentes et challenges non terminés

+Moyenne du groupe calculée sur les journées renseignées

📤 Livrables

+Dépôt GitHub personnel avec projet-final

+README.md (ce document)

+Programme exécutable Node.js

+Historique Git clair et progressif

📌 Workflow Git (exemple de commits)

git commit -m "Initialisation du projet final : structure de base"
git commit -m "Ajout des apprenants fictifs dans data.js"
git commit -m "Implémentation de normaliserNom et validerResultat"
git commit -m "Ajout des fonctions ajouterApprenant et enregistrerResultat"
git commit -m "Implémentation de rechercherApprenant et calculerProgression"
git commit -m "Ajout des fonctions filtrerParNiveau et trierParProgression"
git commit -m "Création de afficherTableauDeBord avec indicateurs du groupe"
git commit -m "Ajout du menu principal dans index.js"
git commit -m "Ajout des tests dans scenarios.js (cas valides et invalides)"
git commit -m "Rédaction du README.md avec objectifs, structure et tests"
git commit -m "Corrections mineures et nettoyage du code avant remise"
