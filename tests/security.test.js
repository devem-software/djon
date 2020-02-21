/* eslint-disable no-undef */
// Copyright (c) 2020 Edwin Marroquin <devemloop@gmail.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import security from '../src/security/index';

test('Test Securiity Initialize', () => {
  expect(security.initialize('hola mundo')).toBe('hola mundo');
});
