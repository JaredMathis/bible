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
    let verses;
    
    verses = getVerses('John', 0);
    merge(context, {verses});
    assertIsEqual(verses.length, 51);
    
    verses = getVerses('John', 1);
    merge(context, {verses});
    assertIsEqual(verses.length, 25);
})