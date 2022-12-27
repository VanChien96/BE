var mysql = require('mysql');

var connect = mysql.createConnection({
    host: 'sql6.freesqldatabase.com',
    user: 'sql6586700',
    password: '9KPwM132Cg',
    database: 'sql6586700'
});

  connect.connect(function (err) {
    if(err) console.log("ket noi that bai");
    else console.log("ket noi thanh cong");
});

module.exports = connect;