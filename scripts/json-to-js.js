/**
 * When using browserify,
 * when calling require,
 * when it's a json file
 * doesn't seem to work.
 * 
 * Making the JSON file a thinly-wrapped JavaScript file
 * works.
 * 
 * That's what this script does.
 */

const {
    logIndent,
    consoleLog,
} = require('../utilities/log');

const {
    getFiles,
    readFile,
} = require('../utilities/file');

const {
    assertFileExists,
} = require('../utilities/assert');

const path = require('path');
const fs = require('fs');

const log = false;

logIndent(__filename, () => {

    const directory = './data';

    processDirectory(directory);
});

function processDirectory(directory) {
    if (log) consoleLog({directory});
    let files = getFiles(directory);

    for (let f of files) {
        let d = path.join(directory, f);
        let isDirectory = fs.lstatSync(d).isDirectory();
        if (isDirectory) {
            processDirectory(d);
        } else {
            processFile(directory, f);
        }
    }
}

function processFile(directory, f) {
    if (!f.endsWith('.json')) {
        if (log) consoleLog('skipping ' + path.join(directory, f));
        return;
    }
    let fPath = path.join(directory, f);
    let contents = readFile(fPath);

    contents = `
let json = \`
${contents}
\`;
let parsed = JSON.parse(json);
module.exports = parsed;
`;

    // Write the output to a .js file
    let base = path.basename(fPath, '.json');
    let newPath = path.join(directory, base + '.js');
    fs.writeFileSync(newPath, contents);

    // Probably best to leave original file
    let deleteOriginalFile = false;
    if (deleteOriginalFile) {
        // Delete json file
        fs.unlinkSync(fPath);
    }

    if (log) consoleLog('processed');
    if (log) consoleLog({ newPath });
}