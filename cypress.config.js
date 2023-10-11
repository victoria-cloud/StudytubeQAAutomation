const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    reporterEnabled: "mochawesome",
    mochawesomeReporterOptions: {
      reportDir: "cypress/reports/mocha",
      quite: true,
      overwrite: false,
      html: false,
      json: true
    }
  },
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 120000,
  chromeWebSecurity: false,
  viewportHeight: 720,
  viewportWidth: 1280,
  screenshotOnRunFailure: true,
  video: true,
  numTestsKeptInMemory: 100,
  experimentalMemoryManagement: true,
  screenshotsFolder: "cypress/reports/mochareports/assets",
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://qa-task.redvike.rocks/',
    specPattern: 'cypress/e2e//**/*.cy.{js,jsx,ts,tsx}',
  }
})
