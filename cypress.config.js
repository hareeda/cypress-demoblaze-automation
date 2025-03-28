const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 30000, // 10 seconds wait for all commands
    baseUrl: "https://www.demoblaze.com",
    specPattern: "cypress/integration/**/*.cy.{js,jsx,ts,tsx}", // Include .spec.js files
  },
  reporter: "mochawesome", // Enables Mochawesome reporting
  reporterOptions: {
    reportDir: "cypress/reports",  // Where reports will be saved
    overwrite: false,
    html: true,
    json: true
  }
});
