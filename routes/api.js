var express = require('express');
var router = express.Router();


router.get('/api', (req, res) =>{
  res.json([{
    user: "fake",
    password: "fake"}])
});

module.exports = router;
