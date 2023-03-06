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
