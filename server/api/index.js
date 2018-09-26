const bodyParser = require('body-parser');
const express = require('express');

const bookAPI = require('./book');

exports.api = function(expressApp) {
  expressApp.use(bodyParser.urlencoded({ extended: true }));
  expressApp.use(bodyParser.json());

  const router = express.Router();

  bookAPI.api(router);

  expressApp.use('/api', router);
};
