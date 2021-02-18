var express = require('express');
var router = express.Router();
var { Client } = require('pg');

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});
client.connect()
router.post("/signup", (req, response) => {
    var get = req.body, insert = `INSERT INTO users (name, email, password) VALUES ('${get.Name}', '${get.Email}', '${get.Password}')`
    const query = `SELECT * FROM users WHERE email = '${get.Email}'`
    client.query(query, (err, res) => {
        if (res.rowCount > 0) {
            response.json({
                status: "error",
                message: "A user with this email already exist"
            })
        } else {
            client.query(insert, (err, res) => {
                if (err) {
                    response.json({
                        status: "error",
                        message: "Try again an error occured"
                    })
                }
                response.json({
                    status: "success",
                    message: "Successful Sign up " + res.rowCount
                })
                client.end();
            })
        }
        client.end()
    })
})
router.post("/login", (req, response) => {
    var get = req.body
    var query = `SELECT * FROM users WHERE email = '${get.Email}' AND password = '${get.Password}'`
    client.query(query, (err, res) => {
        if (err) {
            response.status(404).json({
                status: 'error',
                message: "error : " + err.message
            })
        }
        if (res.rowCount == 1) {
            response.status(208).json({
                status: 'success',
                message: 'successfully signed in' + res.rows[0]
            })
        }
        response.json({
            status: "error",
            message: "Invalid email or password"
        })
        client.end();
    })
})
module.exports = router;