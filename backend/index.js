const express = require('express');
const app = express();
const port = 3000;



app.listen(port, function(err){
    if(err){
        console.log("Error while starting the server: ", err);
    }
    else{
        console.log("Server is Up and running on port ", port);
    }
})