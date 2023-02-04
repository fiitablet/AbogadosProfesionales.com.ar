var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('Especialidades', {
        isNovedades:true
    }); // enlaza con Especialidades de HBS
});

module.exports = router;
