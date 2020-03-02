/* eslint-disable no-console */
/* eslint-disable import/extensions */
import fs from 'fs';
import path from 'path';
import security from '../security/index.js';
import utils from '../utils/index.js';

const fileDB = {
  databaseEncrypt(data) {
    return security.encrypt(JSON.stringify(data));
  },
  databaseDecrypt(data) {
    return JSON.parse(security.decrypt(data));
  },
  createFile(options = {}) {
    const nameDB = options.name || 'database';
    const pathDB = options.path || '/';
    const versionDB = options.version || '0.0.1';
    const extensionDB = options.extension || 'dbdjon';
    const dataDB = {
      header: {
        name: nameDB,
        version: versionDB,
      },
      body: [],
    };

    const existsFolder = utils.Fs.checkFolder(pathDB);

    if (!existsFolder) {
      fs.mkdirSync(pathDB, {
        recursive: true,
      }, 755);
    }

    const file = path.join(pathDB, `${nameDB}.${extensionDB}`);
    const existsFile = utils.Fs.checkFile(file);

    if (!existsFile) {
      fs.writeFile(file, this.databaseEncrypt(dataDB), (err) => {
        if (err) throw err;
      });
    } else {
      console.warn('This database already exists !');
    }
  },

  connect(dataPath) {
    return this.databaseDecrypt(dataPath);
  },

  purge(filePath) {
    const data = this.connect(filePath);
    const dataBody = [];
    const dataHeader = data.header;

    try {
      fs.writeFile(filePath, this.databaseEncrypt({
        header: dataHeader,
        body: dataBody,
      }), (err) => {
        if (err) throw err;
      });
    } catch (err) {
      console.warn(err.message);
    }
  },

  delete(filePath) {
    utils.Fs.checkFile(filePath);
    try {
      fs.unlinkSync(filePath);
    } catch (err) {
      console.warn(err.message);
    }
  },

};

export default fileDB;
