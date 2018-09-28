const authorDL = require('../dataLayer/author');


exports.getAuthors = function(){
  return authorDL.getAuthors();
}
