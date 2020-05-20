const {
    logIndent,
    merge,
} = require('../../utilities/log');

const {
    isArray,
    isEqualJson,
} = require('../../utilities/core');

const {
    assert,
} = require('../../utilities/assert');

logIndent(__filename, context => {
    merge(context, {step: 'reading'});
    let text = require('./../../data/bibles/el_greek');

    merge(context, {step: 'parsing'});
    merge(context, {text});

    assert(isArray(text));
    assert(text.length === 66);
});