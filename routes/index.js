var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/error.ejs', function(req, res, next) {
  res.render('index');
});

router.get('/:folder/:file', function(req, res, next) {
  res.render(`${req.params.folder}/${req.params.file}`);
});

router.get('/Academics/:subfolder/:file', function(req, res, next) {
  res.render(`Academics/${req.params.subfolder}/${req.params.file}`);
});







module.exports = router;
