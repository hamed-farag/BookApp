const booksBL = require('../businessLayer/book');
const url = require('url');

exports.api = function(router) {
  router.get('/books', function(req, res) {
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;

    const result = booksBL.getBooks(
      Number(query.pageNumber),
      Number(query.pageSize),
    );
    res.json({ books: result.books, totalCount: result.totalCount });
  });

  router.get('/books/:id', function(req, res) {
    const bookId = req.params.id;
    const book = booksBL.getBookById(bookId);
    res.json({ book: book });
  });

  router.get('/books/search/:query', function(req, res) {
    const query = req.params.query;
    const books = booksBL.searchForBook(query);
    res.json({ books: books });
  });
};
