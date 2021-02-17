var express = require('express');
var router = express.Router();

router.post("/signup",(req,res)=>{
    var get = req.body
    console.log(get);
    res.json({
        name : get.Name,
        })
})
router.post("/login",(req,res)=>{
    var get = req.body
    res.json({
        email : get.Email,
        password : get.Password
    })
    console.log(get);
})
module.exports = router;