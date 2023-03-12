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

    var font = element.getFontFamily();

    if(font == "Courier New"){
      text += "     "+ element.getText();
    } else {
      text += formatText(element);
    }

  }else if(type == DocumentApp.ElementType.INLINE_IMAGE){

    text += "[IMAGE]";
    
  }

  return text += "\n";
}

function formatText(textElement){

  var text = textElement.getText();

  if(!textElement.getTextAttributeIndices)
    return text;

  var offsets = textElement.getTextAttributeIndices();
  var lastOffset = text.length;

  for( var i = offsets.length - 1; i >= 0; i --){
    var offset = offsets[i]
    var url = textElement.getLinkUrl(offset);

    if(url){
      text =text.substring(0, offset) + "[" + text.substring(offset, lastOffset)+ "] ("+ url + ")" + text.substring(lastOffset)
    }

    lastOffset = offset;
  }
  return text;
}




