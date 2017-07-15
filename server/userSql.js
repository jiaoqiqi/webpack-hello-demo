let UserSQL = {

    insert: 'insert  user(id,name,sex,age,tel,mail,note) values (null,?,?,?,?,?,?)',
    queryAll: 'select * from user',
    update:'update user set name=?,sex=?,age=?,tel=?,mail=?,note=? where id = ?',
    delete: 'delete from user where id=?',
    queryById: 'select * from user where id=?',
};

module.exports = UserSQL;
