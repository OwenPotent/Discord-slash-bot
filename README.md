# discord-slash-bot
 A discord bot that utilizes the slash commands from Discord. Its very simple and you can simply add more commands as you wish! Just use the template [here](commands/command-module-example.js)! I would like to thank @AlexzanderFlores for making the `wokcommands` dependency!

## Dependencies and Others
- [discord.js v12.5.1](https://discord.js.org/)
- [node.js v12.0.0 or newer](https://nodejs.org/)
- [npm v7.5.4](https://www.npmjs.com/)
- [pm2](https://pm2.keymetrics.io/) (**Optional**)
- [wokcommands](https://www.npmjs.com/package/wokcommands)

# How do I run the bot?

Its really simple! Follow the instructions down below:

1. Download the repository as a zip file, then extract it.
2. Get your bot's token [here](https://discord.com/applications)
3. Copy the `config.json.example` file and rename it to `config.json`
4. Fill in your bot token!
5. Open command prompt in the folder and type `npm i` to install all dependencies.

Mainly:
- [discord.js](https://discord.js.org)
- [wokcommands](https://www.npmjs.com/package/wokcommands)

6. Once its all finish, you can modify the code however you like! If your ready to test the bot, type `node .` or `node index.js`.

# Optional

You can install `pm2` by typing `npm i pm2 -g` in your command prompt. Then run the bot 24/7 by typing `pm2 start index.js`

# Contributing

1. Fork this repository.
2. Create your own branch.
3. Commit your codes.
4. Push to the branch.
5. Submit a pull request :>
