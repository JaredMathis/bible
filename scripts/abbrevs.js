const u = require('wlj-utilities');

const fs = require('fs');

u.scope(__filename, context => {
    let bible = require('./../data/bibles/el_greek');
    u.merge(context, {bible});
    u.assert(() => u.isArray(bible));
    u.assert(() => bible.length === 66);

    let books = require('./../data/books');
    u.merge(context, {books});
    u.assert(() => u.isArray(books));
    u.assert(() => books.length === 66);

    u.loop(bible, b => {
        for (let i in b.chapters) {
            delete b.chapters;
        }
    });
    
    u.loop(books, (b, i)  => {
        bible[i].n = books[i].n;
    });

    let json = JSON.stringify(bible, ' ', 2);

    fs.writeFileSync('./data/bibles/abbrevs.json', json);
});
