const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const _includes = require('lodash/includes');

const adapter = new FileSync('server/database/books.json');
const db = low(adapter);

function getAuthorByName(name) {
  console.log(name);
  //const l = _first(
  const l = db.get('authors').find(function(author) {
    console.log(author.name);
    const founda = _includes(author.name, name);
    return founda;
  }).first();

  //);

  return l;
}

exports.getAuthorByName = getAuthorByName;
