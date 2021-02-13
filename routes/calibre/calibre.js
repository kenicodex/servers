var express = require('express');
var router = express.Router();

router.get("/items",function(req,res,next){
    res.send("you are on " + req.originalUrl + "\t API");
})
router.get("/item",function(req,res,next){
    res.send("you are on " + req.originalUrl + "\t API");
})
router.get("/add",function(req,res,next){
    res.send("you are on " + req.originalUrl + "\t API");
})
router.get("/edit",function(req,res,next){
    res.send("you are on " + req.originalUrl + "\t API");
})
module.exports = router;
