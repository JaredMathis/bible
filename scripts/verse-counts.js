const u = require('wlj-utilities');

const fs = require('fs');

u.scope(__filename, context => {
    let bible = require('./../data/bibles/el_greek');
    u.merge(context, bible);

    u.assert(() => u.isArray(bible));

    u.loop(bible, b => {
        for (let i in b.chapters) {
            b.chapters[i] = b.chapters[i].length;
        }
    });

    let json = JSON.stringify(bible, ' ', 2);

    fs.writeFileSync('./generated/verse-counts.json', json);
});
