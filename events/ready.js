const logger = require('../utils/logger')
const chalk = require("chalk");

module.exports = {
    name: 'ready',
    run(client) {
        logger('Ready', 'Logged in as' + ' ' + chalk.bold.white(client.user.username) + ' ' + 'and ready to go!')
        require('../handlers/command')(client, true)
            .then(() => {
                logger('DEPLOY', 'Slash commands have been successfully deployed.')

            })

    }
}
