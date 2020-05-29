
const u = require("wlj-utilities");
const words = require('../generated/words');

module.exports = getWords;

function getWords() {
    let result;
    u.scope(getWords.name, x => {
        result = words;
    });
    return result;
}
