
const {
    logIndent,
    merge,
} = require('./../utilities/log');

const {
    assert,
} = require('./../utilities/assert');

const {
    isArray,
} = require('./../utilities/core');

const {
    loop,
} = require('./../utilities/tools');

const fs = require('fs');

logIndent(__filename, context => {
    let bible = require('./../data/bibles/el_greek');
    merge(context, bible);

    assert(() => isArray(bible));

    loop(bible, b => {
        for (let i in b.chapters) {
            b.chapters[i] = b.chapters[i].length;
        }
    });

    let json = JSON.stringify(bible, ' ', 2);

    fs.writeFileSync('./data/bibles/verse-counts.json', json);
});
