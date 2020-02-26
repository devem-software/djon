import CryptoJS from 'crypto-js';

const { AES } = CryptoJS;

const security = {
  encrypt(data, secret) {
    const keyS = secret || 'secret';
    return AES.encrypt(data, keyS).toString();
  },
  decrypt(encrypted, secret) {
    const keyS = secret || 'secret';
    return AES.decrypt(encrypted, keyS).toString(CryptoJS.enc.Utf8);
  },
};

export default security;
