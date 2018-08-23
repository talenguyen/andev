const AdbManager = require('./adb-manager')
const { deeplink } = require('./commands')

const Andev = (flags, input) => {

    if (flags.deeplink) {
        deeplink(input[0])
        return
    }
}

module.exports = Andev
