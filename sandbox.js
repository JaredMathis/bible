const {
    readFile,
    u.scope,
    merge,
    console.log,
    logProperties,
} = require('./utilities/log');

u.scope(__filename, context => {
    let text = require('./data/interlinear/john');

    console.log({text})
});