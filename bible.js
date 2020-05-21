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
    getChapterCount,
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
    interlinears['Genesis'] = require('./data/interlinear/genesis');
    interlinears['Luke'] = require('./data/interlinear/luke');
    interlinears['John'] = require('./data/interlinear/john');

    let vc = require('./data/bibles/verse-counts');
    verseCounts = toDictionary(vc, 'abbrev');

    books = vc.map(v => v.name);

    abbrevs = require('./data/bibles/abbrevs');
});

function getBooks() {
    return logIndent(getBooks.name, context=> {
        merge(context, {books});
        assert(() => books[0] === 'Genesis');

        return books;
    });
}

function getChapterCount(book) {
    return logIndent(getChapterCount.name, context=> {
        assertIsBook(book);

        let abbrev = getAbbrev(book);

        let counts = verseCounts[abbrev];
        merge(context, {b: counts});
        assert(() => isDefined(counts));
        assert(() => isArray(counts.chapters));

        return counts.chapters.length;
    });
}

function assertIsBook(book) {
    return logIndent(assertIsBook.name, context=> {
        merge(context, {book});
        assert(() => isDefined(book));
        assert(() => isString(book));
        assert(() => books.includes(book));

        return books;
    });
}

function getAbbrev(book) {
    let abbrev;
    logIndent(getAbbrev.name, context=> {
        assertIsBook(book);

        merge(context, {abbrevs});

        let a = abbrevs[book];
        merge(context, {a});
        assert(() => isDefined(a));

        abbrev = a.abbrev;
        merge(context, {abbrev});
        assert(() => isString(abbrev));
    });
    return abbrev;
}

function getVerseRange(book, chapter) {
    return logIndent(getVerseRange.name, context=> {
        merge(context, {chapter});
        assert(() => isInteger(chapter));

        let abbrev = getAbbrev(book);

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