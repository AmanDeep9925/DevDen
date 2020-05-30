// Accessing express 
const express = require('express');

const app = express();

// Intializing PORT for the server

const port = 8000;



app.listen(port,(err) =>{
    if(err){
        console.log(`Unable to start the server :/ ${err}`);
        return;
    }

    console.log(`Server is running fine :) at : http://localhost:${port}`);
})