const db = require('./config/mongoose');

const express = require('express');
const app = express();
const port = 3030;


app.use(express.json());
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

app.use('/', require('./routes/index'));

app.listen(port, function(err){
    if(err){
        console.log("Error while starting the server: ", err);
    }
    else{
        console.log("Server is Up and running on port ", port);
    }
});