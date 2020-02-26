/* eslint-disable import/extensions */
import collection from './collection/index.js';
import database from './database/index.js';
import events from './events/index.js';
import security from './security/index.js';
import utils from './utils/index.js';

const DJ = {
  collection,
  database,
  events,
  security,
  utils,
};
export default DJ;

export {
  collection,
  database,
  events,
  security,
  utils,
};
