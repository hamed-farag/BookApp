const booksBL = require('../businessLayer/books');

exports.api = function(router) {
  router.get('/books', function(req, res) {
    const books = booksBL.getBooks();
    res.json({ books: books });
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
