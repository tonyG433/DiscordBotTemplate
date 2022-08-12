const chalk = require("chalk")
const moment = require("moment");

module.exports = (type, msg) => {
    /**
     * Cool logger thingy
     * @param {string} type - basically the first things in the [] before the log
     * @param {string} msg - the actual thing that is being logged
     */

    const loggedType = type.toLocaleUpperCase()
    if (!type) type = 'Null'
    switch (type) {
        case 'Load': // [LOAD]
            return console.log(`\n[` + chalk.blue`${moment().format('D/M/Y HH:mm:ss')}` + `]` + `[` + chalk.magenta(`${loggedType}`) + `]` + ' ' + chalk.cyan`${msg}`);

        case 'Command Ran': // [COMMAND RAN]
        case 'Command': // [COMMAND]
        case 'Event': // [EVENT]
            return console.log(`\t[` + chalk.blue`${moment().format('D/M/Y HH:mm:ss')}` + `]` + `[` + chalk.yellow(`${loggedType}`) + `]` + ' ' + chalk.blue`${msg}`);

        case 'Debug': // [DEBUG]
            return console.log(`\n[` + chalk.blue`${moment().format('D/M/Y HH:mm:ss')}` + `]` + `[` + chalk.yellow(`${loggedType}`) + `]` + ' ' + chalk.white`${msg}`)

        case 'Error': // [ERROR]
            return console.log(`\n[` + chalk.blue`${moment().format('D/M/Y HH:mm:ss')}` + `]` + `[` + chalk.red(`${loggedType}`) + `]` + ' ' + chalk.red`${msg}`)

        case 'MongoDB': // [MONGODB]
            return console.log(`\n[` + chalk.blue`${moment().format('D/M/Y HH:mm:ss')}` + `]` + `[` + chalk.green(`${loggedType}`) + `]` + ' ' + chalk.blue`${msg}`)

        default: // [SOMETHING ELSE]
            return console.log(`\n[` + chalk.blue`${moment().format('D/M/Y HH:mm:ss')}` + `]` + `[` + chalk.magenta(`${loggedType}`) + `]` + ' ' + chalk.blue`${msg}`);

    }

}
