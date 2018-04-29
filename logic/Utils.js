// Utils.js

function andify(stringList) {
    if (stringList.length == 1) {
        return `"${stringList[0]}"`;
    }

    var result = '';
    for (var i = 0; i < stringList.length - 1; i++) {
        result += `"${stringList[i]}", `;
    }
    
    result += `and "${stringList[stringList.length - 1]}"`;

    return result;

}

module.exports.andify = andify;

