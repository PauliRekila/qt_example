const mysql = require('mysql');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'qt_example'
});
module.exports = connection;