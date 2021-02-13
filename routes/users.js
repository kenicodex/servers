var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  var steal = req.body.name;
  if(req)
    console.log(steal);
  else 
    console.log("error : " + err);

  res.json({'info':`respond with a resource ${steal}`});

});
module.exports = router;