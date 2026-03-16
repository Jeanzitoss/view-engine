var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('plantas', { title: 'Plantas são bonitas' });
});

/*sub-rota para plantas*/
router.get('/flores', function(req, res, next) {
  res.render('plantas', { title: 'flores são bonitas' });
});

/*sub-rota para plantas*/
router.get('/arvores', function(req, res, next) {
  res.render('plantas', { title: 'arvores são altas' });
});
module.exports = router;
