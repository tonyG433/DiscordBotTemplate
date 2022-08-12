const { SlashCommandBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('hello')
        .setDescription('Replies with a random response'),
    async slashRun(client, interaction) {

        //Array of replies
        const replies = [
            "Hey",
            "Hello",
            "Hello there",
            "Hi",
            "Good to see you,",
            "What's up",
            "Hey! How’s it going"
        ]

        //Randomly pick one from the array
        const randomReply = replies[Math.floor(Math.random() * replies.length)];

        //Reply to the interaction
        await interaction.reply( randomReply + ` ${interaction.user.username}`)

    }
};
