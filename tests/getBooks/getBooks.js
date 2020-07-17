
const u = require("wlj-utilities");

const getBooks = require("../../library/getBooks.js");

u.scope(__filename, x => {
    let books = getBooks();
    
    u.assert(() => u.isDefined(books));
    u.assertIsEqual(books.length, 66);
    u.assertIsEqualJson(books[1], "Exodus");
});
