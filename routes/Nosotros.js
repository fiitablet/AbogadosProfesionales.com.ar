var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('Nosotros', {
        isNosotros:true
    }); // es nosotros en hbs y asi enc/u
});

module.exports = router;
