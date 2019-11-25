
const express = require('express');
const mysql = require('mysql');
//const path = require('path');
const cors = require('cors');
const app = express();
const port = 5000;
app.use(cors({origin:'*'}));
app.use(express.json())
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'myadminsitedb'
});


connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

//CHECK THE LOGIN
app.post('/login', (req, res) => {
    let sqlQuery = `SELECT * FROM users WHERE userName="${req.body.username}" AND password="${req.body.password}"`;
    connection.query(sqlQuery, (error, results) => {
        if (error) throw error;
        console.log('results is: ', results);
        if (results.length > 0) {  
            res.json({result :"Success"});        
        } else {
            res.json({result:"Error"});
        }
    })
})


//GET ALL USERS
app.get('/users', (req, res) => {
    connection.query('SELECT * FROM users', (error, results) => {
        res.json(results);
    })
})

//GET SINGLE USER by ID
app.get('/users/:ID', (req, res) => {
    connection.query(`SELECT * FROM users WHERE ID =${parseInt(req.params.ID)}`, (error, results) => {
        res.json(results);
        console.log(results);
    })
})

//INSERT USER
app.post('/register', (req, res) => {
    let sqlQuery = `INSERT INTO users(userName, password) VALUES ('${req.body.username}', '${req.body.password}')`;
    connection.query(sqlQuery,(error, results) => {
        console.log(results);
        if(results.affectedRows === 0){
            res.json({result :"Error"});
        }else{
            res.json({result :"Success"})
        }   
    })
})





app.listen(port, () => console.log('server is running'));//listen to my port and them console.log
