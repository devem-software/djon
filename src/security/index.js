import CryptoJS from 'crypto-js';

const security = {

  encrypt(data, secret) {
    const keySecret = secret || 'secret';
    return CryptoJS.AES.encrypt(data, keySecret).toString();
  },
  decrypt(encrypted, secret) {
    const keySecret = secret || 'secret';
    const bytes = CryptoJS.AES.decrypt(encrypted, keySecret);
    return bytes.toString(CryptoJS.enc.Utf8);
  },
  initialize(msg) {
    return msg;
  },
};

export default security;
