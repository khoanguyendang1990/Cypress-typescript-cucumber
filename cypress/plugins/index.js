/**
 * 
 * @type {Cypress.PluginConfig} 
 */
module.exports = (on, config) => {
  require('cypress-mochawesome-reporter/plugin')(on)
};

const wp = require("@cypress/webpack-preprocessor");

module.exports = on => {
    const options = {
        webpackOptions: require("../../webpack.config")
    };
    on("file:preprocessor", wp(options));
};

const browserify = require('@cypress/browserify-preprocessor')

module.exports = (on) => {
  on('file:preprocessor', browserify())
}