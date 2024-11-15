const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "5tt76i",
  viewportWidth: 1366,
  viewportHeight: 768,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
