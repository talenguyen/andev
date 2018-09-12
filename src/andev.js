const AdbManager = require('./adb-manager')
const help = require('./help')
const logger = require('./logger')
const { deeplink, clear, uninstall, install } = require('./commands')

const andev = (flags, input) => {

    if (flags.deeplink) {
        deeplink(input[0])
        return
    }
    if (flags.clear) {
        clear(input[0])
        return
    }
    if (flags.install) {
        install(input[0])
        return
    }
    if (flags.uninstall) {
        uninstall(input[0])
        return
    }
    logger.error(help)
}

module.exports = andev
