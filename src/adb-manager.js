const exec = require('child_process').exec

const makeAdbCommand = (device, command) => `adb -s ${device} ${command}`

const openLink = (device, link) => (new Promise((resolve, reject) => {
    const command = makeAdbCommand(device, `shell am start -W -a android.intent.action.VIEW -d ${link}`)
    exec(command, (error, stdout, stderr) => {
        if (error) {
            reject(error)
        } else {
            resolve(stdout)
        }
    })
}))

module.exports = {
    openLink
}
