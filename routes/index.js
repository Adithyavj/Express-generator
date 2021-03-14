var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express-Generated Code' }); //looks for file named index in the view folder
});

module.exports = router;
