var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next)
{
  res.render('index');
});

router.get('/home', function(req, res, next)
{
  res.render('index');
});

router.get('/user/:id', function(req, res, next)
{
  res.render('index');
});

router.get('/best', function (req, res, next) {
    res.render('index');
});

router.get('/login', function (req, res, next) {
    res.render('index');
})



module.exports = router;
