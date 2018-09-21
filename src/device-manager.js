const exec = require("child_process").exec;
const { errors } = require("./messages");
const prompts = require("prompts");
const adbManager = require("./adb-manager");

const selectDevice = async () => {
  const devices = await adbManager.listDevices();

  if (devices.length == 0) {
    throw errors.deviceNotAttached;
  }

  if (devices.length == 1) {
    return devices[0];
  }

  const choices = devices.map(device => ({
    title: device,
    value: device
  }));

  const options = {
    type: "select",
    name: "device",
    message: "Pick a device",
    choices: choices,
    initial: 0
  };
  const response = await prompts(options);
  return response.device;
};

module.exports = {
  selectDevice
};
