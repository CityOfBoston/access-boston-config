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
[commit1]: ./src/images/git-actions/commit1.jpg "Commit Modal"
[commit2]: ./src/images/git-actions/commit2.jpg "Commit Dropdown"
[deploy1]: ./src/images/git-actions/deploy1.png "Deploy 1"
[deploy2]: ./src/images/git-actions/deploy2.png "Deploy 2"
[deploy3]: ./src/images/git-actions/deploy3.png "Deploy 3"
[deploy4]: ./src/images/git-actions/deploy4.jpg "Deploy 4"
[deploy5]: ./src/images/git-actions/deploy5.jpg "Deploy 5"

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
3. When you're done making changes, click on the  'Commit Changes' button on the top right corner. This will open a pop-up modal; provide a name and description for the changes made.
   ![commit2][commit2]
4. In pop-up modal select the "Create a new Branch for this commit" radio button
5. When you're done, hit the "Commit Changes" button
   ![commit1][commit1]
6. Give the new branch for your work a name.
7. Hit the "Propose Changes" button; this will take you to another screen where you will see a preview of the "Pull Request" that will be created.
8. Hit the "Create Pull Request" button. This will create the PR and you will be take to its page.
9. On the PR page tag a reviewer to approve your changes. After you'll be able to "Merge" your changes. After mergin a github action for `(Force) Push Changes to deploy-branches`. ![deploy1][deploy1] This will update the corresponding [deploy-`dev|test|prod`] branch to match the `master` branch.
10. Go to the `Deploy AB Configs to Amazon S3` Github Actions, click on the `Run workflow` to select what branch to run this action on
   ![deploy2][deploy2]
   ![deploy4][deploy4]
   ![deploy3][deploy3]
   ![deploy5][deploy5]
11. Select the branch your previous commit targeted and clic `Run workflow`
12. Wait for the `workflow` to run, it will show a `green` circular check mark if the it passed, and a `red` circular `x` if it failed
13. Go to the `AWS Console` and update the `ECS` instance you want to update with this config change. This will create a new instance of the service and spin down the previous ones once its stable
14. DONE
