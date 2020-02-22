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
      body: {},
    };

    const existsFolder = utils.Fs.checkFolder(pathDB);
    console.log('FOLDER =>', existsFolder);
    if (!existsFolder) {
      fs.mkdirSync(pathDB, {
        recursive: true,
      }, 755);
    }

    const file = path.join(pathDB, `${nameDB}.${extensionDB}`);
    const existsFile = utils.Fs.checkFile(file);

    if (!existsFile) {
      fs.writeFile(file, security.encrypt(JSON.stringify(dataDB)), (err) => {
        if (err) throw err;
      });
    }
  },
  connect(dataPath) {
    setTimeout(() => {
      let data = security.decrypt(
        fs.readFileSync(dataPath).toString());
      let result = JSON.parse(data)
    }, 1000);
    return result;
  },
  purge(dataPath) {},
  // delete(dtaPath) {},
};

(async () => {
  await database.create({
    name: 'messages',
    path: path.resolve(path.join(path.resolve(path.dirname('')), 'storage/home')),
  });
  await console.log(database.connect(
    path.join(
      path.resolve(path.dirname('')),
      'storage/home/messages.db'
    )
  ))
})()

export default database;
