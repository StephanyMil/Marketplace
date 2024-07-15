import { defineConfig } from "cypress";
import codeCoverage from '@cypress/code-coverage/task.js';

export default defineConfig({
  chromeWebSecurity: false,

  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here
      codeCoverage(on, config);
      // It's important to return the updated config object
      return config;
    },
    "baseUrl": "http://localhost:3000",
    testIsolation: false,
  },
});
