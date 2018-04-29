// Handlers.js
const Regex = require('./logic/Regex.js');
const Replacements = require('./logic/Replacements.json');
const Utils = require('./logic/Utils.js');

const setup = (client) => {
    console.log("Setting up TrudeauBot state:")
    console.log('No setup required.');
};

const message = (client) => (message) => {
    const notSelf = client.user.id != message.author.id;
    const containsMan = Regex.tester.test(message.content);

    if (notSelf && containsMan) {
        console.log(`Processing potential message from ${message.author.tag} with id ${message.author.id} on channel ${message.channel.name}.`);
        const words = message.content
            .match(Regex.words)
            .filter(word => word.length < 20)
            .filter(word => (word.match(Regex.base)||[]).length < 3);
        
        words.splice(5);

        if (words.length != 0) {
            for (r in Replacements) {
                for (var i = 0; i < words.length; i ++) {
                    words[i] = words[i].replace(r, Replacements[r]);
                }
            }

            message.channel.send(`Excuse me <@${message.author.id}>? We prefer to use words like ${Utils.andify(words)} here.`);
            console.log("Replied.");
        } else {
            console.log("Did not reply.");
        }
    }

};

module.exports.setup = setup;
module.exports.message = message;

