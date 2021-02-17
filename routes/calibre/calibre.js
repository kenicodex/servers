var express = require('express');
var router = express.Router();
var {Client}  = require('pg');
/*
const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });
  const table = "SELECT table_schema,users FROM information_schema.tables;"
  client.connect();
  client.query(table, (err, res) => {
    router.get('/db',(req,res)=>{
        if (err) {
            console.error(err);
            res.send(err)
            return;
        }
    })
    console.log('Table is successfully created');
    res.send("table created");
    client.end();
});
*/
router.get("/item",function(req,res,next){
    res.send("you are on " + req.originalUrl + "\t API");
})
router.get("/add",function(req,res,next){
    res.send("you are on " + req.originalUrl + "\t API");
})
router.get("/edit",function(req,res,next){
    res.send("you are on " + req.originalUrl + "\t API");
})
router.get("/delete",function(req,res,next){
    res.send("you are on " + req.originalUrl + "\t API");
})
module.exports = router;
