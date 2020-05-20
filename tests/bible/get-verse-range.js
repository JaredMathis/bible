const {
    getVerseRange,
} = require('../../bible');

const {
    assert,
} = require('../../utilities/assert')

const {
    isEqualJson,
} = require('../../utilities/core')

const {
    logIndent,
    merge,
} = require('../../utilities/log')

logIndent(__filename, context => {
    let vr;
    vr = getVerseRange('John', 0);
    merge(context, {vr});
    assert(() => isEqualJson(vr, {before: 0, count:51}));

    vr = getVerseRange('John', 1);
    merge(context, {vr});
    assert(() => isEqualJson(vr, {before: 51, count:25}));
});