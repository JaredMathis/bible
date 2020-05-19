const {
    isArray,
    logIndent,
    merge,
    assert,
    readFile,
} = require('../../utilities');

logIndent(__filename, context => {
    merge(context, {step: 'reading'});
    let text = readFile('data/interlinear/john.json');

    merge(context, {step: 'parsing'});
    merge(context, {text});
    // let parsed = JSON.parse(text);

    // assert(isArray(parsed));
    // assert(parsed.length === 66);
});