var express = require('express');
var router = express.Router();
var {Client}  = require('pg');

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });
  const table = "SELECT * FROM users "
  client.connect();
  router.get('/users',(req,resp)=>{
  client.query(table, (err, res) => {
        if (err) {
            console.error(err);
            resp.send(err)
            return;
        }
        resp.json(res.rows);
        client.end();
    })
});

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
