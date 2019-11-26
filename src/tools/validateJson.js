// const fs = require('fs').promises;
// const path = require('path');
const jsonlint = require('jsonlint');
// const json_1 = {
//   categories: [
//     {
//       title: "Applications",
//       show_request_access_link: false,
//       icons: true,
//       apps: [
//         {
//           title: "Employee Self-Service",
//           url: "https://ess.boston.gov/",
//           icon: "/assets/apps/ess.svg",
//           groups: [
//             "SG_AB_ESS"
//           ]
//         }
//       ],
//     }
//   ]
// };

const valid_json = (source) => {
  console.log('type: ', typeof source);
  if (!source)
    console.error('Source required.');
  if (typeof source !== 'object' && typeof source !== 'string')
    console.error('Source required.');
  if (typeof source === 'object')
    source = JSON.stringify(source);
  
  return typeof jsonlint.parse(source) === 'object';
};

// console.log('valid_json: ', valid_json(json_1));

// const fetchFile = async (filename, loc) => {
//   let apps_config_json = await fs.readFile(
//     path.resolve(__dirname, `../configs/${loc}/${filename}`),
//     'utf-8',
//     (error) => {
//       if (error)
//         return error;
//     }
//   );
//   // console.log('apps_config_json: ', apps_config_json | jsonlint);
//   console.log('apps_config_json: ', typeof jsonlint.parse(apps_config_json));
//   // console.log('apps_config_json: ', apps_config_json);
//   console.log('valid_json : ', valid_json(apps_config_json));
// };

// fetchFile('apps.json', 'dev');

module.exports = valid_json;


// console.log('jsonlint: ', jsonlint.parse(apps_config_json));