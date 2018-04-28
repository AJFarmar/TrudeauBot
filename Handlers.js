// Handlers.js

const setup = (client) => {
    console.log("Setting up TrudeauBot state:")
    console.log('No setup required');
};

const message = (client) => (message) => {
    const notSelf = client.user.id != message.author.id;
    const containsMan = (/man|men/gi).test(message.content);
    
    if (notSelf && containsMan) {
        message.channel.send(`Excuse me, <@${message.author.id}>? We don't use that sort of language here.`);
    }

};

module.exports.setup = setup;
module.exports.message = message;

