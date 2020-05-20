const {
    getBooks
} = require('../../bible');

const {
    assertIsEqual,
    assertIsDefined,
    assertIsEqualJson,
} = require('../../utilities/assert')

const {
    logIndent
} = require('../../utilities/log')

logIndent(__filename, context => {
    let books = getBooks();
    
    assertIsDefined(books);
    assertIsEqual(books.length, 66);
    assertIsEqualJson(books[1], {"b":2,"n":"exodus","t":"ot","g":1,"c":40});
})