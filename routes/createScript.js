var express = require('express');
var router = express.Router();

var changes = {};

// POST submit script
router.post('/:script', function(req, res) {
  var text = req.params.script;
  res.status(200);
  res.send(text);
});

module.exports = router;