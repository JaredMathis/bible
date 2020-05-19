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
    let text = readFile('data/interlinear/john.json');
    merge(context, {text});

    merge(context, {step: 'parsing'});
    let parsed = JSON.parse(text);

    merge(context, {step: 'isArray'});
    assert(isArray(parsed));

    merge(context, {step: 'parsed.length'});
    merge(context, {'parsed.length':parsed.length});
    assert(parsed.length === 878);
});