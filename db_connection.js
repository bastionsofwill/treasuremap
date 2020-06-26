console.log("db_connection.js loaded")
var mysql       = require('mysql');
var connection  = mysql.createConnection({
    host    : '127.0.0.1',
    user    : 'root',
    password: 'test0608'
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting:' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});