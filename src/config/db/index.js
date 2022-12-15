var mysql = require('mysql');

var connect = mysql.createConnection({
    host: 'remotemysql.com',
    user: 'tO1VyhllfB',
    password: '81BP4GtbO6',
    database: 'tO1VyhllfB'
});

  connect.connect(function (err) {
    if(err) console.log("ket noi that bai");
    else console.log("ket noi thanh cong");
});

module.exports = connect;

