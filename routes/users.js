var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/home', function (req, res, next) {
  console.log("hit")
  res.send('respond with a resource');
});

module.exports = router;
