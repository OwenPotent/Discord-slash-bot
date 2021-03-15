const {
    MessageEmbed
} = require('discord.js')

module.exports = {
    slash: true,
    testOnly: true,
    description: 'Shows how long the bot has been up for',
    callback: ({
        client
    }) => {
        let days = Math.floor(client.uptime / 86400000);
        let hours = Math.floor(client.uptime / 3600000) % 24;
        let minutes = Math.floor(client.uptime / 60000) % 60;
        let seconds = Math.floor(client.uptime / 1000) % 60;


        const embed = new MessageEmbed()
            .setTitle("Uptime!")
            .setColor('#87ceeb')
            .setDescription(`\nDay(S) Online: ${days}\n\nHour(S) Online: ${hours}\n\nMinute(S) Online: ${minutes}\n\nSecond(S) Online: ${seconds}`)

        return embed        
    }
}