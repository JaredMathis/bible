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
    const directory = './data';

    const files = getFiles(directory)
        // Only include json files
        .filter(f => f.endsWith('.json'));
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

        // Delete json file
        fs.unlinkSync(fPath);

        consoleLog('processed');
        consoleLog({newPath});
    }
});