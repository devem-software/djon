const databaseStorage = {
  createStorage(options = {}) {
    try {
      if (typeof (Storage)) {} else {
        throw new Error('This browser don`t support Api localStorage');
      }
    } catch (err) {
      console.error(err.message);
    }
  }
}

export default databaseStorage;
