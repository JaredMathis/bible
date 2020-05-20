const {
    logIndent,
    merge,
} = require('../../utilities/log');

const {
    isArray,
} = require('../../utilities/core');

const {
    assert,
} = require('../../utilities/assert');

const {
    readFile,
} = require('../../utilities/file');

logIndent(__filename, context => {
    merge(context, {step: 'reading'});
    let text = require('./../../data/interlinear/john');
    merge(context, {text});

    merge(context, {step: 'isArray'});
    assert(isArray(text));

    merge(context, {step: 'parsed.length'});
    merge(context, {'text.length':text.length});
    assert(text.length === 878);
});