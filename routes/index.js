var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/create', function(req, res, next) {
  res.render('create');
});
router.get('/login', function(req, res, next) {
  res.render('login');
});

module.exports = router;
