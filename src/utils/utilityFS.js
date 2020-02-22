import fs from 'fs';
const utilityFS = {
  __checkPath(path) {
    let exists = fs.existsSync(path);
    if (!exists) {
      return false;
    } else {
      return true;
    };
  },
  checkFolder(folderPath) {
    if (!this.__checkPath(folderPath)) {
      return false;
    } else {
      return fs.statSync(folderPath).isDirectory();
    }
  },
  checkFile(filePath) {
    if (!this.__checkPath(filePath)) {
      return false;
    } else {
      return fs.statSync(filePath).isFile();
    }
  },
  checkFolderExists(folderPath) {
    return fs.existsSync(folderpath);
  },
  checkFileExists(folderPath) {
    return fs.existsSync(folderpath);
  }
}
export default utilityFS;
