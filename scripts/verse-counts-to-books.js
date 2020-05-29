const u = require('wlj-utilities');

const fs = require('fs');

u.scope(__filename, context => {
    let vc = require('./../generated/verse-counts.json');


    let books = vc.map(v => v.name);

    let json = JSON.stringify(books, ' ', 2);

    fs.writeFileSync('./generated/books.json', json);
});
