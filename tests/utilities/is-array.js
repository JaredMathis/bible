const {
    isArray,
    assert,
    merge,
    logIndent,
} = require('../../utilities/log');

logIndent(__filename, context => {
    let i = 0;
    merge(context, {i:i++});
    assert(isArray([]));

    merge(context, {i:i++});
    assert(!isArray(1));

    merge(context, {i:i++});
    assert(!isArray('1'));

    merge(context, {i:i++});
    assert(!isArray(null));

    merge(context, {i:i++});
    assert(!isArray(undefined));
})