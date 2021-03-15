const { MessageEmbed } = require('discord.js')

module.exports = {
    slash: true,
    testOnly: true,
    description: 'API Latency of the bot',
    callback: ({ client }) => {
        const ping = `:ping_pong: API latency is ${(Math.round(client.ws.ping))}ms`
        
        const embed = new MessageEmbed()
            .setTitle('API Latency!')
            .setColor('#87ceeb')
            .setDescription(ping)

        return embed
    }
}