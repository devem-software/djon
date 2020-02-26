import fs from 'fs';

const utilityFS = {
  fsCheckPath(path) {
    const exists = fs.existsSync(path);
    if (!exists) {
      return false;
    }
    return true;
  },
  checkFolder(folderPath) {
    if (!this.fsCheckPath(folderPath)) {
      return false;
    }
    return fs.statSync(folderPath).isDirectory();
  },
  checkFile(filePath) {
    if (!this.fsCheckPath(filePath)) {
      return false;
    }
    return fs.statSync(filePath).isFile();
  },
  checkFolderExists(folderPath) {
    return fs.existsSync(folderPath);
  },
  checkFileExists(folderPath) {
    return fs.existsSync(folderPath);
  },
};
export default utilityFS;
