function main() {
  var file = findFileByName("Setting Up Git Modules");

  var doc = DocumentApp.openById(file.getId());

  var markdown = convertToMarkdown(doc);

  var newFolder = getFolder("MarkdownGen", true);

  cleanUpFolders(newFolder);

  var subFolder = getFolder("Output-"+getTimeStamp(),true, newFolder);

  var newDocument = subFolder.createFile("markdown-test.md", markdown, MimeType.PLAIN_TEXT);

  // Logger.log(text);
}
