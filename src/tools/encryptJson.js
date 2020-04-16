const cryptoJSON = require('crypto-json');
const config = require('dotenv').config({ path: './.env' }).parsed;
const password = config && config.password ? config.password : "$CRYPTO_PASSWORD";
const keys = [];
const algorithm = config && config.password ? config.algorithm : "$CRYPTO_ALGO";
const encoding = config && config.password ? config.encoding : "$CRYPTO_ENCODING";

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