let express = require('express');
let router = express.Router();

let db = require('./connection');

let userSQL = require('./userSql');

router.post('/userUpdate', (req, res) => {
    db.query(userSQL.update, [req.body.name, req.body.sex, req.body.age,
        req.body.tel, req.body.mail, req.body.note,req.body.id], function (err, result) {
        if (err) return err;

        res.send('User updated to database with ID: ' + result.insertId);
    });
});


module.exports = router;
