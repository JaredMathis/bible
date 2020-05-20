const {
    getVerses,
} = require('../../bible');

const {
    assert,
    assertIsEqual,
} = require('../../utilities/assert')

const {
    logIndent,
    merge,
} = require('../../utilities/log')

logIndent(__filename, context => {
    let verses = getVerses('john', 0);
    merge(context, {verses});
    assertIsEqual(verses.length, 17);

    console.log({verses});
})