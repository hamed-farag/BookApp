const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const _includes = require('lodash/includes');

const adapter = new FileSync('server/database/books.json');
const db = low(adapter);

function get(collectionName) {
  return db.get(collectionName);
}


exports.get = get;
