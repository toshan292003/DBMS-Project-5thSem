let mysql = require('mysql2');

let connection = mysql.createConnection({
    host: 'localhost',
    database: 'testingdb',
    user: 'root',
    password: 'Saman@123',
});

connection.connect((err)=>{
    if(err){y
        console.log(err);
    }
    else{
        console.log("DB connected.");
    }
})

module.exports = connection;