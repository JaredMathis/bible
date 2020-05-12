const {
    consoleLog,
    assert,
    isEqualJson,
} = require('../../utilities');

const oldConsoleLog = console.log;

// Set this to true to troubleshoot this file.
let outputLogs = false;

let logs;

function log(m) {
    logs.push(m);
    if (outputLogs) oldConsoleLog(m);
}

let exitMessage = __filename + ': exiting';

logs = [];
console.log = log;
assert(true, () => console.log('exiting'));
console.log = oldConsoleLog;

assert(!logs.includes(exitMessage));

logs = [];
console.log = log;
assert(false, () => console.log(exitMessage));
console.log = oldConsoleLog;

assert(logs.includes(exitMessage));