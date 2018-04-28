// Handlers.js

const setup = (client) => {
    console.log("Setting up TrudeauBot state:")
    console.log('No setup required');
};

const message = (client) => (message) => {
    console.log("Recieved a message.");
};

module.exports.setup = setup;
module.exports.message = message;

