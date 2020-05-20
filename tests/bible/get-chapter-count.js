const {
    getChapterCount,
} = require('../../bible');

const {
    assert,
    assertIsEqual,
    assertIsDefined,
    assertIsEqualJson,
} = require('../../utilities/assert')

const {
    logIndent,
    merge,
} = require('../../utilities/log')

logIndent(__filename, context => {
    let count;
    
    count = getChapterCount("Genesis");
    merge(context, {count});
    assert(() => count === 50);
    
    count = getChapterCount("John");
    merge(context, {count});
    assert(() => count === 21);
})