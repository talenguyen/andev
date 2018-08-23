const exec = require('child_process').exec
const { errors } = require('./messages')
const prompts = require('prompts')

const listDevices = () => (new Promise((resolve, reject) => {
    exec("adb devices", (error, stdout, stderr) => {
        if (error) {
            reject(error)
        } else {
            const devices = stdout.split('\n')
                .filter(line => {
                    return line !== "List of devices attached" && line.length > 0
                })
                .map(line => {
                    const spaceIndex = line.indexOf("device")
                    return line.substring(0, spaceIndex).trim()
                })
            resolve(devices)
        }
    })
}))

const selectDevice = async () => {
    const devices = await listDevices()

    if (devices.length == 0) {
        throw errors.deviceNotAttached
    }

    if (devices.length == 1) {
        return devices[0]
    }

    const choices = devices.map(device => ({
        title: device,
        value: device
    }))

    const options = {
        type: 'select',
        name: 'device',
        message: 'Pick a device',
        choices: choices,
        initial: 0
    }
    const response = await prompts(options)
    return response.device
}

module.exports = {
    selectDevice
}
