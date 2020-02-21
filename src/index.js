/* eslint-disable import/extensions */
// Copyright (c) 2020 Edwin Marroquin <devemloop@gmail.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
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
