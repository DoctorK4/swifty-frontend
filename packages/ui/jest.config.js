// Just importing the config from jsconfig workspace and exporting it
const sharedConfig = require("@swifty/jest-config");
const config = {
  ...sharedConfig,
};
module.exports = config;
