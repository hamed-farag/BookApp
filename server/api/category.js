const categoryBL = require('../businessLayer/category');

exports.api = function(router) {
  router.get('/category', function(req, res) {
    res.json({ categories: categoryBL.getCategories() });
  });
};
