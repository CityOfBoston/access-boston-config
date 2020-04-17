const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const validate_json = require('../tools/validateJson');

test('Valid Config (DEV)', () => {
  const config_dev = yaml.safeLoad(
    fs.readFileSync(path.join(__dirname, "../configs/dev/apps.yaml"), "utf8")
  );
  expect(validate_json(config_dev)).toBe(true);
});

test('Valid Config (TEST)', () => {
  const config_test = yaml.safeLoad(
    fs.readFileSync(path.join(__dirname, "../configs/test/apps.yaml"), "utf8")
  );
  expect(validate_json(config_test)).toBe(true);
});

test('Valid Config (PROD)', () => {
  const config_prod = yaml.safeLoad(
    fs.readFileSync(path.join(__dirname, "../configs/prod/apps.yaml"), "utf8")
  );
  expect(validate_json(config_prod)).toBe(true);
});
