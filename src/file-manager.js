const exec = require("child_process").exec;
const { errors } = require("./messages");
const prompts = require("prompts");

const listFiles = (dir, fileName) =>
  new Promise((resolve, reject) => {
    exec(`find ${dir} -name "${fileName}"`, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        const apks = stdout.split("\n");
        resolve(apks);
      }
    });
  });

const selectApkFile = async dir => {
  const apks = await listFiles(dir, "*.apk");

  if (apks.length == 0) {
    throw errors.noApkFound;
  }

  if (apks.length == 1) {
    return apks[0];
  }

  const choices = apks.map(apk => ({
    title: apk,
    value: apk
  }));

  const options = {
    type: "select",
    name: "apk",
    message: "Select file to install",
    choices: choices,
    initial: 0
  };
  const response = await prompts(options);
  return response.apk;
};

module.exports = {
  selectApkFile
};
