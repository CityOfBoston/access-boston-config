const fs   = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const yamlLint = require('yaml-lint');
const valid_yaml = async (_source) => {
  try {
    const yamlFile = yaml.safeLoad(
      fs.readFileSync(path.join(__dirname, _source), "utf8")
    );

    yamlLint.lint(yamlFile).then((_err, _data) => {
      return true;
    }).catch((err) => {
      return false;
    });
  } catch (e) {
    return false;
  }
};

module.exports = valid_yaml;

// const validate_json = require('../tools/validateJson');
// try {
//   const yamlFile = yaml.safeLoad(
//     fs.readFileSync(
//       path.join(__dirname, "../configs/dev/") + "/apps.yaml",
//       "utf8"
//     )
//   );
//   yamlLint.lint(yamlFile).then((_err, _data) => {
//     console.log('Valid YAML file.');
//     if (_err) console.log('err: ', _err);
//     if (_data) console.log('err: ', _data);
//   }).catch((error) => {
//     console.error('Invalid YAML file.', error);
//   });
//   console.log('yamlFile: ', yamlFile, ' | Valid JSON: ', validate_json(yamlFile));
// } catch (e) {
//   console.log(e);
// }
