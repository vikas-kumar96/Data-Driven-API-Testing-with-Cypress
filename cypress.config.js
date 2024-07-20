const { defineConfig } = require("Cypress");

async function setupNodeEvents(on, config) {
  // implement node event listeners here
  return config;
}
module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern:"cypress/Integration/Test/POM_simpleBooks.js"
    },
});
