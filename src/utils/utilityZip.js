/* eslint-disable import/extensions */
import zlib from 'zlib';
import Types from './utilityTypes.js';

/*
TODO: [
  {
    Type: Fix,
    Description: 'Fix return value from expand',
    Error: 'incorrect header check'
  }
]
*/
const utilityZip = {
  OPTIONS: {
    windowBits: 14,
    memLevel: 9,
    level: 9,
  },
  setBuffer(data) {
    let result = data;
    if (Types.isObject(data) || Types.isArray(data)) result = JSON.stringify(data);
    return new Buffer.From(result, 'utf-8');
  },
  compress(data) {
    return zlib.deflateSync(this.setBuffer(data), this.OPTIONS).toString('base64');
  },
  expand(compress) {
    return zlib.inflateSync(new Buffer.From(compress, 'base64'), this.OPTIONS).toString();
  },
};

export default utilityZip;
