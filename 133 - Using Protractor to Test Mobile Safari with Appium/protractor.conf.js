var browsers = {
  firefox: {
    name: 'Firefox',
    browserName: 'firefox'
  },
  chrome: {
    name: 'Chrome',
    browserName: 'chrome'
  },
  ios: {
    name: 'iOS 7 - iPad',
    platformName: 'iOS',
    platformVersion: '7.1',
    deviceName: 'iPad Simulator',
    browserName: 'Safari',
    orientation: 'landscape'
  }
}

var config = {
  specs: [
    './e2e/**/*.spec.js'
  ],

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