
const u = require("wlj-utilities");
const books = require('../generated/books');

module.exports = getBooks;

function getBooks() {
    let result;
    u.scope(getBooks.name, x => {
        result = books;
    });
    return result;
}
