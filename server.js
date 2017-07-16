const express = require("express");
const app = new express;
const  bodyParser = require("body-parser");
const path = require('path');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/'));

const userInsert = require("./server/routers/userInsert");
const userUpdate = require("./server/routers/userUpdate");
const userSelect = require("./server/routers/userSelect");
const userDelete = require("./server/routers/userDelete");
app.use('/',userInsert,userUpdate,userSelect,userDelete);


app.get('/', function (req, res) {
    res.sendFile(path.resolve("./","index.html"));
});


app.listen(3000, () => {
    console.log('server start, listening is 3000');
});

module.exports = app;