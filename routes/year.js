var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function( req, res, next) {
  const year = new Date().getFullYear().toString();
  res.json({year});
});

module.exports = router;