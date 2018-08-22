const exec = require('child_process').exec
const logger = require('./logger')
const prompts = require('prompts')

class DeviceManager {
    async selectDevice() {
        const devices = await this.listDevices()
        if (devices.length == 0) {
            return null
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

    listDevices() {
        return new Promise((resolve, reject) => {
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
        })
    }
}

module.exports = DeviceManager
