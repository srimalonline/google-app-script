function findFileByName(name) {
  var files = DriveApp.getFilesByName(name);

  if(files.hasNext()){
    return files.next();
  }
  return null;
}

