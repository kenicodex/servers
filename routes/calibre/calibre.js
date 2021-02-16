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
router.get("/items",function(req,res,next){
    res.send(process.env.DATABASE_URL)
    // res.send("you are on " + req.originalUrl + "\t API");
    // client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
    //     if (err) throw err;
    //     for (let row of res.rows) {
    //       console.log(JSON.stringify(row));
    //     }
    //     client.end();
    //   });

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
