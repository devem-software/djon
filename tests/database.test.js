/* eslint-disable no-undef */
// Copyright (c) 2020 Edwin Marroquin <devemloop@gmail.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import path from 'path';
import database from '../src/database/index';

describe('Database actions', () => {
  test('Create database', () => {
    expect(database.create({
      name: 'base de datos',
      path: path.resolve(path.join(path.resolve(path.dirname('')), 'storage')),
    })).toBe(undefined);
  });
});
