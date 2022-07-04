import { defineConfig } from "cypress";
import {default as cucumber } from "cypress-cucumber-preprocessor";

export default defineConfig({
  "chromeWebSecurity":false,
  "defaultCommandTimeout":8000,
  "pageLoadTimeout":30000,
  "viewportWidth": 1200,
  "viewportHeight":800,
  "reporter":"mochawesome",
  "reporterOptions":{
    "overwrite":false,
    "reportFilename":"[status]_[datetime]-[name]",
    "timestamp": "longDate"
  },
  "retries": {
    // Configure retry attempts for `cypress run`
    // Default is 0
    "runMode": 0,
    // Configure retry attempts for `cypress open`
    // Default is 0
    "openMode": 0
  },
  "env":{
    "urlPortal":"https://deca8xva0f7cz.cloudfront.net/login"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
    specPattern: 'cypress/integration/PortalWeb/*.feature',
  },
});
