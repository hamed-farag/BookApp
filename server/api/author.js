const authorBL = require('../businessLayer/author');

exports.api = function(router) {
  router.get('/author', function(req, res) {
    res.json({ authors: authorBL.getAuthors() });
  });
};
