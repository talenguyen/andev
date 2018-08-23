const deviceManager = require('../device-manager')
const adbManager = require('../adb-manager')
const packageManager = require('../package-manager')
const logger = require('../logger')

const usage = `
  Usage: 
    $ andev --clear <package>
  
    Options:
      pacakge   package to clear data

    Example:
      $ andev --clear com.android.google
`

const clear = async (pkg) => {
    if (pkg) {
        try {
            const device = await deviceManager.selectDevice()
            const package = await packageManager.selectPackage(device, pkg)
            const result = await adbManager.clearData(device, package)
            logger.debug(result)
        } catch (error) {
            logger.error(error)
        }
    } else {
        logger.error(usage)
    }
}

module.exports = clear
