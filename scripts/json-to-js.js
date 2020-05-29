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
const u = require('wlj-utilities');

const path = require('path');
const fs = require('fs');

const log = false;

u.scope(__filename, () => {

    const directory = './data';

    processDirectory(directory);
});

function processDirectory(directory) {
    if (log) console.log({directory});
    let files = u.getFiles(directory);

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
        if (log) console.log('skipping ' + path.join(directory, f));
        return;
    }
    let fPath = path.join(directory, f);
    let contents = u.readFile(fPath);

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

    if (log) console.log('processed');
    if (log) console.log({ newPath });
}