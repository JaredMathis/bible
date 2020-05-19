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
    let text = require('./../../data/el_greek');

    merge(context, {step: 'parsing'});
    merge(context, {text});
    let parsed = JSON.parse(text);

    assert(isArray(parsed));
    assert(parsed.length === 66);
});