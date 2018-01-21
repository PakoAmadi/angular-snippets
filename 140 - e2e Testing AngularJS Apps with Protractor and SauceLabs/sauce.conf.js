var browsers = require('./browsers'),
    creds = require('./creds');

var config = {
    specs: [
        './e2e/**/*.spec.js'
    ],

    baseUrl: 'http://localhost:3333',
    allScriptsTimeout: 30000,
    getPageTimeout: 30000,
    jasmineNodeOpts: {
        showColors: true,
        isVerbose: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 300000
    }
};

config.baseUrl = 'http://benclinkinbeard.com/demos/ptor';
config.sauceUser = process.env.SAUCE_USERNAME || creds.sauceUser;
config.sauceKey = process.env.SAUCE_ACCESS_KEY || creds.sauceKey;

config.multiCapabilities = [
    browsers.chrome,
    browsers.firefox,
    browsers.ie9,
    browsers.ie10,
    browsers.ie11,
    browsers.ios
];

exports.config = config;