const {
    getChapterCount,
} = require('../../bible');

const u = require('wlj-utilities');

u.scope(__filename, context => {
    let count;
    
    count = getChapterCount("Genesis");
    u.merge(context, {count});
    u.assert(() => count === 50);
    
    count = getChapterCount("John");
    u.merge(context, {count});
    u.assert(() => count === 21);
})