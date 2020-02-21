// Copyright (c) 2020 Edwin Marroquin <devemloop@gmail.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import CryptoJS from 'crypto-js';

const security = {
  encrypt(str) {
    return str;
  },
  decrypt() {
    return CryptoJS;
  },
  initialize(msg) {
    return msg;
  },
};

export default security;
