const deviceManager = require('../device-manager')
const adbManager = require('../adb-manager')
const packageManager = require('../package-manager')
const logger = require('../logger')

const usage = `
  Usage: 
    $ andev --uninstall <package>
  
    Options:
      pacakge   package to uninstall 

    Example:
      $ andev --uninstall com.android.google
`

const uninstall = async (pkg) => {
    if (pkg) {
        try {
            const device = await deviceManager.selectDevice()
            const package = await packageManager.selectPackage(device, pkg)
	    logger.debug(`uninstall ${package} on ${device}`)
            const result = await adbManager.uninstallPackage(device, package)
            logger.debug(result)
        } catch (error) {
            logger.error(error)
        }
    } else {
        logger.error(usage)
    }
}

module.exports = uninstall
