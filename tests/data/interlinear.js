const {
    isArray,
    logIndent,
    merge,
} = require('../../utilities');

const {
    assert,
} = require('../../assert');

const {
    readFile,
} = require('../../file');

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