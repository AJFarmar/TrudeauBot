# TrudeauBot

A silly discord bot for silly people.

Made using [discord.js](https://discord.js.org/#/).

## Setup

* Install [node.js](https://nodejs.org/en/) if not already installed.
* Navigate to TrudeauBot's folder.
* Install [discord.js](https://discord.js.org/#/) with `npm install --save discord.js`.
* Run `node Setup.js <API TOKEN>` where `<API TOKEN>` should be replaced with your bot account's API token.
* You're good to go! Just run `node Bot.js` to get TrudeauBot running.

## Feature list
### Base features
- [x] Reply to occurences of man/men.
- [ ] Replace occurences of man/men with person/people.
- [ ] Preserve capitalisation as much as possible in replies.

### Anti-spam features
- [ ] Only reply to occurences of man/men which occur embedded in another word.
- [ ] Do not reply to occurences where man/men appears more than two times in a word.
- [ ] Do not reply to occurences where man/men appears in a word of length more than 25 characters.
- [ ] Kick people who have triggered replacement more than 6 times in a minute.
