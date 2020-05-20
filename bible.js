const {
    logIndent
} = require('./utilities/log');

module.exports = {
    getBooks
};

let books = JSON.parse(require('./data/books'));

function getBooks() {
    return logIndent(getBooks.name, context=> {
        return books;
    });
}