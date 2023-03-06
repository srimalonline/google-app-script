function findFileByName(name) {
  var files = DriveApp.getFilesByName(name);

  if(files.hasNext()){
    return files.next();
  }
  return null;
}

function getTimeStamp(){
  return Math.round(new Date().getTime()/1000);
}

function getFolder(name, create, root){
  if(root == null){
    root = DriveApp;
  }
  
  var folderIter = root.getFoldersByName(name);

  var folder = null;

  if(folderIter.hasNext()){
    folder = folderIter.next();
  }

  if(folder == null && create){
    folder = root.createFolder(name);
  }

  return folder;

}

function getFolderNames(root){
  var folderIter = root.getFolders();
  var folderNames = [];

  while(folderIter.hasNext()){
    var folder = folderIter.next();
    var name = folder.getName();

    folderNames.push(name);
  }

  return folderNames;
}









