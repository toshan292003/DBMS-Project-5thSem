let express = require('express');
let app = express();
let port = 3003;
let connection = require('./database');
let cors = require('cors');
let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

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
app.get('/tables/parameter',(req,res)=>{
    const sql = "SELECT * FROM testingdb.parameter";
    connection.query(sql,(err,data)=>{
        if(err) return res.json(err);
        else return res.json(data);
    });
});
app.get('/tables/quality',(req,res)=>{
    const sql = "SELECT * FROM testingdb.quallity";
    connection.query(sql,(err,data)=>{
        if(err) return res.json(err);
        else return res.json(data);
    });
});
app.get('/tables/sampling_point',(req,res)=>{
    const sql = "SELECT * FROM testingdb.sampling_point";
    connection.query(sql,(err,data)=>{
        if(err) return res.json(err);
        else return res.json(data);
    });
});



app.listen(port,()=>{
    console.log("Server has started and is running in port number "+port);
    connection.connect((err)=>{
        if(err){y
            console.log(err);
        }
        else{
            console.log("DB connected.");
        }
    })
})

module.exports = port;