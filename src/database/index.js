import fileDB from './databaseFile.js';
import storageDB from './databaseStorage.js';
import utils from '../utils/index.js';

const database = {
  storage(type) {
    const driver = utils.Types.isString(type);
    try {
      switch (driver) {
        case 'File':
          console.log('Database in FILE');
          break;
        case 'Storage':
          console.log('Database in LOCALSTORAGE');
          break;
        default:
          throw new Error(`this Value [${driver}] Only support values "File" or "Storage"`);
      }
    } catch (err) {
      console.error(err.message);
    }
  },
  create() {},
  connect() {},
  purge() {},
  delete() {},
};

database.storage('File');

export default database;
