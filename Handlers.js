// Handlers.js

const setup = (client) => {
    console.log("Setting up TrudeauBot state:")
    console.log('No setup required');
};

// Rejex testers
var regex = {}
regex.base   = 'm(a|e)n'; 
regex.tester = `\\w${regex.base}|${regex.base}\\w`;
regex.words  = `\\b(\\w+${regex.base}\\w*|\\w*${regex.base}\\w+)\\b`;

// Compile the regexes
for (var i in regex) regex[i] = new RegExp(regex[i], 'gi');

const message = (client) => (message) => {
    const notSelf = client.user.id != message.author.id;
    const containsMan = regex.tester.test(message.content);

    if (notSelf && containsMan) {
        const words = message.content.match(regex.words).filter(word => word.length < 20);
        if (words.length != 0) {
            message.channel.send(`Excuse me <@${message.author.id}>? We don't use that sort of language here.`);
        }
    }

};

module.exports.setup = setup;
module.exports.message = message;

