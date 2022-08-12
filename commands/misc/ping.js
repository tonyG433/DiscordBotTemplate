const { EmbedBuilder,  SlashCommandBuilder} = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Pong! Check my latency'),
    async slashRun(client, interaction) {
        //Deferring the reply
        await interaction.deferReply()

        //Replying initially
        const initialInteraction = await interaction.editReply('Calculating latency...')

        //Calculating the time between the first reply and the time of the interaction creation
        const latency = initialInteraction.createdTimestamp - interaction.createdTimestamp
        //Calculating the API latency
        const apiLatency = Math.round(client.ws.ping)

        const embed = new EmbedBuilder()
            .setTitle('🏓 Pong!')
            .addFields([
                {name: 'Latency', value: `\`${latency}\`ms`, inline: true},
                {name: 'API latency', value: `\`${apiLatency}\`ms`, inline: true}
            ])
            .setColor("Random")

        //Editing the reply with the cool embed
        await interaction.editReply({content: null, embeds: [embed]})

    }
};
