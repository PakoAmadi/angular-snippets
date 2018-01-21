var browsers = require('./browsers');

var config = {
    suites: {
        basics: './e2e/index.spec.js',
        locators: './e2e/locators.spec.js'
    },

    baseUrl: 'http://localhost:3333'
};

if (process.argv[3] === '--chrome') {
    config.capabilities = browsers.chrome;
} else if (process.argv[3] === '--ios') {
    config.seleniumAddress = 'http://localhost:4723/wd/hub';
    config.capabilities = browsers.ios;
} else {
    config.multiCapabilities = [
        browsers.firefox,
        browsers.chrome
    ]
}

exports.config = config;
