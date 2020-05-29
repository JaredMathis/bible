const u = require('wlj-utilities');

u.scope(__filename, context => {
    u.merge(context, {step: 'reading'});
    let text = require('./../../data/bibles/el_greek');

    u.merge(context, {step: 'parsing'});
    u.merge(context, {text});

    u.assert(() => u.isArray(text));
    u.assert(text.length === 66);
});