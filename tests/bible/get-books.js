const {
    getBooks
} = require('../../bible');

const {
    assertIsEqual,
    assertIsDefined,
} = require('../../utilities/assert')

const {
    logIndent
} = require('../../utilities/log')

logIndent(__filename, context => {
    let books = getBooks();
    
    assertIsDefined(books);
    assertIsEqual(books.length, 66);
})