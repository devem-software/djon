import fs from 'fs';
import path from 'path';
import security from '../security/index.js';
import utils from '../utils/index.js';

const database = {
  __encrypDataBase(data) {
    return security.encrypt(JSON.stringify(data))
  },
  __decrypDataBase(data) {
    return JSON.parse(security.decrypt(data));
  },
  create(options = {
    name: 'database',
    path: '/',
    version: '0.0.1',
    extension: 'db',
  }) {
    let nameDB = options.name || 'database';
    let pathDB = options.path || '/';
    let versionDB = options.version || '0.0.1';
    let extensionDB = options.extension || 'db';
    let dataDB = {
      header: {
        name: nameDB,
        version: versionDB,
      },
      body: [],
    };

    let existsFolder = utils.Fs.checkFolder(pathDB);

    if (!existsFolder) {
      fs.mkdirSync(pathDB, {
        recursive: true,
      }, 755);
    }

    let file = path.join(pathDB, `${nameDB}.${extensionDB}`);
    let existsFile = utils.Fs.checkFile(file);

    if (!existsFile) {
      fs.writeFile(file, this.__encryptDataBase(dataDB), (err) => {
        if (err) throw err;
      });
    } else {
      throw 'This database already exists !';
    }
  },

  connect(dataPath) {
    return this.__decrypDataBase(dataPath);
  },

  purge(filePath) {
    let dP = path.resolve(path.join(path.dirname(''), filePath));
    let data = this.connect(filePath);
    let dataBody = data.body
    let dataHeader = data.header

    let existsFile = utils.Fs.checkFile(filePath);

    try {
      fs.writeFile(file, this.__encryptDataBase({
        header: dataHeader,
        body: []
      }), (err) => {
        if (err) throw err;
      });
    } catch (err) {
      console.error(err.message)
    }
  },

  delete(filePath) {
    let existsFile = utils.Fs.checkFile(filePath);
    try {
      fs.unlinkSync(filePath)
    } catch (err) {
      console.error(err.message)
    }
  },
};

export default database;
