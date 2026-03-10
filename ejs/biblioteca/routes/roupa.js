var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('roupa', { title: 'Roupas bonitas' });
});

module.exports = router;