const {
    readFile,
    logIndent,
    merge,
    consoleLog,
    logProperties,
} = require('../utilities/log');

logIndent(__filename, context => {
    merge(context, {step: 'reading'});
    let text = require('./../data/interlinear/john');

    merge(context, {step: 'parsing'});
    merge(context, {text});
    let parsed = JSON.parse(text);
    logProperties(parsed);
});