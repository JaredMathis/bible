const {
    getBooks
} = require('../../bible');

const u = require('wlj-utilities');

u.scope(__filename, context => {
    let books = getBooks();
    
    u.assertIsDefined(books);
    u.assertIsEqual(books.length, 66);
    u.assertIsEqualJson(books[1], "Exodus");
})