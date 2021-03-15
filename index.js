const Discord = require('discord.js')
const WOKcommands = require('wokcommands')
const config = require('./config.json')

const client = new Discord.Client()
const guildID = '800708505925058621'

const getApp = (guildID) => {
    const app = client.api.applications(client.user.id)

    if (guildID) {
        app.guilds(guildID)
    }

    return app
}
client.on('ready', async () => {
    new WOKcommands(client, {
        commandsDir: 'commands',
        testServers: [guildID],
        showWarns: false
    })

    const commands = await getApp(guildID).commands.get()
    console.log(commands)

    // await getApp(guildID).commands('818785970567512094').delete()
    console.log('Ready!')
})


client.login(config.Token)