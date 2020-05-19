const {
    logIndent,
    merge,
} = require('./log');

const {
    assertFileExists,
} = require('./assert');

const fs = require('fs');

module.exports = {
    readFile,
}

function readFile(fileName) {
    return logIndent(readFile.name, context => {
        assertFileExists(fileName);

        merge(context, {fileName});
        let file = fs.readFileSync(fileName, 'utf8');
        return file;
    });
}