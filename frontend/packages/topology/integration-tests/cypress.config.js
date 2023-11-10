const { defineConfig } = require('cypress');

module.exports = defineConfig({
  defaultCommandTimeout: 40000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  watchForFileChanges: true,
  chromeWebSecurity: true,
  waitForAnimation: true,
  animationDistanceThreshold: 20,
  execTimeout: 90000,
  pageLoadTimeout: 90000,
  requestTimeout: 15000,
  responseTimeout: 15000,
  fixturesFolder: 'testData',
  video: true,
  reporter: '../../../node_modules/cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
  screenshotsFolder: '../../../gui_test_screenshots/cypress/screenshots',
  videosFolder: '../../../gui_test_screenshots/cypress/videos',
  env: {
    TAGS:
      '@topology and (@smoke or @regression or @pre-condition) and not (@manual or @to-do or @un-verified or @broken-test)',
    NAMESPACE: 'aut-topology-ci',
  },
  retries: {
    runMode: 0,
    openMode: 0,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      // eslint-disable-next-line global-require
      return require('./plugins/index.js')(on, config);
    },
    specPattern: 'features/**/*.{feature,features}',
    supportFile: 'support/commands/index.ts',
    baseUrl: 'http://localhost:9000',
    testIsolation: false,
    experimentalMemoryManagement: true,
    numTestsKeptInMemory: 25,
  },
});