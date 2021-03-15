const { MessageEmbed } = require('discord.js')

module.exports = {
    slash: true,
    testOnly: true,
    description: 'Well, it states your name and age',
    minArgs: 2,
    expectedArgs: '<name> <age> [country]',
    callback: ({ args }) => {
        const [name, age, country] = args

        const embed = new MessageEmbed()
            .setTitle('Your Info!')
            .addField('Name', name)
            .addField('Age', age)
            .addField('Country', country)

        return embed
    }
}