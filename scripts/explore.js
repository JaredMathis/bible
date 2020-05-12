const {
    readFile,
    logIndent,
    merge,
    consoleLog,
} = require('../utilities');

logIndent(__filename, context => {
    merge(context, {step: 'reading'});
    let text = readFile('data/el_greek.json');

    merge(context, {step: 'parsing'});
    merge(context, {text});
    text = "{\"abbrev\": \"gn\", \"chapters\": [[\"Εν\"]]}";
    let json = JSON.parse(text);
    consoleLog({a:1});
});


//console.log({ json });