// Handlers.js
const Regex = require('./logic/Regex.js');

const setup = (client) => {
    console.log("Setting up TrudeauBot state:")
    console.log('No setup required.');
};

const message = (client) => (message) => {
    const notSelf = client.user.id != message.author.id;
    const containsMan = Regex.tester.test(message.content);

    if (notSelf && containsMan) {
        console.log(`Processing potential message from ${message.author.tag} with id ${message.author.id}.`);
        const words = message.content
            .match(Regex.words)
            .filter(word => word.length < 20)
            .filter(word => (word.match(Regex.base)||[]).length < 3);

        if (words.length != 0) {
            message.channel.send(`Excuse me <@${message.author.id}>? We don't use that sort of language here.`);
            console.log("Replied.");
        } else {
            console.log("Did not reply.");
        }
    }

};

module.exports.setup = setup;
module.exports.message = message;

