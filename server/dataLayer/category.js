const baseDL = require('./base');

const collectioName = 'categories';

function getCategories() {
  return baseDL.get(collectioName).map(function(e) {
    return { id: e.id, name: e.name };
  });
}


exports.getCategories = getCategories;
