var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
<<<<<<< HEAD
  res.status(200).render('index', { title: 'Express' });
=======
  res.render('index', { title: 'Express' });
>>>>>>> part-2
});

module.exports = router;
