const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const { 
    logIndent,
    merge,
} = require('./utilities/log');

require('./scripts/verse-counts');
require('./scripts/json-to-js');
require('./scripts/copy-el_greek.safe');
require('./scripts/abbrevs');

require('./test');

logIndent(__filename, context => {
    const requires = [
        './utilities/assert',
        './utilities/core',
        './utilities/file',
        './utilities/log',
        './data/interlinear/genesis',
        './data/interlinear/john',
        './bible',
    ];
    
    let command = `
    browserify ${requires.map(f => '-r ' + f).join(' ')} > src/bundle.js
    `;

    executeCommand(command);

    const jsons = [
        //'./data/interlinear/john.json',
    ];

    for (let j of jsons) {
        const from = j;
        const dest = path.join('./src', from);
        merge(context, {from});
        merge(context, {dest});
        merge(context, {fileExists:fs.existsSync(from)});
        // TODO: Ensure destination folder exists.
        fs.copyFileSync(from, dest);
    }

    function executeCommand(command) {
        merge(context, {command});
        execSync(command);
    }
})
