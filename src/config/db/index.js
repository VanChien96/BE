var mysql = require('mysql');

var connect = mysql.createPool({
  connectionLimit : 1000,
  connectTimeout  : 60 * 60 * 1000,
  acquireTimeout  : 60 * 60 * 1000,
  timeout         : 60 * 60 * 1000,
    host: 'sql6.freesqldatabase.com',
    user: 'sql6586700',
    password: '9KPwM132Cg',
    database: 'sql6586700'
});

connect.query('select 1 + 1', (err, rows) => { /* */ });


// var connect = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'pbl6'
// });

  // connect.connect(function (err) {
//     if(err) console.log("ket noi that bai");
//     else console.log("ket noi thanh cong");
// });

module.exports = connect;

