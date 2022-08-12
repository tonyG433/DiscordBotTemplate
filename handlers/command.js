const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { token, clientId } = require('../config.json');
const fs = require('fs');
const logger = require('../utils/logger')
const chalk = require("chalk");

const rest = new REST({ version: '9' }).setToken(token);

module.exports = async (client, forDeploy) => {
    const arrayCommands = []

    for (const folder of fs.readdirSync('./commands')) {
        const slashCommandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
        logger('Load', `Loading `+ chalk.underline.white(folder) +` slash commands...\n`)

        for (const file of slashCommandFiles) {
            const command = require(`../commands/${folder}/${file}`);

            logger('Command', chalk.magenta(file) + ` slash command has been loaded!`)


            if (!forDeploy) client.slashCommands.set(command.data.name, command)
            else {

                arrayCommands.push(command.data.toJSON())
            }
        }
        if (forDeploy) {
            try {
                await rest.put(
                    Routes.applicationCommands(clientId),
                    { body: arrayCommands }
                )
                console.log(arrayCommands)
            } catch (err) {
                console.error(err)
            }
        }
    }
}
