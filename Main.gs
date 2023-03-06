function main() {
  var file = findFileByName("Setting Up Git Modules");

  var doc = DocumentApp.openById(file.getId());

  var activeSection = doc.getActiveSection();


  var text = activeSection.getText();

  var newFolder = getFolder("MarkdownGen", true);

  cleanUpFolders(newFolder);

  var subFolder = getFolder("Output-"+getTimeStamp(),true, newFolder);

  var newDocument = subFolder.createFile("markdown-test.md", text, MimeType.PLAIN_TEXT);

  // Logger.log(text);
}
