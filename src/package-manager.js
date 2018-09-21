const exec = require("child_process").exec;
const { errors } = require("./messages");
const prompts = require("prompts");
const adbManager = require("./adb-manager");

const selectPackage = async (device, package) => {
  const packages = await adbManager.listPackages(device, package);

  if (packages.length == 0) {
    throw errors.noPackageFound;
  }

  if (packages.length == 1) {
    return packages[0];
  }

  if (packages.length > 5) {
    throw errors.moreThan5Packages;
  }

  const choices = packages.map(pkg => ({
    title: pkg,
    value: pkg
  }));

  const options = {
    type: "select",
    name: "package",
    message: "Pick a package",
    choices: choices,
    initial: 0
  };
  const response = await prompts(options);
  return response.package;
};

module.exports = {
  selectPackage
};
