import fs from 'fs';
import path from 'path';
import security from '../security/index.js';
import utils from '../utils/index.js';

const database = {
  async create(options = {
    name: 'database',
    path: '/',
    version: '0.0.1',
    extension: 'db',
  }) {
    const nameDB = options.name || 'database';
    const pathDB = options.path || '/';
    const versionDB = options.version || '0.0.1';
    const extensionDB = options.extension || 'db';

    const dataDB = {
      header: {
        name: nameDB,
        version: versionDB,
      },
      body: [
        {
          edfemabu80250114 : {
            nombre: 'edwin fernando',
            apellido : 'marroquin bustos',
          }
        }
      ],
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
      fs.writeFile(file, security.encrypt(JSON.stringify(dataDB)), (err) => {
      // fs.writeFile(file, JSON.stringify(dataDB), (err) => {
        if (err) throw err;
      });
    } else {
      throw 'This database already exists !';
    }
  },
  connect(dataPath) {
    let data = security.decrypt(
      fs.readFileSync(dataPath).toString());
    return JSON.parse(data)

  },
  purge(filePath) {
    let dP = path.resolve(path.join(path.dirname(''), filePath));
    let data = fs.readFileSync(filePath);
    let fullData = JSON.parse(security.decrypt(data.toString()))
    // let fullData = JSON.parse(data.toString());
    let dataBody = fullData.body
    let dataHeader = fullData.header

    console.log(fullData);
    console.log(fullData);

    // const existsFile = utils.Fs.checkFile(filePath);

    // if (!existsFile) {
    if (true) {
      fs.writeFile(file, security.encrypt(JSON.stringify({
        header: dataHeader,
        body: []
      })), (err) => {
        if (err) throw err;
      });
    }
  },

  delete(filePath) {
    fs.unlinkSync(filePath)
  },
};


export default database;
