const cryptoJSON = require('crypto-json');
const config = require('dotenv').config({ path: './.env' }).parsed;
const password = config.password;
const keys = [];
const algorithm = config.algorithm;
const encoding = config.encoding;

const encrypt_json = source => {
  return cryptoJSON.encrypt(
    source,
    password,
    {
      encoding,
      keys,
      algorithm
    }
  );
};

module.exports = encrypt_json;