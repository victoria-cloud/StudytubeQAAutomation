# StudytubeQAAutomation
## This repository is used to store the automation tests.


## PLEASE PAY ATTENTION
# as I work on Windows script
# "clean:reports": "if exist cypress\\reports rmdir /s/q cypress\\reports && mkdir cypress\\reports\\mochareports"
# will not work on another OS, so please let me no if it could be a problem.

# PREREQUISITES
NodeJS 12.18.4 or newer
Yarn instaled globally

# INSTALLATION
Clone the repository to your local machine:
git clone https://github.com/victoria-cloud/StudytubeQAAutomation.git

Install project dependencies:
yarn install
or
npm install 

# USAGE:
The project provides several npm scripts to facilitate testing and reporting. Here are the key scripts:

# Linting:
npm run lint

# Cypress Interactive Mode for test development:
npm run cy:open

# RUN TESTS AND GENERATE REPORT:
npm run test

# PROJECT STRUCTURE:
cypress/: Contains your Cypress test scripts.
node_modules/: Dependencies installed by npm.
cypress/reports/: Test report files are stored here.
.eslintrc.js: ESLint configuration for linting.
package.json: Node.js project metadata and scripts.
README.md: This documentation file.

# DEPENDECIES
cypress-multi-reporters: A plugin for multiple test reporters.
husky: Git hooks management tool.

# DEVDEPENDECIES
cypress: End-to-end testing framework.
cypress-parallel: Parallel test execution for Cypress.
eslint: JavaScript and TypeScript code linter.
eslint-plugin-chai-friendly: ESLint plugin for Chai assertions.
eslint-plugin-cypress: ESLint plugin for Cypress best practices.
mocha: Test framework for JavaScript.
mochawesome: Stylish HTML reporter for Mocha.
mochawesome-merge: Tool to merge Mochawesome test reports.
mochawesome-report-generator: A report generator for Mochawesome.

Last 3 packages allow to create json-report file for every test-spec and then generate nice html-report for whole run.
This report could be found here 'QA-automation\cypress\reports\mochareports\report.html'.
Also screenshots for failed tests can be found in 'QA-automation\cypress\reports\mochareports\assets' folder.

Husky pre-commit hook runs linter before commit.









