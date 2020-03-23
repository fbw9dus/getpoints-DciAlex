var express = require('express');
var router = express.Router();

<<<<<<< HEAD

router.get('/', (req, res) =>{
  res.json([{
    user: "fake",
    password: "fake"}])
});

module.exports = router;
=======
router.get('/', function(req, res, next) {
  res.json([{user: 'fake', password: 'fake'}]);
});

module.exports = router;
>>>>>>> part-2
