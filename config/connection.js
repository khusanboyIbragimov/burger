
var mysql = require('mysql');
var connection;

if(process.env.JAWSDB_MARIA_URL){
  connection = mysql.createConnection(process.env.JAWSDB_MARIA_URL);
}
else{
  connection = mysql.createConnection({
    host     : 'localhost',
    port     :  3307,
    user     : 'root',
    password : '', 
    database : 'burgers_db' 
  });
}

module.exports = connection;