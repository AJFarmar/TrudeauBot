// Handlers.js

const setup = (client) => {
    console.log("Setting up TrudeauBot state:")
    console.log('No setup required');
};

// Rejex testers
const regexes = {
    tester: /\wm(a|e)n|m(a|e)n\w/gi
}

const message = (client) => (message) => {
    const notSelf = client.user.id != message.author.id;
    const containsMan = regexes.tester.test(message.content);
    
    if (notSelf && containsMan) {
        message.channel.send(`Excuse me, <@${message.author.id}>? We don't use that sort of language here.`);
    }

};

module.exports.setup = setup;
module.exports.message = message;

