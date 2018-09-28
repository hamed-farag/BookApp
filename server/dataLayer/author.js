const baseDL = require('./base');

const collectioName = 'authors';

function getAuthors() {
  return baseDL.get(collectioName).map(function(e) {
    return { id: e.id, name: e.name };
  });
}

function getAuthorByName(name) {
  console.log(name);
  //const l = _first(
  const l = db
    .get('authors')
    .find(function(author) {
      console.log(author.name);
      const founda = _includes(author.name, name);
      return founda;
    })
    .first();

  //);

  return l;
}

exports.getAuthorByName = getAuthorByName;
exports.getAuthors = getAuthors;
