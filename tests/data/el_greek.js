const {
    isArray,
    logIndent,
    merge,
    isEqualJson,
} = require('../../utilities');

const {
    assert,
} = require('../../assert');

logIndent(__filename, context => {
    merge(context, {step: 'reading'});
    let text = require('./../../data/el_greek');

    merge(context, {step: 'parsing'});
    merge(context, {text});
    let parsed = JSON.parse(text);

    assert(isArray(parsed));
    assert(parsed.length === 66);
});