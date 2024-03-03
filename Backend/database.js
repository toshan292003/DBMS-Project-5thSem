let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    database: 'testingdb',
    user: 'root',
    password: 'Saman@123',
    
});

module.exports = connection;