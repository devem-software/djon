// Copyright (c) 2020 Edwin Marroquin <devemloop@gmail.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import fs from 'fs';
import path from 'path';

const database = {
  create(options = {
    name: 'database',
    path: '/',
    version: '0.0.1',
    extension: 'json',
    data: {},
  }) {
    const nameDB = options.name || 'database';
    const pathDB = options.path || '/';
    const versionDB = options.version || '0.0.1';
    const extensionDB = options.extension || 'json';

    const dataDB = options.data || {
      header: {
        name: nameDB,
        version: versionDB,
      },
      body: {},
    };
    const existsFolder = fs.existsSync(pathDB);

    if (!existsFolder) {
      fs.mkdirSync(pathDB, {
        recursive: true,
      }, 755);
    }

    const file = path.join(pathDB, `${nameDB}.${extensionDB}`);
    const existsFile = fs.existsSync(file);

    if (!existsFile) {
      fs.writeFile(file, JSON.stringify(dataDB), (err) => {
        if (err) throw err;
      });
    }
  },
  connect(dataPath) {
    const data = JSON.parse(fs.readFileSync(dataPath));
    return data;
  },
  // purge(dataPath) {},
  // delete(dtaPath) {},
};

database.create({
  name: 'base de datos',
  path: path.resolve(path.join(path.resolve(path.dirname('')), 'storage/home')),
});

/**
 * console.log(database.connect(
 *  path.resolve(
 *    path.join(
 *      path.resolve(path.dirname('')),
 *      'storage/home/base de datos.json'
 *      )
 *    )
 *   )
 * );
 */
export default database;
