const deviceManager = require("../device-manager");
const adbManager = require("../adb-manager");
const logger = require("../logger");

const usage = `
  Usage: 
    $ andev --text <text>
  
    Options:
      text    text to send to device

    Example:
      $ andev --text https://gogole.com
`;

const text = async txt => {
  if (txt) {
    try {
      const device = await deviceManager.selectDevice();
      logger.debug(`Send text "${txt}" to ${device}`);
      const result = await adbManager.sendText(device, txt);
      logger.debug(result);
    } catch (error) {
      logger.error(error);
    }
  } else {
    logger.error(usage);
  }
};

module.exports = text;
