const deviceManager = require('../device-manager')
const adbManager = require('../adb-manager')
const logger = require('../logger')

const usage = `
  Usage: 
    $ andev --deeplink <link>
  
    Options:
      link    link to open

    Example:
      $ andev --deeplink https://gogole.com
`

const deeplink = async (link) => {
    if (link) {
        try {
            const device = await deviceManager.selectDevice()
            const result = await adbManager.openLink(device, link)
            logger.debug(result)
        } catch (error) {
            logger.error(error)
        }
    } else {
        logger.error(usage)
    }
}

module.exports = deeplink
