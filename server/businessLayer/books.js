const booksDL = require('../dataLayer/books');

exports.getBooks = function(pageNumber, pageSize) {
  return booksDL.getBooks(pageNumber, pageSize);
};

exports.getBookById = function(id) {
  if (id) {
    return booksDL.getBookById(id);
  }
  return null;
};

exports.searchForBook = function(query) {
  if (query) {
    return booksDL.searchForBook(query);
  }
  return null;
};
