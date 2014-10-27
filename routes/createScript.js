var express = require('express');
var router = express.Router();

// POST submit script
router.post('/', function(req, res) {
  var output = eval(req.body.scriptBody);
  res.render('index', {scriptResult: output});
});

module.exports = router;