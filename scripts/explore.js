const {
    readFile,
    logIndent,
    merge,
    consoleLog,
    logProperties,
} = require('../log');

logIndent(__filename, context => {
    merge(context, {step: 'reading'});
    let text = require('./../data/el_greek');

    merge(context, {step: 'parsing'});
    merge(context, {text});
    let parsed = JSON.parse(text);
    logProperties(parsed);
});