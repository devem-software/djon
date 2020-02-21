/* eslint-disable no-undef */
// Copyright (c) 2020 Edwin Marroquin <devemloop@gmail.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import utils from '../src/utils/index';

describe('Utils Camelize', () => {
  test('Testing camelize utility _hellow_world', () => {
    expect(utils.camelize('_hello_world')).toBe('helloWorld');
  });
  test('Testing camelize utility -hellow-world', () => {
    expect(utils.camelize('-hello-world')).toBe('helloWorld');
  });
  test('Testing camelize utility .hellow.world', () => {
    expect(utils.camelize('.hello.world')).toBe('helloWorld');
  });
  test('Testing camelize utility hellow_world', () => {
    expect(utils.camelize('hello_world')).toBe('helloWorld');
  });

  test('Testing camelize utility hellow-world', () => {
    expect(utils.camelize('hello-world')).toBe('helloWorld');
  });

  test('Testing camelize utility hellow.world', () => {
    expect(utils.camelize('hello.world')).toBe('helloWorld');
  });

  test('Testing camelize utility -hellow_world', () => {
    expect(utils.camelize('-hello_world')).toBe('helloWorld');
  });

  test('Testing camelize utility _hellow-world', () => {
    expect(utils.camelize('_hello-world')).toBe('helloWorld');
  });
  test('Testing camelize utility hellow.-_world', () => {
    expect(utils.camelize('hello.-world')).toBe('helloWorld');
  });
});
