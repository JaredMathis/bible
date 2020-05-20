
const {
    logIndent,
    merge,
} = require('../utilities/log');

const {
    assert,
} = require('../utilities/assert');

const {
    isArray,
} = require('../utilities/core');

const {
    loop,
} = require('../utilities/tools');

const fs = require('fs');

logIndent(__filename, context => {
    let bible = require('./../data/bibles/el_greek');
    merge(context, {bible});
    assert(() => isArray(bible));
    assert(() => bible.length === 66);

    let books = require('./../data/books');
    merge(context, {books});
    assert(() => isArray(books));
    assert(() => books.length === 66);

    loop(bible, b => {
        for (let i in b.chapters) {
            delete b.chapters;
        }
    });

    let result = {};
    
    loop(books, (b, i)  => {
        result[books[i].n] = bible[i];
    });
    merge(context, {result});

    let json = JSON.stringify(result, ' ', 2);

    fs.writeFileSync('./data/bibles/abbrevs.json', json);
});
