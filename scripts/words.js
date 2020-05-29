const u = require('wlj-utilities');
const fs = require('fs');
const abbrevs = require('./../generated/abbrevs.json');

u.scope(__filename, x => {
    let allWords = {};

    u.loop(abbrevs, a => {
        let verses = require(`./../data/interlinear/${a.n}.json`);
        u.loop(verses, v => {
            let verseWords = v.verse;
            u.loop(verseWords, w => {
                allWords[w.word] = true;
            })
        });
    });

    let json = JSON.stringify(Object.keys(allWords), null, 2);

    fs.writeFileSync(`./generated/words.json`, json);
});