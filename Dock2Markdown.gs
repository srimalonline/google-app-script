//this function will convert google docs files to md files
function convertToMarkdown(doc) {
  var activeSection = doc.getActiveSection();

  var text = "";

  var total =activeSection.getNumChildren();

  for(var i = 0; i < total; i++){
    var section = activeSection.getChild(i);

    text += parseSection(section);
  }

  return text;
}

function parseSection(section){

  var text = "";

  var childern = section.getNumChildren();

  if(childern>0){
    var type = section.getType();

    if(type == DocumentApp.ElementType.PARAGRAPH){
      switch(section.getHeading()){
        case DocumentApp.ParagraphHeading.HEADING2:
        text += "#";
        case DocumentApp.ParagraphHeading.HEADING1:
        text += "#";
        default:
      }

      if(text != ""){
        text += " ";
      }

      for(var i=0; i< childern; i++){
        var element = section.getChild(i);

        text += parsingElement(element);
      }
    }
  }

  return text + "\n";
}

function parsingElement(element){
  var text = "";

  var type = element.getType();

  if(type == DocumentApp.ElementType.TEXT){
    text += element.getText();
  }else if(type == DocumentApp.ElementType.INLINE_IMAGE){

    text += "[IMAGE]";
    
  }

  return text += "\n";
}

// test
