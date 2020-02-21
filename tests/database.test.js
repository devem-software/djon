/* eslint-disable no-undef */
// Copyright (c) 2020 Edwin Marroquin <devemloop@gmail.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import path from 'path';
import database from '../src/database/index';

const folderPath = path.resolve(path.join(path.resolve(path.dirname('')), 'storage'));
const nameFile = 'users';
const extFile = 'json';

describe('Database actions', () => {
  test('Create database', () => {
    expect(database.create({
      name: nameFile,
      path: folderPath,
      ext: extFile,
    })).toBe(undefined);
  });

  test('Connect Database', () => {
    expect(database.connect(path.join(folderPath, `${nameFile}.${extFile}`))).toEqual({
      header: {
        name: nameFile,
        version: '0.0.1',
      },
      body: {},
    });
  });
});
