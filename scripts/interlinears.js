
const abbrevs = require('./../data/bibles/abbrevs');

const fs = require('fs');

const {
    loop
} = require('./../utilities/tools');

const {
    logIndent,
    merge
} = require('./../utilities/log');

logIndent(__filename, context => {
    let json = '';
    json += `
const result = {};`;
    loop(abbrevs, a => {
        json += `
result["${a.name}"] = require('./../data/interlinear/${a.n}');`;
    });
    json += `
module.exports = result`;

    fs.writeFileSync(`./generated/interlinears.js`, json);
});