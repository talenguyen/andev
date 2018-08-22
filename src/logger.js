const { red, green } = require('chalk');

const loggers = {
    error: message => console.log(`${red(message)}`),
    debug: message => console.log(`${green(message)}`)
}

module.exports = loggers
