function main() {
  var file = findFileByName("Setting Up Git Modules");

  var doc = DocumentApp.openById(file.getId());

  var activeSection = doc.getActiveSection();


  var text = activeSection.getText();

  var newDocument = DriveApp.createFile("markdown-test.md", text, MimeType.PLAIN_TEXT);
  
  // With timestamp
  var newDocument = DriveApp.createFile("markdown-test-"+getTimeStamp()+".md", text, MimeType.PLAIN_TEXT);

  // Logger.log(text);
}
