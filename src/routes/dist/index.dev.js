"use strict";

var express = require("express");

var router = express.Router();

module.exports = function (app) {
  console.log('hello from index page');
  router.get('/r', function (req, res) {
    res.status(200).send('hello from post api');
  });
};