const {
    getVerses,
} = require('../../bible');

const u = require('wlj-utilities');

u.scope(__filename, context => {
    let verses;
    
    verses = getVerses('John', 0);
    u.merge(context, {verses});
    u.assertIsEqual(verses.length, 51);
    
    verses = getVerses('John', 1);
    u.merge(context, {verses});
    u.assertIsEqual(verses.length, 25);
})