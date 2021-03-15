const { MessageEmbed } = require('discord.js')

module.exports = {
    slash: true,
    testOnly: true,
    description: 'Add a poll for your members to vote!',
    minArgs: 2,
    expectedArgs: '<question>',
    callback: async ({ args }) => {
        const [ question ] = args
        
        const embed = new MessageEmbed()
            .setTitle(`📊 Hey everyone, someone has created a new poll. Vote now!`)
            .addField('Poll', `${question}`, false)
            .addField("Yes", '✅', true)
            .addField("No", '⛔', true)

        return embed
    }
}