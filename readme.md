# Access-Boston Config

## Repo: [https://github.com/CityOfBoston/access-boston-config](https://github.com/CityOfBoston/access-boston-config)

[repo]: ./src/images/Screenshot1.png "Repo"
[config_dir]: ./src/images/configs_dir.png "Configs Directory"
[apps_file]: ./src/images/apps_file.png "Apps File"
[edit]: ./src/images/edit.png "Edit"
[commit]: ./src/images/commit.png "Commit"
[commit_btn]: ./src/images/commit_btn.png "Commit Button"
[homepage_commit]: ./src/images/homepage_commit.png "Homepage Last Commit > Build Passed"
[commits_page]: ./src/images/commits_page.png "Commit Page"
[commits_page_pass]: ./src/images/commits_page_pass.png "Commit Page > Build Passed"
[commits_page_fail]: ./src/images/commits_page_fail.png "Commit Page > Build Failed"
[groups_syntax]: ./src/images/groups_syntax.png "Groups Syntax"

This repository exists to manage changes to the "front end" side of the Access Boston website without the need of a developer. The changes that can be made are for: application icons, application names, application links, and application access/assigned security group. The changes will be made by editing the "config files" for each of the website environments (i.e. development, test, production). The changes need to be made on each environment separately. The following are step-by-step instructions on how to make these edits. 

Once these edits are made and saved there will be an automated notification to the digital team. The digital team will initiate the site to be 're-built'. The changes should appear on the Access Boston site within 30-60 minutes.

It is encouraged to make these changes Monday-Firday, 9 a.m.-5 p.m., if possible, to ensure that if something goes run that there are available staff to help resolve.

### Edit and Deploy Process

![Repo][repo]

1. From the repository landing page, edit the config file for the environment (dev/test/prod) you want to change, by going from the 'src' and the 'config' folder; the click on the folder for the environment you want to edit.
   - ![Configs Directory][config_dir]
2. Click on the 'apps.yaml' file, from the details view click the 'Edit this File' icon. ![Apps File][apps_file]![Edit][edit]

   Adding new links require 3 of the following fields:
   - title
   - url
   - *groups
   - *icon
  
   *Icon is require for links in the 'Apps' section, at the top of the file.

   *Groups is a list of groups of people with access that application. The formatting should follow this style:

     ![groups_syntax][groups_syntax]
3. When you're done making changes, go to the bottom of the page where it says 'Commit Changes' and provide a name and description for the changes made.
   ![Commit Fields][commit]
4. Leave the "Commit directly to the 'master' branch" radio button checked
5. When you're done, hit the "Commit Changes" button
   ![Commit Button][commit_btn]
6. No you can go back to either the [homepage](https://github.com/CityOfBoston/access-boston-config) or [commits page](https://github.com/CityOfBoston/access-boston-config/commits/master) to view this commit's progress.

Homepage ![homepage_commit][homepage_commit]
Commits page ![commits_page][commits_page]

If you see a yellow dot next to the commit, its still being processed, once its done the dot will check to a green check mark if it passed or a red x if it failed

Passed ![homepage_commit][commits_page_pass]
Failed ![commits_page][commits_page_fail]

Once the build for the commit passes, our build integration with Travis notifies Digital Team will be notified via Slack that we can restart the application on AWS.
