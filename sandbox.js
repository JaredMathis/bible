const {
    readFile,
    logIndent,
    merge,
    consoleLog,
    logProperties,
} = require('./utilities/log');

logIndent(__filename, context => {
    let text = require('./data/interlinear/john');

    consoleLog({text})
});