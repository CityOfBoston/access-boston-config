const valid_json = require('../tools/validateJson');
const encrypt_json = require('../tools/encryptJson');
const decrypt_json = require('../tools/encryptJson');
const config_dev = require('../configs/dev/apps.json');
const config_test = require('../configs/test/apps.json');
const config_prod = require('../configs/prod/apps.json');

test('Validate App DEV Config (JSON)', () => {
  expect(valid_json(config_dev)).toBe(true);
});

test('Validate App TEST Config (JSON)', () => {
  expect(valid_json(config_test)).toBe(true);
});

test('Validate App PROD Config (JSON)', () => {
  expect(valid_json(config_prod)).toBe(true);
});

test('Encode App DEV (JSON)', () => {
  expect(encrypt_json(config_dev).categories[0].title !== "Applications").toBe(true);
});

test('Decode App DEV (JSON)', () => {
  const encrypted = encrypt_json(config_dev);
  // console.log('decrypt: ', decrypt_json(encrypted).categories[0].title);
  expect(decrypt_json(encrypted).categories[0].title !== "Applications").toBe(true);
});
