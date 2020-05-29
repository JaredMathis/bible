const u = require('wlj-utilities');

module.exports = {
    getBooks,
    getVerses,
    getVerseRange,
    getChapterCount,
};

function is1Kings22Quirk(book, chapter) {
    let isQuirk = book === "i_kings" && chapter === 22;
    if (isQuirk) {
        console.log('Needs fixing! ' + is1Kings22Quirk.name);
    }
    return isQuirk;
}

let books;
let interlinears = {};
let verseCounts;
let abbrevs;
u.scope(__filename, context=> {
    interlinears = require('./generated/interlinears');

    let vc = require('./generated/verse-counts');
    verseCounts = u.toDictionary(vc, 'abbrev');

    books = vc.map(v => v.name);

    let a = require('./generated/abbrevs');
    abbrevs = u.toDictionary(a, 'name');
});

function getBooks() {
    return u.scope(getBooks.name, context=> {
        u.merge(context, {books});
        u.assert(() => books[0] === 'Genesis');

        return books;
    });
}

function getChapterCount(book) {
    return u.scope(getChapterCount.name, context=> {
        assertIsBook(book);

        let abbrev = getAbbrev(book);

        let counts = verseCounts[abbrev];
        u.merge(context, {b: counts});
        u.assert(() => u.isDefined(counts));
        u.assert(() => u.isArray(counts.chapters));

        return counts.chapters.length;
    });
}

function assertIsBook(book) {
    return u.scope(assertIsBook.name, context=> {
        u.merge(context, {book});
        u.assert(() => u.isDefined(book));
        u.assert(() => u.isString(book));
        u.assert(() => books.includes(book));

        return books;
    });
}

function getAbbrev(book) {
    let abbrev;
    u.scope(getAbbrev.name, context=> {
        assertIsBook(book);

        u.merge(context, {abbrevs});

        let a = abbrevs[book];
        u.merge(context, {a});
        u.assert(() => u.isDefined(a));

        abbrev = a.abbrev;
        u.merge(context, {abbrev});
        u.assert(() => u.isString(abbrev));
    });
    return abbrev;
}

function getVerseRange(book, chapter) {
    return u.scope(getVerseRange.name, context=> {
        u.merge(context, {chapter});
        u.assert(() => u.isInteger(chapter));

        let abbrev = getAbbrev(book);

        u.merge(context, {verseCounts});
        let counts = verseCounts[abbrev];
        u.merge(context, {counts});

        let before = 0;
        let count;
        let found = false;
        u.loop(counts.chapters, (c, index) => {
            if (index === chapter) {
                found = true;
                count = c;
                return true;
            }

            before += c;
        });

        u.merge(context, {found});
        u.assert(found);

        return { before, count };
    });
}

function getVerses(book, chapter) {
    return u.scope(getVerses.name, context=> {
        u.merge(context, {book});
        u.merge(context, {chapter});
        
        u.assert(() => u.isDefined(interlinears[book]));
        u.assert(() => u.isArray(interlinears[book]));

        let bookLength = interlinears[book].length;
        u.merge(context, {bookLength});

        const {before, count} = getVerseRange(book, chapter);

        u.isArray(interlinears[book]);
        
        u.merge(context, {before});
        u.merge(context, {count});

        let r = u.range(count, before);
        u.merge(context, {r});

        let verses = r.map(i => interlinears[book][i]);
        u.merge(context, {verses});

        return verses;
    });
}