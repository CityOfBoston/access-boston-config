const fs   = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const yamlLint = require('yaml-lint');
const validate_json = require('../tools/validateJson');

try {
  const yamlFile = yaml.safeLoad(
    fs.readFileSync(
      path.join(__dirname, "../configs/dev/") + "/apps.yaml",
      "utf8"
    )
  );
  yamlLint.lint(yamlFile).then(() => {
    console.log('Valid YAML file.');
  }).catch((error) => {
    console.error('Invalid YAML file.', error);
  });
  console.log('yamlFile: ', yamlFile, ' | Valid JSON: ', validate_json(yamlFile));
} catch (e) {
  console.log(e);
}
