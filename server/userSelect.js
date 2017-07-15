let express = require('express');
let router = express.Router();

let db = require('./connection');

let userSQL = require('./userSql');

router.get('/userSelect', (req, res) => {
    db.query(userSQL.insert, [req.body.id,req.body.name, req.body.sex, req.body.age,
        req.body.tel, req.body.mail, req.body.note], function (err, result) {
        if (err) return err;

        res.send('User selected to database');
    });
});


module.exports = router;
