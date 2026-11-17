# Quiz - Assemblage métagénomique (M2 Bioinformatique)

Quiz de 20 questions à choix unique (français). L'étudiant saisit son nom, répond, voit le score, et le résultat est envoyé par email à l'enseignant.

URL (GitHub Pages) : https://alifchebbi.github.io/metagenomics/quiz-assemblage/

## Mise en place de l'envoi par email (Google Apps Script)
1. Créer une Google Sheet vide, puis Extensions > Apps Script.
2. Coller le contenu de `apps-script/Code.gs`, enregistrer.
3. Déployer > Nouveau déploiement > Application Web. Exécuter en tant que : moi. Accès : tout le monde.
4. Autoriser les permissions (Sheet + Mail), copier l'URL du déploiement.
5. Coller cette URL dans `SCRIPT_URL` en haut du script de `index.html`, puis commit.

## Limite connue
Les réponses sont dans le code côté navigateur : suffisant pour un exercice de cours, pas pour un examen noté.
