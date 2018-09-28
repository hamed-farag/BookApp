const bodyParser = require('body-parser');
const express = require('express');

const bookAPI = require('./book');
const authorAPI = require('./author');
const categoryAPI = require('./category');

exports.api = function(expressApp) {
  expressApp.use(bodyParser.urlencoded({ extended: true }));
  expressApp.use(bodyParser.json());

  const router = express.Router();

  bookAPI.api(router);
  authorAPI.api(router);
  categoryAPI.api(router);

  expressApp.use('/api', router);
};
