const {
    logIndent,
    merge,
    consoleLog,
    logProperties,
} = require('./log');

const {
    isDefined,
    isUndefined,
    processExit,
} = require('./core');

const fs = require('fs');

module.exports = {
    assert,
    assertFileExists,
    assertIsEqual,
    assertIsDefined,
};

function assert(b, exitLambda) {
    return logIndent(assert.name, context => {
        let log = false;
        if (log) console.log('assert entered');

        if (b === true) {
            if (log) console.log('assert satisified');
            return;
        }

        merge(context, {b});
        return assertError(exitLambda);
    });
}

function assertError(exitLambda) {
    return logIndent(assertError.name, context => {
        consoleLog('assert error');

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

function assertIsDefined(a) {
    return logIndent(assertIsDefined.name, context => {
        merge(context, {a});
        return assert(isDefined(a));
    });
}

function assertIsEqual(left, right) {
    return logIndent(assertIsEqual.name, context => {
        merge(context, {left});
        assertIsDefined(left);

        merge(context, {right});
        assertIsDefined(right);

        let equals = left === right;
        if (equals) {
            return;
        }
        return assertError();
    });
}