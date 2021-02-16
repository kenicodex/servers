var express = require('express');
var router = express.Router();
var {Client}  = require('pg');

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });
  client.connect();
  client.query('SELECT NOW()', (err, res) => {
    console.log(err, res);
    router.get("/items",function(req,response,next){
        response.send(process.env.DATABASE_URL + "----- " + res)
    })
    client.end()
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
