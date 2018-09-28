const categoryDL = require('../dataLayer/category');

exports.getCategories = function() {
  return categoryDL.getCategories();
};
