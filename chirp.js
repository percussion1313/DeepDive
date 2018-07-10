const mysql = require('mysql');

let connection = mysql.createConnection(
    {
        host: 'localhost',
        database: 'chirpr',
        user: 'chirprapp',
        password: 'password1234'
    }
);

connection.connect();

connection.query('SELECT * FROM CHIRPS', (err, results, fields) => {
    if(err) {
        connection.end();
        return console.log(err);
    
    }
    console.log(results);
    connection.end();
});