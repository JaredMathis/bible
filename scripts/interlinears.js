
const abbrevs = require('./../data/bibles/abbrevs');

const fs = require('fs');
const u = require('wlj-utilities');

u.scope(__filename, context => {
    let json = '';
    json += `
const result = {};`;
    u.loop(abbrevs, a => {
        json += `
result["${a.name}"] = require('./../data/interlinear/${a.n}');`;
    });
    json += `
module.exports = result`;

    fs.writeFileSync(`./generated/interlinears.js`, json);
});