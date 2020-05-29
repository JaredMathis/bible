const {
    getVerseRange,
} = require('../../bible');

const u = require('wlj-utilities');

u.scope(__filename, context => {
    let vr;
    vr = getVerseRange('John', 0);
    u.merge(context, {vr});
    u.assert(() => u.isEqualJson(vr, {before: 0, count:51}));

    vr = getVerseRange('John', 1);
    u.merge(context, {vr});
    u.assert(() => u.isEqualJson(vr, {before: 51, count:25}));
});