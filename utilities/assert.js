const {
    logIndent,
    merge,
    consoleLog,
    logProperties,
} = require('./log');

const {
    isUndefined,
    processExit,
} = require('./core');

const fs = require('fs');

module.exports = {
    assert,
    assertFileExists,
};

function assert(b, exitLambda) {
    let log = false;
    if (log) console.log('assert entered');

    if (b === true) {
        if (log) console.log('assert satisified');
        return;
    }
    return logIndent(assert.name, context => {
        consoleLog('assert error');

        merge(context, {b});
        logProperties(context);

        if (isUndefined(exitLambda)) {
            exitLambda = processExit;
        }
        exitLambda();
    });
}

function fileExists(fileName) {
    return fs.existsSync(fileName);
}

function assertFileExists(fileName) {
    return logIndent(assertFileExists.name, context => {
        merge(context, {fileName});
        assert(fileExists(fileName));
    });
}