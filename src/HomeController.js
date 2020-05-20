const {
    readFile,
    logIndent,
    merge,
    consoleLog,
    logProperties,
} = require('/utilities/log');

const ctrl = 'HomeController';
angular.module('bible', [])
    .controller(ctrl, function ($scope) {

        logIndent(ctrl, context => {
            merge(context, { step: 'reading' });
            let text = require('./../data/el_greek');

            merge(context, { step: 'parsing' });
            merge(context, { text });
            let parsed = JSON.parse(text);
            logProperties(parsed);
            console.log('here1');
        });
    });