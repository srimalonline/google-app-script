//this function will convert google docs files to md files
function convertToMarkdown(doc) {
  var activeSection = doc.getActiveSection();

  var text = activeSection.getText();

  return text;
}
