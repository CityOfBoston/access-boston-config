# Release Methodology

## Deploy Pipeline Overview
For this repository, the deploy pipeline follows these steps:
- a new working branch is made off `master`,
- code changes (in this case usually configurations settings) are made to the working branch and tested as needed,
- when ready, the developer then creates a PR for a merge of their working branch back into the `master` branch, this triggers a build/test in Travis,
- the developer commits the merge for the PR (for the branch to `develop`), which triggers the code to be copied into an S3 bucket as a static website.

## Lead Developer: Tag and release `Production` branch
After the updated code is committed to `master` and is the website is sucessfully deployed, the lead developer must tag and release the `master` branch so that the Project Manager/s can complete their Release Notes.
1. goto the [release section](https://github.com/CityOfBoston/access-boston-config/releases) of the repository,
2. note the last release number (format _vYYYY.n_ where YYYY is the year and n is an incrementing integer)
3. click the "Draft a New Release" button
4. click on "Choose a Tag" and create a new tag (which follows the release numbering pattern _vYYYY.n_)
5. ensure the Target is the `master` branch
6. give the release a title.  This will be the same as the tag in step 4 above.
7. in the Description, copy and paste in the template below, then click the `Generate release notes` button to append the commits to be bottom of the textbox. Update the "Jira Tickets` section with all tickets that have been addressed in this release.
8. click "Set as the latest release",
9. click the `Save draft` button.

## Project Manager: Release `Production/service-name` branch
The Project Manager will edit the draft release notes, finalize and publish them.
1. goto the [release section](https://github.com/CityOfBoston/access-boston-config/releases) of the repository,
2. edit the draft release,
3. update the *[PM to complete]* block with narrative related to the release,
4. click "Set as the latest release",
5. click the `Publish release` button.

A Github action <img src="https://s3-us-west-2.amazonaws.com/slack-files2/bot_icons/2023-02-09/4779927044435_48.png" alt="" style="width: 20px; height: 20px"/> will now fire which will post a message to the slack [#jira-releases channel](https://cityofboston-doit.slack.com/archives/C03UZ01E5N2).

# Release Description Template 
```
## [Copy title of production PR]

### Release Notes
[PM to complete]

### Related Jira tickets
[Add a list of Jira Tickets addressed in this Release, with links to the Jira website]
example: DIG-1839 - [Update residential exemption application in Assessing Online](https://bostondoit.atlassian.net/browse/DIG-1839)

```
## Project Manager: Release Jira Tickets 
1. In Jira create a release with the following convention RepositoryName/release version (e.g. access-boston-config:v2023.2) 
2. The release description should include what was updated and a link to the release notes (e.g. Access Boston Config updates [Release Notes](https://github.com/CityOfBoston/boston.gov-d8/releases/tag/service-name:v2023.2))
3. Attached release fix version to tickets before releasing the tickets. 
