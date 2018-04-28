// A setup script for TrudeauBot
// Usage: node Setup.js <API token>

// Require the filesystem
const fs = require('fs');
const args = process.argv.slice(2);
const token = args[0];

fs.writeFile("./token.json", `{"token":"${token}"}\n`, err => {
    if (err) {
        console.log("Encountered an error whilst writing the token.json file.");
        console.log(err);
    } else {
        console.log("Wrote token.js successfully");
    }
})

