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

logIndent(__filename, () => {
    const directory = './data/books';

    let files = getFiles(directory);

    let directories = [];
    for (let f of files) {
        let d = path.join(directory, f);
        let isDirectory = fs.lstatSync(d).isDirectory();
        if (isDirectory) {
            directories.push(d);
        }
    }

    for (let directory of directories) {
        files = getFiles(directory)
            // Only include json files
            .filter(f => f.endsWith('.json'));

        consoleLog({ files });
        if (files.length === 0) {
            consoleLog('no files to process');
        }
        for (let f of files) {
            let fPath = path.join(directory, f);
            let contents = readFile(fPath);

            contents = `
    let text = \`
        ${contents}
        \`;
    module.exports = text;
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

            consoleLog('processed');
            consoleLog({ newPath });
        }
    }
});