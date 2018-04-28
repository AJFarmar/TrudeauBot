// TrudeauBot source code.
const Discord = require('discord.js');
const token = require('./token.json').token;
const Handlers = require('./Handlers.js');

// The TrudeauBot client:
const client = new Discord.Client();

// The ready message:
client.on('ready', () => {
    console.log(`Successfully logged in as ${client.user.tag} with id ${client.user.id}.`);
});

// Setup the additional state of the client.
Handlers.setup(client);

// Pass the message Handler. 
client.on('message', Handlers.message(client));

// Login
client.login(token);

