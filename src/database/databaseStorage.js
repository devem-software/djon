const storageDB = {
  createStorage(options = {}) {
    let nameDB = options.name || 'database';
    const pathDB = options.path || '/';
    const versionDB = options.version || '0.0.1';
    const extensionDB = options.extension || 'dbdjon';
    const dataDB = {
      header: {
        name: nameDB,
        version: versionDB,
        extension: extensionDB,
      },
      body: [],
    };
    try {
      if (typeof Storage === 'function') {
        localStorage.setItem(nameDB = dataDB);
        console.log(localStorage)
      } else {
        throw new Error('This browser don`t support Api localStorage');
      }
    } catch (err) {
      console.error(err.message);
    }
  },
};

console.log(storageDB.createStorage());

export default storageDB;
