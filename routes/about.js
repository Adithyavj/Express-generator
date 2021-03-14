var express = require('express');
var router = express.Router();

/* GET About page. */
router.get('/', function(req, res, next) {
    //res.send('got response')
    res.render('about', { value: 'Aadi' }); //looks for file named index in the view folder
});

module.exports = router;
