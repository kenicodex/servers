var express = require('express');
var router = express.Router();
var { Client } = require('pg');

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});
// client.connect()
router.post("/signup", (req, response) => {
    var get = req.body, insert = `INSERT INTO users (name, email, password) VALUES ('${get.Name}', '${get.Email}', '${get.Password}')`
    const query = {
        name: 'fetch-user',
        text: 'SELECT * FROM users WHERE email = $1',
        values: [get.Email],
      }
    client.query(query, (err, res) => {
        if (res.rowCount > 0) {
                    response.json({
                        status: "error",
                        message:"A user with this email already exist"
                    })
        } else {
            client.query(insert, (err, res) => {
                if (err) {
                    response.json({
                        status: "error",
                        message: err.message
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
router.post("/login", (req, res) => {
    var get = req.body
    res.status(208).json({
        email: get.Email,
        password: get.Password
    })
    console.log(get);
})
module.exports = router;