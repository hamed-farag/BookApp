const baseDL = require('./base');

const collectioName = 'categories';

function getCategories() {
  return baseDL.get(collectioName).map(function(e) {
    return { id: e.id, name: e.name };
  });
}

function getCategoryById(id) {
  return baseDL.get(collectioName).find({ id: id }).value();
}

exports.getCategories = getCategories;
exports.getCategoryById = getCategoryById;
