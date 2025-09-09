const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //experimentalStudio : true,
    //defaultCommandTimeout : 8000,
    //pageLoadTimeout : 10000,
    env: {
      url: "https://rahulshettyacademy.com/",
    },
    watchForFileChanges : false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  //video: true,
});
