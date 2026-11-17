// Google Apps Script - reçoit le score du quiz, l'enregistre dans une feuille et l'envoie par email.
const TEACHER_EMAIL = "alif.chebbi@isbst.uma.tn";

function doPost(e) {
  const d = JSON.parse(e.postData.contents);
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Date", "Nom Prénom", "Score", "Total", "Note /20", "Durée (s)", "Détail"]);
  }
  sheet.appendRow([d.date, d.nom_prenom, d.score, d.total, d.note20, d.duree_s, d.detail]);
  MailApp.sendEmail({
    to: TEACHER_EMAIL,
    subject: "Quiz métagénomique M2 - " + d.nom_prenom + " - " + d.score + "/" + d.total,
    body: "Étudiant : " + d.nom_prenom + "\nScore : " + d.score + "/" + d.total +
          " (" + d.note20 + "/20)\nDurée : " + d.duree_s + " s\nDate : " + d.date +
          "\nDétail : " + d.detail
  });
  return ContentService.createTextOutput("ok");
}
