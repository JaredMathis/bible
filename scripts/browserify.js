const { execSync } = require('child_process');

const u = require('wlj-utilities');

u.scope(__filename, context => {
    const requires = [
        'wlj-utilities',
        './data/interlinear/genesis',
        './data/interlinear/john',
        './bible',
    ];
    
    let command = `
    browserify ${requires.map(f => '-r ' + f).join(' ')} > web/bundle.js
    `;

    u.merge(context, {command});
    execSync(command);
})
