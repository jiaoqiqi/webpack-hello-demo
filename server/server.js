const express = require("express");
const app = new express;
// const db = require("./connection.js");
const  bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/'));

const userInsert = require("./userInsert");
const userUpdate = require("./userUpdate");
app.use('/',userUpdate);

app.listen(3000, () => {
    console.log('server start, listening is 3000');
});

module.exports = app;