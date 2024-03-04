let express = require('express');
let app = express();
let port = 3001;
let connection = require('./database');
let cors = require('cors');

app.use(cors());

app.get('/',(req,res)=>{
    res.send("Hello this is the backend server.");
    console.log(req);
    return res.json("From backend side.");
})

app.get('/tables/location',(req,res)=>{
    const sql = "SELECT * FROM testingdb.location";
    connection.query(sql,(err,data)=>{
        if(err) return res.json(err);
        else return res.json(data);
    });
});

app.get('/tables/measurement',(req,res)=>{
    const sql = "SELECT * FROM testingdb.measurement";
    connection.query(sql,(err,data)=>{
        if(err) return res.json(err);
        else return res.json(data);
    });
});

app.listen(port,()=>{
    console.log("Server has started and is running in port number "+port);
    connection.connect((err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("DB connected.");
        }
    })
})