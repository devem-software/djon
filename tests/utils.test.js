/* eslint-disable no-undef */
// Copyright (c) 2020 Edwin Marroquin <devemloop@gmail.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import utils from '../src/utils/index';

test('Testing camelize utility', () => {
  expect(utils.camelize('_hello_world')).toBe('helloWorld');
  expect(utils.camelize('-hello-world')).toBe('helloWorld');
  expect(utils.camelize('.hello.world')).toBe('helloWorld');

  expect(utils.camelize('hello_world')).toBe('helloWorld');
  expect(utils.camelize('hello-world')).toBe('helloWorld');
  expect(utils.camelize('hello.world')).toBe('helloWorld');

  expect(utils.camelize('-hello_world')).toBe('helloWorld');
  expect(utils.camelize('_hello-world')).toBe('helloWorld');
  expect(utils.camelize('hello.-world')).toBe('helloWorld');
});
