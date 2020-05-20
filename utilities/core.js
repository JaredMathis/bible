/**
 * These functions have no dependencies
 */

module.exports = {
    processExit,
    isEqualJson,
    isArray,
    isUndefined,
    isDefined,
}

function isArray(a) {
    return Array.isArray(a);
}

function processExit() {
    console.log('Calling process.exit(1)');
    process.exit(1);
}

function isEqualJson(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
}

function isUndefined(a) {
    return typeof a === 'undefined';
}

function isDefined(a) {
    return !isUndefined(a);
}