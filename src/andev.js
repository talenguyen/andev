const AdbManager = require('./adb-manager')
const { deeplink, clear } = require('./commands')

const andev = (flags, input) => {

    if (flags.deeplink) {
        deeplink(input[0])
        return
    }
    if (flags.clear) {
        clear(input[0])
        return
    }
}

module.exports = andev
