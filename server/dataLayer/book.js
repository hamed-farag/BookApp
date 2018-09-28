const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const _includes = require('lodash/includes');

const adapter = new FileSync('server/database/books.json');
const db = low(adapter);

const authorDL = require('./author');
const categoryDL = require('./category');

const collectionName = 'books';

function getBooks(pageNumber, pageSize) {
  const books = db.get(collectionName);
  const filterdBooks = books.slice(
    pageNumber * pageSize,
    (pageNumber + 1) * pageSize,
  );

  const fullInfoBooks = filterdBooks.map(function(book) {
    const category = categoryDL.getCategoryById(book.category);
    const author = authorDL.getAuthorById(book.author);

    book.authorName = author.name;
    book.categoryName = category.name;

    return book;
  });

  return {
    totalCount: books.size().value(),
    books: fullInfoBooks,
  };
}

function getBookById(id) {
  const book = db
    .get(collectionName)
    .find({ id: id })
    .value();
  const category = categoryDL.getCategoryById(book.category);
  const author = authorDL.getAuthorById(book.author);

  book.authorName = author.name;
  book.categoryName = category.name;

  return book;
}

function searchForBook(query) {
  const author = authorDL.getAuthorByName(query);
  const authorId = author && author.id;

  const _query = authorId || query;

  return db.get(collectionName).find(function(book) {
    return (
      _includes(book.title, _query) ||
      _includes(book.author, _query) ||
      _includes(book.isbn, _query)
    );
  });
}

function addBook(book) {
  db.get(collectionName)
    .push(book)
    .write();
}

exports.getBooks = getBooks;
exports.getBookById = getBookById;
exports.searchForBook = searchForBook;
exports.addBook = addBook;
