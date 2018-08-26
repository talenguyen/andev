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

const listPackages = (device, package) => (new Promise((resolve, reject) => {
    const command = makeAdbCommand(device, `shell pm list packages -3 | grep ${package}`)
    exec(command, (error, stdout, stderr) => {
        if (error) {
            reject(error)
        } else {
            const packages = stdout.split('\n')
                .filter(line => {
                    return line.length > 0
                })
                .map(line => {
                    const packages = line.replace('package:', '').replace('\r', '')
                    return packages
                })
            resolve(packages)
        }
    })
}))

const clearData = (device, package) => (new Promise((resolve, reject) => {
    const command = makeAdbCommand(device, `shell pm clear ${package}`)
    exec(command, (error, stdout, stderr) => {
        if (error) {
            reject(error)
        } else {
            resolve(stdout)
        }
    })
}))

const uninstallPackage = (device, package) => (new Promise((resolve, reject) => {
    const command = makeAdbCommand(device, `uninstall ${package}`)
    exec(command, (error, stdout, stderr) => {
        if (error) {
            reject(error)
        } else {
            resolve(stdout)
        }
    })
}))

module.exports = {
    listDevices,
    listPackages,
    openLink,
    clearData,
    uninstallPackage
}
