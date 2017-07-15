let express = require('express');
let router = express.Router();

let db = require('./connection');

let userSQL = require('./userSql');

router.post('/insertUser', (req, res) => {
    db.query(userSQL.insert, [req.body.name, req.body.sex, req.body.age,
         req.body.tel, req.body.mail, req.body.note], function (err, result) {
        if (err) return err;

        res.send('User added to database with ID: ' + result.insertId);
    });
});

module.exports = router;
