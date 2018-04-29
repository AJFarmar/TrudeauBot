// Regex.js

// Rejex testers
var regex = {}
regex.base   = 'm(a|e)n'; 
regex.tester = `\\w${regex.base}|${regex.base}\\w`;
regex.words  = `\\b(\\w+${regex.base}\\w*|\\w*${regex.base}\\w+)\\b`;

for (var i in regex) regex[i] = new RegExp(regex[i], 'gi');

module.exports = regex

