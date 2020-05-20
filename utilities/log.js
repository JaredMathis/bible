const {
    processExit,
    isUndefined,
} = require('./core');

module.exports = {
    logIndent,
    consoleLog,
    merge,
    logProperties,
}

// TODO: Validate arguments of framework

let indent = 0;

let context = {};

/**
 * Does something special with undefined.
 * @param {*} a 
 * @param {*} b 
 */
function merge(a, b) {
    for (let key in b) {
        a[key] = b[key];
        if (isUndefined(a[key])) {
            a[key] = '[undefined]';
        }
    }
}

function isString(o) {
    return o.toString() === o;
}

function getPrefix() {
    let tab = "  ";
    let prefix = "";
    for (let i = 0; i < indent; i++) {
        prefix += tab;
    }
    return prefix;
}

function truncateStringTo(string, maxCharacters) {
    let ellipses = "...";
    if (string.length > maxCharacters) {
        string = string.substring(0, maxCharacters - ellipses.length);
        string += ellipses;
    }
    return string;
}

/**
 * Does something special if the property name is "parent".
 */
function logProperties(object) {
    let parent = 'parent';

    let log = false;
    if (log) console.log('logProperties entered', {object});

    let prefix = getPrefix();

    if (object.hasOwnProperty(parent)) {
        logProperties(object.parent);
        console.log(prefix + '--parent');
    }

    const maxCharacters = 120;
    for (let property in object) {
        if (property === parent) {
            continue;
        }

        let o = {};
        o[property] = object[property];

        let json = JSON.stringify(o);
        if (log) console.log('logProperties', {json});

        let trimmed = truncateStringTo(json, maxCharacters);
        console.log(prefix + trimmed);
    }    
}

function logIndent(name, lambda) {
    let log = false;
    if (log) console.log('logIndent entered');

    consoleLog(name + " entered");

    let result;

    indent++;
    let oldContext = context;
    newContext = {};
    newContext.parent = oldContext;
    context = newContext;
    try {
        result = lambda(context);
    } catch (e) {
        console.log('logIndent error');
        logProperties(context);
        console.log(e);
        processExit();
    }
    context = oldContext;
    indent--;

    consoleLog(name + " leaving");

    return result;
}

function consoleLog(message) {
    let log = false;
    let verbose = false;
    if (log) console.log('consoleLog entered');

    if (indent < 0) {
        if (verbose)
        if (log) console.log('indent negative');
        console.log('consoleLog error');
        console.log('need to call consoleLog inside logIndent');
        processExit();
    } else {
        if (verbose)
        if (log) console.log('indent not negative');
    }

    if (isString(message)) {
        if (verbose)
        if (log) console.log('message is string');
        let prefix = getPrefix();
        if (log) prefix = "message: " + prefix;
        console.log(prefix + message);

    } else {
        if (log) console.log('message is not string');
        logProperties(message);
    }

    
    if (log) console.log('consoleLog leaving');
}