function main() {
  var file = findFileByName("Setting Up Git Modules");

  var doc = DocumentApp.openById(file.getId());

  var activeSection = doc.getActiveSection();


  var text = activeSection.getText();
  // var text = file.getBlob().getDataAsString();
  Logger.log(text);
}
