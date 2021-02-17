var express = require('express');
var router = express.Router();
var { Client } = require('pg');

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});
router.post("/signup", (req, res) => {
    var get = req.body
    var insert = `INSERT INTO users (name, email, password)
    VALUES (${get.Name}, ${get.Email}, ${get.Password})`
    client.query(insert, (req, res) => {
        if (err) {
            console.error(err);
            res.json({
                status : "error",
                message : "A error occured"
            })
            return;
        }
        res.json({
            status: "success",
            message : "Successful signup"
        })
        client.end();
    })
})
router.post("/login", (req, res) => {
    var get = req.body
    res.json({
        email: get.Email,
        password: get.Password
    })
    console.log(get);
})
module.exports = router;