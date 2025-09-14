const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  projectId: '3xqr96',
  e2e: {
    //experimentalStudio : true,
    //defaultCommandTimeout : 8000,
    //pageLoadTimeout : 10000,
    env: {
      url: "https://rahulshettyacademy.com/",
    },
    "testFiles": "**/*.feature",
    //specPattern : "**/*/*.feature",
    watchForFileChanges : false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("file:preprocessor", cucumber());
    },
  },
  //video: true,
});
