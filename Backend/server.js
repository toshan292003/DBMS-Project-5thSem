let express = require('express');
let app = express();
let port = 3000;
let connection = require('./database');

app.get('/',(req,res)=>{
    res.send("Hello this is the backend server.");
    console.log(req);
})

app.listen(port,()=>{
    console.log("Server has started and is running in port number "+port);
    connection.connect((err)=>{
        if(err){
            throw err;
        }
        else{
            console.log("DB connected.");
        }
    })
})