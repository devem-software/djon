/* eslint-disable no-console */
const utilyTypes = {
  wrapperCheckType(value, type) {
    let result = false;
    try {
      if (value.constructor.name.toLowerCase() !== type) {
        throw new Error({ Error: `${value.toString()} not is a ${type}` });
      } else {
        result = true;
      }
    } catch (err) {
      console.error(err);
    }
    return result;
  },
  isUndefined(value) {
    return console.warn(`This ${value} don't supported values undefined o null`);
  },
  isBoolean(value) {
    return this.wrapperCheckType(value, 'boolean');
  },
  isNumber(value) {
    return this.wrapperCheckType(value, 'number');
  },
  isString(value) {
    return this.wrapperCheckType(value, 'string');
  },
  isArray(value) {
    return this.wrapperCheckType(value, 'array');
  },
  isObject(value) {
    return this.wrapperCheckType(value, 'object');
  },
  isDate(value) {
    return this.wrapperCheckType(value, 'date');
  },
  isRegEx(value) {
    return this.wrapperCheckType(value, 'regex');
  },
  isFunction(value) {
    return this.wrapperCheckType(value, 'function');
  },
  isError(value) {
    return this.wrapperCheckType(value, 'error');
  },
};

export default utilyTypes;
