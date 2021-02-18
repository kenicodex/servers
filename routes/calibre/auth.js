var express = require('express');
var router = express.Router();
var { Client } = require('pg');

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});
router.post("/signup", (req, response) => {
    var get = req.body, insert = `INSERT INTO users (name, email, password) VALUES ('${get.Name}', '${get.Email}', '${get.Password}')`
    try {
        client.query(insert, (req, res) => {
            // check if user exist 
            response.json({
                status: "success",
                message: "Successful Sign up"
            })
            console.log(insert);
            client.end();
        })
    } catch (error) {
        response.status(201).json({
            status: "error",
            message: "Server Error! Please try again or contact us : " + error
        })
        console.log(error);
    }
})
router.post("/login", (req, res) => {
    var get = req.body
    res.status(208).json({
        email: get.Email,
        password: get.Password
    })
    console.log(get);
})
module.exports = router;