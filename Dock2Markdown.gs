//this function will convert google docs files to md files
function convertToMarkdown(doc) {
  var activeSection = doc.getActiveSection();

  var text = "";

  var total =activeSection.getNumChildren();

  for(var i = 0; i < total; i++){
    var section = activeSection.getChild(i);

    text += section.getText();
  }

  return text;
}
