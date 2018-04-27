// TrudeauBot source code.
const Discord = require('discord.js');
const token = require('./token.json').token;

// The TrudeauBot client:
const client = new Discord.Client();

// The ready message:
client.on('ready', () => {
    console.log(`Successfully logged in as ${client.user.tag} with id ${client.user.id}.`);
});

// Login
client.login(token);

