const jsonlint = require('jsonlint');
const valid_json = (source) => {
  if (!source) {
    console.error('Source required.');
    return false;
  }
  if (typeof source !== 'object' && typeof source !== 'string') {
    console.error('Source type is not compatible (JSON).');
    return false;
  }
  if (typeof source === 'object') {
    source = JSON.stringify(source);
  }
  
  return typeof jsonlint.parse(source) === 'object';
};

module.exports = valid_json;