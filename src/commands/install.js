const deviceManager = require("../device-manager");
const adbManager = require("../adb-manager");
const fileManager = require("../file-manager");
const logger = require("../logger");

const usage = `
  Usage: 
    $ andev --install <apk-path>
  
    Options:
      pacakge   apk-path to install 

    Example:
      $ andev --install ./app/build/output/apk
`;

const install = async path => {
  if (path) {
    try {
      const device = await deviceManager.selectDevice();
      const apkFile = await fileManager.selectApkFile(path);
      logger.debug(`install ${apkFile} on ${device}`);
      const result = await adbManager.installApk(device, apkFile);
      logger.debug(result);
    } catch (error) {
      logger.error(error);
    }
  } else {
    logger.error(usage);
  }
};

module.exports = install;
