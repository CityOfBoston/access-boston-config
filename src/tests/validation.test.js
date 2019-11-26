const valid_json = require('../tools/validateJson');
const json_1 = {
  categories: [
    {
      title: "Applications",
      show_request_access_link: false,
      icons: true,
      apps: [
        {
          title: "Employee Self-Service",
          url: "https://ess.boston.gov/",
          icon: "/assets/apps/ess.svg",
          groups: [
            "SG_AB_ESS"
          ]
        }
      ],
    }
  ]
};

test('Validate JSON', () => {
  expect(valid_json(json_1)).toBe(true);
});