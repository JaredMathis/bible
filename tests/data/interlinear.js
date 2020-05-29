const u = require('wlj-utilities');

u.scope(__filename, context => {
    u.merge(context, {step: 'reading'});
    let text = require('./../../data/interlinear/john');
    u.merge(context, {text});

    u.merge(context, {step: 'isArray'});
    u.assert(() => u.isArray(text));

    u.merge(context, {step: 'parsed.length'});
    u.merge(context, {'text.length':text.length});
    u.assert(text.length === 878);
});