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
[commit2]: ./src/images/git-actions/commit1.jpg "Commit Modal"
[commit1]: ./src/images/git-actions/commit2.jpg "Commit Dropdown"
[deploy1]: ./src/images/git-actions/deploy1.png "Deploy 1"
[deploy2]: ./src/images/git-actions/deploy2.png "Deploy 2"
[deploy3]: ./src/images/git-actions/deploy3.png "Deploy 3"
[deploy4]: ./src/images/git-actions/deploy4.jpg "Deploy 4"
[deploy5]: ./src/images/git-actions/deploy5.jpg "Deploy 5"

## Overview

The `access-boston-config` repository manages changes to the "front end" of the Access Boston website without requiring developer intervention. This includes updates to application icons, names, links, and assigned security groups. The repository handles configuration for three environments: Development (`dev`), Testing (`test`), and Production (`prod`). Changes are made by editing configuration files for each environment separately. 

![repo][repo]

## Configuration Process

1. **Request Details**

   Ensure that the following details are provided in the DIG Access Boston portal request ticket:

   - **Name of app**: The name of the application to link to the Access Boston portal.
   - **Security group**: The security group(s) that should have access to view the application link. If left blank or set to 'birthright', the link will be visible to all users.
   - **URL**: The external link URL to redirect to upon clicking. Ensure the URL is complete and valid. Specify if it should open in a new tab.
   - **Icon**: The name of the icon and the SVG graphic file. Attach the graphic to the ticket.
   - **Deadline**: A specified window for deployment within working hours, typically within 12 to 24 hours from today.

2. **Edit Configuration**

   ![config_dir][config_dir]

   Navigate to the appropriate environment folder in `/src/configs`:
   - **Development**: `/src/configs/dev`
   - **Testing**: `/src/configs/test`
   - **Production**: `/src/configs/prod`

   ![apps_file][apps_file]

   Edit the `apps.yaml` file in the selected directory:

   ![edit][edit]

   - Locate the `categories` field.
   - Find the item with the title `Applications`.
   - Under `apps`, navigate to the end of the list and add a new entry in the following format:

     ```yaml
     - title: [Name of app]
       url: [URL]
       target: _blank (Include only if the link should open in a new tab)
       icon: https://assets.boston.gov/icons/accessboston/[Icon_Name].svg
       groups: (Include only if specific security groups are assigned)
         - [Security Group 1]
         - [Security Group 2]
     ```

3. **Commit Changes**
   - Click the `Commit Changes` button at the top right corner.
   ![commit1][commit1]
   - In the pop-up modal, provide a name and description for the changes.
   ![commit2][commit2]
   - Select `create a new branch for this commit and start a pull request`.
   - Follow the naming convention for the new branch:
     
     `[Environment] DIG-XXX: Added App Icon [Icon_Name]`

   - Click `Propose Changes`, review the pull request, and then click `Create Pull Request`.

   - On the PR page, tag a reviewer to approve the changes and then merge the pull request.

   The commit will first go through a yaml style check. If the edited apps.yaml does not adhere to yaml form standards, you will see the below error:

   ![commits_page_fail][commits_page_fail]

4. **Deploy Changes**

   - After merging, GitHub Actions will update the corresponding `deploy-dev`, `deploy-test`, or `deploy-prod` branch to match the master branch. This action updates the YAML file in the S3 bucket but does not trigger a full CI/CD deployment.

   ![deploy1][deploy1]
   ![deploy2][deploy2]
   ![deploy3][deploy3]
   ![deploy5][deploy5]

   - Select the branch for your commit and click `Run workflow`. Monitor the workflow for success (green check mark) or failure (red X).

   ![homepage_commit][homepage_commit]

5. **Verify and Update AWS**

   - Log into the AWS Console. Contact the administrator if there are access issues.
   - Verify that the CI/CD process updated the file in:
     
     `Amazon S3 > Buckets > cob-digital-apps-staging-config > access-boston/ > [Environment]/ > apps.yaml`

   - Ensure the SVG icon is available at:
     
     `https://assets.boston.gov/icons/accessboston/[Icon_Name].svg`

   - Upload the SVG icon to the S3 bucket:
     
     `Amazon > S3 > Buckets > patterns.boston.gov > assets/ > icons/ > accessboston/`

     - Click `Upload`.
     - Upload the file with the correct filename.
     - Under Server-side encryption, select `specify an encryption key` and choose `use bucket settings for default encryption`.

6. **Run Final Workflow**

   - Go to the `Deploy AB Configs to Amazon S3` GitHub Actions.
   - Click on `Run workflow` and select the target branch.

   - Update the ECS instance in the AWS Console to reflect the configuration changes. This will create a new instance of the service and decommission the previous ones once stable.

## Notifications and Timing

Once edits are made and saved, an automated notification will be sent to the digital team. The digital team will initiate the site to be 're-built'. Changes should appear on the Access Boston site within 30-60 minutes.

It is encouraged to make these changes Monday to Friday, 9 a.m. to 5 p.m., if possible, to ensure that any issues can be addressed promptly by available staff.

---

This README ensures that all users understand the process for managing front-end changes to the Access Boston Portal.