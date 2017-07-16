const express = require("express");
const app = new express;
const db = require("./connection.js");
const  bodyParser = require("body-parser");
const path = require('path');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/'));

const userInsert = require("./userInsert");
const userUpdate = require("./userUpdate");
const userSelect = require("./userSelect");
const userDelete = require("./userDelete");
app.use('/',userInsert,userUpdate,userSelect,userDelete);


// const selectSQL = 'select * from user';
// const arr = [];
// db.query(selectSQL, function(err, rows) {
//     if (err) throw err;
//     for (var i = 0; i < rows.length; i++) {
//         arr[i] = rows[i].name;
//     }
//     //把搜索值输出
//     app.get('/', function (req, res) {
//         res.send(arr);
//     });
// });

app.get('/', function (req, res) {
    res.sendFile(path.resolve("./index.html"));
});


app.listen(3000, () => {
    console.log('server start, listening is 3000');
});

module.exports = app;