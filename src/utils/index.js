// Copyright (c) 2020 Edwin Marroquin <devemloop@gmail.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
const utils = {
  camelize(str) {
    let strTpl = '';
    let strTmp = str.split(/[.\-_]/);
    strTmp = strTmp.filter((item) => item !== '');
    strTpl += strTmp[0];
    for (let item = 1; item < strTmp.length; item += 1) {
      const strArray = strTmp[item].split('');
      const capital = strArray[0].toUpperCase();
      strArray[0] = capital;
      strTpl += strArray.join('');
    }
    return strTpl;
  },
};

export default utils;
