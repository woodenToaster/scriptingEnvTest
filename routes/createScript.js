var express = require('express');
var router = express.Router();

var changes = {};

// POST submit script
router.post('/', function(req, res) {
  var tokens = req.body.scriptBody.split(' ');
  changes[tokens[0]] = tokens[2];
  res.render('index', {
  	scriptResult: 'null',
  	text: req.body.scriptBody
  });
});

module.exports = router;