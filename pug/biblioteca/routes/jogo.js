var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('jogo', { title: 'Jogos de ação' });
});

module.exports = router;
