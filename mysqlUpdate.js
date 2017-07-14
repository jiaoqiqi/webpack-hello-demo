const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "test"
});

connection.connect();

const modSql = "update user set sex=?,age=?,tel=?,mail=?,note=? where name = ?";
const modSqlParams = ["woman",32,"345678","ndsajvn@qq.com","adsvfadsv","li"];

connection.query(modSql,modSqlParams,function (err, result) {
    if(err){
        console.log('[UPDATE ERROR] - ',err.message);
        return;
    }
    console.log('--------------------------UPDATE----------------------------');
    console.log('UPDATE affectedRows',result.affectedRows);
    console.log('-----------------------------------------------------------------\n\n');
});
connection.end();