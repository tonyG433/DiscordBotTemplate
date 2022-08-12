const { SlashCommandBuilder} = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('dice')
        .setDescription('Rolls a 6 side dice.'),
    async slashRun(client, interaction) {

        //Get a random number between 1 and 6
        const rolledNumber = Math.floor(Math.random() * 6) + 1

        //Replying to the interaction
        await interaction.reply(`The number you have rolled is \`${rolledNumber}\``)

    }
};
