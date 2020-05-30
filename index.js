//TODO:
// Setup the directory structure
// Install the express

// Accessing express 
const express = require('express');

const app = express();

// importing router
app.use('/',require('./routes'));

// Intializing PORT for the server

const port = 8000;



app.listen(port,(err) =>{
    if(err){
        console.log(`Unable to start the server :/ ${err}`);
        return;
    }

    console.log(`Server is running fine :) at : http://localhost:${port}`);
})