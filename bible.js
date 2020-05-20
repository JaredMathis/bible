const {
    logIndent,
    merge,
    consoleLog,
} = require('./utilities/log');

const {
    loop,
    toDictionary,
} = require('./utilities/tools');

const {
    assert,
    assertAtLeast,
    assertAtMost,
    assertIsDefined,
} = require('./utilities/assert');

const {
    isInteger,
    isArray,
    isDefined,
    processExit,
    range,
    isString,
} = require('./utilities/core');

module.exports = {
    getBooks,
    getVerses,
    getVerseRange,
};

function is1Kings22Quirk(book, chapter) {
    let isQuirk = book === "i_kings" && chapter === 22;
    if (isQuirk) {
        consoleLog('Needs fixing! ' + is1Kings22Quirk.name);
    }
    return isQuirk;
}

let books;
let interlinears = {};
let verseCounts;
let abbrevs;
logIndent(__filename, context=> {
    books = require('./data/books');

    for (let book of books) {
        merge(context, {book});
        let b = require('./data/interlinear/' + book.n);
        interlinears[book.n] = b;
    }

    verseCounts = toDictionary(require('./data/bibles/verse-counts'), 'abbrev');

    abbrevs = require('./data/bibles/abbrevs');
});

function getBooks() {
    return logIndent(getBooks.name, context=> {
        return books;
    });
}

function getVerseRange(book, chapter) {
    return logIndent(getVerseRange.name, context=> {
        merge(context, {chapter});
        assert(() => isInteger(chapter));

        merge(context, {abbrevs});

        let a = abbrevs[book];
        merge(context, {a});
        assert(() => isDefined(a));

        let abbrev = a.abbrev;
        merge(context, {abbrev});
        assert(() => isString(abbrev));

        merge(context, {verseCounts});
        let counts = verseCounts[abbrev];
        merge(context, {counts});

        let before = 0;
        let count;
        let found = false;
        loop(counts.chapters, (c, index) => {
            if (index === chapter) {
                found = true;
                count = c;
                return true;
            }

            before += c;
        });

        merge(context, {found});
        assert(found);

        return { before, count };
    });
}

function getVerses(book, chapter) {
    return logIndent(getVerses.name, context=> {
        merge(context, {book});
        merge(context, {chapter});
        
        assert(() => isDefined(interlinears[book]));
        assert(() => isArray(interlinears[book]));

        let bookLength = interlinears[book].length;
        merge(context, {bookLength});

        const {before, count} = getVerseRange(book, chapter);

        isArray(interlinears[book]);
        
        merge(context, {before});
        merge(context, {count});

        let r = range(count, before);
        merge(context, {r});

        let verses = r.map(i => interlinears[book][i]);
        merge(context, {verses});

        return verses;
    });
}