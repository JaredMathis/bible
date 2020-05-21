const { execSync } = require('child_process');

const { 
    logIndent,
    merge,
} = require('./../utilities/log');

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
    browserify ${requires.map(f => '-r ' + f).join(' ')} > web/bundle.js
    `;

    merge(context, {command});
    execSync(command);
})
